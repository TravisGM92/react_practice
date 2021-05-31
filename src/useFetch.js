import { useState, useEffect } from 'react';

const useFetch = (url) => { {/* custom React hooks have to start with 'use' */}
    const [data, setData] = useState(null); {/* Called a 'hook'. First part is the defined state (variable name), second is the function. The 'null' is the default value */}
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
    }, []); 
    return { data, isPending, error }
}

export default useFetch;
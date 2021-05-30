import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null); {/* Called a 'hook'. First part is the defined state (variable name), second is the function. The 'null' is the default value */}
    const [isPending, setIsPending] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
            })
    }, []);

    return (
        <div className="home">
            { isPending && <div>Loading...</div>}

            {blogs && <BlogList blogs={ blogs } title="All Blogs"/>} { /*user defined component */}
            <div>
                <button onClick={() => setCount(count + 1)}>Current value: { count }</button>
            </div>
        </div>
    );
}

export default Home;
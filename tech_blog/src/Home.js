import { useEffect, useState } from "react";
import BlogList from './BlogsList'
const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [ispending ,setIsPending] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false)
      })
  }, [])

  return (
    <div className="home">
      {ispending && <div> loading..</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;
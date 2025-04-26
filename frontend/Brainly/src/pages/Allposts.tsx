import React, { useState, useEffect } from 'react'

const Allposts = () => {
  const [posts, setPosts] = useState([]);

  const getposts= async ()=>{
    const response = await fetch("http://localhost:3000/content/allcontent")
    const data = await response.json();
    setPosts(data.allcontent);
  }

  useEffect(() => {
    
   getposts()
  }, [posts])
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <div >
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.status}</p>
          <p>{post.votes}</p>
        </div>
      ))}
    </div>
  )
}

export default Allposts
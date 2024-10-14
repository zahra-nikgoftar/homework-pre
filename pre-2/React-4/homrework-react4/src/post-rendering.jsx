import React from "react";
import { useState ,useEffect} from 'react'


function PostRendering() {  
  const [posts, setPosts] = useState([]);  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {  
    const fetchPosts = async () => {  
      try {  
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');  
        const data = await response.json();  
        setPosts(data);  
        setLoading(false);  
      } catch (error) {  
        console.error('Error fetching posts:', error);  
        setLoading(false);  
      }  
    };  

    fetchPosts();  
  }, []);  

  return (  
    <div className="post-list">  
      {loading ? (  
        <p className="loading">Loading...</p>  
      ) : (  
        <ul>  
          {posts.map((post) => (  
            <li key={post.id} className="post-item">  
              <h3 className="post-title">{post.title}</h3>  
              <p className="post-body">{post.body}</p>  
            </li>  
          ))}  
        </ul>  
      )}  
    </div>  
  );  
}  

export {PostRendering};














export default PostRendering;

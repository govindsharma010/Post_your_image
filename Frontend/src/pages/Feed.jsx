import React, { useState, useEffect } from 'react'
//import { matchPath } from 'react-router-dom'

import axios from "axios" 

const feed = () => {

    // creating state variable
   const [posts, setPosts] = useState([
    {
        _id: "1",
       // add unsplash image link
       image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdW5kfGVufDB8fDB8fHww&w=1000&q=80",
       caption: "Beautiful sunset at the beach"
        

    }
   ])

   useEffect(() => {
    //fetching data from backend
     axios.get("http://localhost:3000/posts")
     .then((res) => {
        console.log(res.data.posts)
        setPosts(res.data.posts)
     }) 

   }, [])


  return (
   <section className='feed-section'>
      {
        //mapping
        posts.length > 0 ?(
            posts.map((post) => (
                <div key = {post._id} className='post-card'>
                    <img src = {post.image} alt = {post.caption} />
                    <p>{post.caption}</p>
                </div>
            )   )
        ) :(
            <h1> No posts available</h1>
        )
      }
    </section>
  )
}

export default feed
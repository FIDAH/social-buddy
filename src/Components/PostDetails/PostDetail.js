import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';


const PostDetail = () => {
    
    const{id} = useParams();
    const[posts, setPosts] = useState({});
    console.log(posts);
    const[comments, setComments] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPosts(data))

    },[])

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)

      .then(res=>res.json())
      .then(data=>setComments(data))
    },[])
    return (
        <div>
            <div style={{backgroundColor:'lightblue',
            border:'1px solid black',
            borderRadius:'10px',
            marginTop:'5px'
        }}>
            <h3>here are the post details of id: {id}</h3>
    <h3>title: {posts.title}</h3>
    <h4>body: {posts.body}</h4>
            </div>
    {
          comments.map(comments=><Comments comments={comments}></Comments>)
    }
        </div>
    );
};

export default PostDetail;
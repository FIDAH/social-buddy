import React from 'react';



const Comments = (props) => {
   
    const{postId, id, name, email, body} = props.comments;
    const imageStyle = {
        height: "50px", width: "50px", borderRadius: "50%",marginTop:"0px", alignItems:'center'
        
    }
    const postStyle ={
        width:'100%',
        height:'330px',
        backgroundColor:'cyan',
        fontWeight:500,
        paddingBottom:'20px',
        textAlign:'center'
    }
    return (
        <div style={postStyle}>
           
            <h2>Comment for postId: {postId}</h2>
            <h4 style={{fontWeight:'bold',fontSize:'20px'}}>id: {id}</h4>
            <img style={imageStyle} src={`https://loremflickr.com/600/400?random=${Math.random() * 100}`} alt="" />
    <h5 style={{fontWeight:'bold',fontSize:'20px'}}>{name} </h5>
    
    <p style={{}}>email:{email}</p>
    <p>body:{body}</p>
   


        </div>
    );
};

export default Comments;
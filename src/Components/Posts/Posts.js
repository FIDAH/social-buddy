import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      Width: '845px',
      Height:'500px',
      border:'1px solid black',
      marginBottom:'20px',
     borderRadius:'10px',
     marginLeft:'20px'
    },
  });
  

const Posts = (props) => {
     console.log(props.posts);
    const classes = useStyles();
   const{ id, title, body} = props.posts;
   
          
    return (
        <div>
            <Card className={classes.root}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
    <h3 style={{textAlign:'center'}}>Id:{id}</h3>       
           </Typography>
          
        </CardContent>
      </CardActionArea>
      
    <Link to ={`/posts/${id}`} style={{textDecoration:'none'
}}>
 <Button variant='contained' color="primary" style={{width:'200px',
  backgroundColor:'red',
 
 marginTop:'-50px',
 marginLeft:'530px'
 
}}>
     See More 
    </Button>
        
        
        </Link>  
        
    </Card>
        </div>
    );
};

export default Posts;
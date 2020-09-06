import React, { useState, useEffect } from 'react';
import './App.css';
import Posts from './Components/Posts/Posts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import PostDetail from './Components/PostDetails/PostDetail';


function App() {
  
  
  return (
    <Router>
     <Switch>
       <Route path='/home'>
       <Home/>

       </Route>

       <Route path="/posts/:id">
         <PostDetail></PostDetail>
       </Route>

       <Route exact path='/'>
        <Home/> 

       </Route>
       <Route path='*'>
         <NoMatch/>
       </Route>
     </Switch>
    </Router>
  );
}

export default App;

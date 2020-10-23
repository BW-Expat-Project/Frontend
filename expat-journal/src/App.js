import React from "react";
import { Route, NavLink } from "react-router-dom";
import PostList from "./components/PostList";
import { PostProvider } from "./contexts/PostContext";
import Home from "./components/Home";
import Post from "./components/Post";
import UpdateForm from "./components/UpdateForm";
import PostForm from "./components/PostForm";
import FormState from "./components/FormState"
import "./App.css";

function App() {
  return (
    <div className="App">
      <PostProvider>
        
          {/* Navbar */}
          <nav>
            <h1 className="store-header">Nomad Journal</h1>
            <div className="nav-links">
              
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink exact to="/signup">
                Sign Up
              </NavLink>
              <NavLink to="/post-list">Dashboard</NavLink>
              <NavLink exact to="/post-form">
                Add Post
              </NavLink>
            </div>
          </nav>

          {/* Routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={FormState} />
          <Route exact path="/post-list" component={PostList} />
          <Route exact path="/post-list/:id" component={Post} />
          <Route exact path="/update-post/:id" component={UpdateForm} />
          <Route exact path="/post-form" component={PostForm} />
      
      </PostProvider>
    </div>
  );
}

export default App;

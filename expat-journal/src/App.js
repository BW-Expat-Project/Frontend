import React from "react";
import { Route, NavLink } from "react-router-dom";
import PostList from "./components/PostList";
import { PostProvider } from "./contexts/PostContext";
// import { LoadingProvider } from "./contexts/LoadingContext";
import Home from "./components/Home";
import Post from "./components/Post";
import UpdateForm from "./components/UpdateForm";
import PostForm from "./components/PostForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PostProvider>
        
          {/* Navbar */}
          <nav>
            <h1 className="store-header">Nomad Journal</h1>
            <div className="nav-links">
              <NavLink exact to="/post-form">
                Add Post
              </NavLink>
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/post-list">Dashboard</NavLink>
            </div>
          </nav>

          {/* Routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/post-list" component={PostList} />
          <Route exact path="/post-list/:id" component={Post} />
          <Route exact path="/update-post/:id" component={UpdateForm} />
          <Route exact path="/post-form" component={PostForm} />
      
      </PostProvider>
    </div>
  );
}

export default App;

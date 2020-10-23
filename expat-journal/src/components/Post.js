  
import React, { useContext } from "react";
import { Route, NavLink, useHistory, useParams } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";
import axios from "axios";

const Post = (props) => {
  const [post, setPost] = useContext(PostContext);
  const history = useHistory();
  const params = useParams();

  const postId = parseInt(params.id);

  const item = post.find((thing) => thing.id === postId);

  

  // console.log("post id", postId);

  // console.log("params", params);

  // console.log("props", props);
  console.log("post array", post);

  // console.log("item", item);

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => console.log(error));

    post.filter(p => p.id !== postId)

  };



  return (
    <div>
      <div className="item-wrapper">
        <div className="item-title-wrapper">
          {/* add title */}
          <h2>{item.title}</h2>
        </div>
        <div className="item-header">
          <div className="image-wrapper">
            {/* // add image */}
            <img src={item.url} alt="picture" />
          </div>
        </div>
      </div>

      {/* Navbar */}

      <nav className="item-sub-nav">
        <NavLink exact to={`/post-list/${item.id}`}>
          Story
        </NavLink>
      </nav>

      {/* Route */}

      <Route exact path="/post-list/:id" />

      {/* Buttons */}

      <button
        onClick={() => history.push(`/update-post/${item.id}`)}
        className="md-button"
      >
        Edit
      </button>

      <button className="md-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Post;
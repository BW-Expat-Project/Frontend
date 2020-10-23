import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams, useHistory } from "react-router-dom";

const initialItem = {
  url: "",
  title: "",
};

const PostForm = (props) => {
//   const history = useHistory();
//   const { id } = useParams();
  const [item, setItem] = useState(initialItem);

  useEffect(() => {
    axios
      .get()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);

  const changeHandler = (ev) => {
    ev.persist();
    let value = ev.target.value;

    setItem({
      ...item,
      [ev.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          onChange={changeHandler}
          placeholder="Url"
          value={item.name}
        />
        <div className="baseline" />
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="Title"
          value={item.title}
        />
        <div className="baseline" />
        <button className="md-button form-button">Add New Post</button>
      </form>
    </div>
  );
};

export default PostForm;
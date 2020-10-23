import React, { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import {useHistory} from 'react-router-dom'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
  } from "reactstrap";


const PostList = () => {
  const history = useHistory();
  const [post, setPost] = useContext(PostContext);

    function routeToPost(ev, item) {
        ev.preventDefault();
        history.push(`/post-list/${item.id}`)
    }

    const deleteToken = localStorage.getItem('deletePost')
    
    const postCard = post.filter(p => p.id !== parseInt(deleteToken))
    // setTimeout(() => {
    //   localStorage.clear("deletePost")
    // }, 10000);

  return (
    <div className="items-list-wrapper">
      {postCard.map((item) => (
        <Card className="item-card" onClick={(ev) => routeToPost(ev, item)} key={item.id}>
        <CardImg top width="20%" src={item.url} alt="Card image cap"  className="item-list-image" />
        <CardBody>
          <CardText>{item.title}</CardText>
        </CardBody>
      </Card>
      ))}
    </div>
  );
};


export default PostList;
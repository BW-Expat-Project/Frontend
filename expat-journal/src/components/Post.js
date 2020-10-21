import React from 'react';


const Post = (props)=>{
    return(
        <div>

            <h3>{props.post.username}</h3>
            <div>
                <img src={props.post.imgUrl} alt="" />
            </div>
            {!props.post.story ? (<></>): (<p>{props.post.story}</p>)}
        </div>
    )
}

export default Post
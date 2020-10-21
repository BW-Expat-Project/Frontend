import React from 'react';


const PostForm = (props)=>{

    const onChange = ()=>{

    }

    const onSubmit = (e) => {
        e.preventDefault()
        props.addData(props.postForm)
    }

    return(
        <div>
            <form onSubmit={onSubmit} >
                <input 
                    name="imgUrl"
                    type="text"
                    required
                    onChange={onChange}
                    value={props.postForm.imgUrl}
                />
                <input 
                    name="story"
                    type="text"
                    onChange={onChange}
                    value={props.postForm.story}
                />

                <button>Create Post</button>
            </form>
        </div>
    )
}

export default PostForm
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchData} from './store/actions'
import Post from './Post';

const HomePage = (props)=>{

    useEffect((props)=>{
        props.fetchData()
    },[props.posts.length])

    return(
        <div>
            {props.posts.map(post => (
                <Post post={post} />
            ))}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        posts: state.posts,
        post: state.post,
    }
}

export default  connect(mapStateToProps, {fetchData})(HomePage)
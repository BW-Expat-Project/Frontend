import axios from "axios"
import {DATA_LOADING, FETCH_POSTS_SUCCESS, DELETE_POST, UPDATE_POST, DATA_FAIL } from "../actions"

export const initialState = {
    posts: [],
    isLoading: false,
    error: "",
    post: {
        username: "",
        imgUrl: "",
        story: "",
    },
    postForm: {
        imgUrl: "",
        story: "",
    },

}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case DATA_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                isLoading: false,
                error: ''
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: action.payload,
                isLoading: false,
                error: ''
            }
            
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.post_id !== action.payload),
                isLoading: false,
                error: ''
            }
        case DATA_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
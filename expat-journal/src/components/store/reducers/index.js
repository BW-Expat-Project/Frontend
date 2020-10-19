import axios from "axios"
import {DATA_LOADING, FETCH_POSTS_SUCCESS, DELETE_POST, UPDATE_POST, DATA_FAIL } from "../actions"

export const initialState = {
    posts: [],
    isLoading: false,
    error: "",
    postForm: {
        username: "",
        photo: "",
        story: "",
    }
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}
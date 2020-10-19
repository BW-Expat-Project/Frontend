import axios from "axios"

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

export const reducer = (state, action) => {
    switch(action.type){
        default:
            return state
    }
}
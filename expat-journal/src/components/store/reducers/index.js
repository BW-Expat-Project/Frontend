import axios from "axios"
import {DATA_LOADING, FETCH_DATA_SUCCESS, DELETE_POST, UPDATE_POST, DATA_FAIL } from "../actions"

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
        case DATA_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: ''
            }
        case UPDATE_POST:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: ''
            }
            
        case DELETE_POST:
            return {
                ...state,
                data: state.data.entries.filter(entry => entry.entry_id !== action.payload),
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
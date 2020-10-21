import axiosWithAuth from "../../utils/axiosWithAuth";

export const DATA_LOADING = "DATA_LOADING";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DATA_FAIL = "DATA_FAIL";

export const fetchData = (id) => (dispatch) => {
  dispatch({ type: DATA_LOADING })
  axiosWithAuth()
    .get()
    .then((res) => dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: DATA_FAIL, payload: err }));
};

export const addData = (data, id) => (dispatch) => {
    dispatch({type: DATA_LOADING})
    axiosWithAuth()
    .post().then(res => {
        dispatch({type: FETCH_POSTS_SUCCESS, payload: res.data})
    }).catch((err) => dispatch({type: DATA_FAIL, payload: err})).finally(() => window.location = '/')
}

export const editData = (editedData, id) => (dispatch) => {
    dispatch({type: DATA_LOADING})
    axiosWithAuth()
    .put()
    .then(res => {
        dispatch({type: UPDATE_POST, payload: res.data})
    }).catch((err) => dispatch({type: DATA_FAIL, payload: err})).finally(() => window.location = '')
}

export const deleteData = (id) => (dispatch) => {
    axiosWithAuth()
    .delete()
    .then(res => {
        dispatch({type: DELETE_POST, payload: id})
    })
    .catch(err => 
        dispatch({type: DATA_FAIL, payload: err})
        )
}

import axios from 'axios';
import axiosAuth from '../utils/axiosAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

export const GETUSERS_START = 'GETUSERS_START';
export const GETUSERS_SUCCESS = 'GETUSERS_SUCCESS';
export const GETUSERS_FAILURE = 'GETUSERS_FAILURE';

export const GETUSER_START = 'GETUSER_START';
export const GETUSER_SUCCESS = 'GETUSER_SUCCESS';
export const GETUSER_FAILURE = 'GETUSER_FAILURE';

export const UPDATEUSER_START = 'UPDATEUSER_START';
export const UPDATEUSER_SUCCESS = 'UPDATEUSER_SUCCESS';
export const UPDATEUSER_FAILURE = 'UPDATEUSER_FAILURE';

export const DELETEUSER_START = 'DELETEUSER_START';
export const DELETEUSER_SUCCESS = 'DELETEUSER_SUCCESS';
export const DELETEUSER_FAILURE = 'DELETEUSER_FAILURE';



export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });
    return axios
      .post('https://split-trip-bw.herokuapp.com/api/auth/register', creds)
      .then(res => {
        console.log("REGISTER RES: ", res)
        dispatch({ type: REGISTER_SUCCESS});
      })
      .catch(err => {
        console.log("REGISTER ERR: ", err)
        dispatch({ type: REGISTER_FAILURE});
      });
};

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('https://split-trip-bw.herokuapp.com/api/auth/login', creds)
        .then(res => {
            console.log("LOGIN_RES: ", res)
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
        })
        .catch(err => {
            console.log("LOGIN ERR: ", err)
            dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
        });
};

export const getHome = () => (dispatch) => {
    dispatch ({type: GET_START})
    axiosAuth()
        .get('https://split-trip-bw.herokuapp.com')
        .then(res => {
            console.log("GETHOME RES: ", res)
            dispatch({type: GET_SUCCESS})
        })
        .catch(err => {
            console.log("GETHOME ERR: ", err)
            dispatch({type: GET_FAILURE})
        })
};

export const getUsers = () => (dispatch) => {
    dispatch ({type: GETUSERS_START})
    axiosAuth()
        .get('https://split-trip-bw.herokuapp.com/api/users')
        .then(res => {
            console.log("GETUSERS RES: ", res)
            dispatch({type: GETUSERS_SUCCESS})
        })
        .catch(err => {
            console.log("GETUSERS ERR: ", err)
            dispatch({type: GETUSERS_FAILURE})
        })
};

export const getUser = (user_id) => (dispatch) => {
    dispatch ({type: GETUSER_START})
    axiosAuth()
        .get(`https://split-trip-bw.herokuapp.com/api/users/${user_id}`)
        .then(res => {
            console.log("GETUSER RES: ", res)
            dispatch({type: GETUSER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("GETUSER ERR: ", err)
            dispatch({type: GETUSER_FAILURE})
        })
};

export const updateUser = (id, userObj) => dispatch => {
    dispatch({ type: UPDATEUSER_START });
    axiosAuth()
      .patch(`https://split-trip-bw.herokuapp.com/api/users/${id}`, userObj)
      .then(res => {
        console.log("UPDATEUSER RES: ", res)
        dispatch({ type: UPDATEUSER_SUCCESS, payload: res.data.posts});
      })
      .catch(err => {
        console.log("UPDATEUSER ERR: ", err)
        dispatch({ type: UPDATEUSER_FAILURE});
      });
};

export const deleteUser = (id) => dispatch => {
    dispatch({ type: DELETEUSER_START });
    axiosAuth()
      .delete(`https://split-trip-bw.herokuapp.com/api/users/${id}`)
      .then(res => {
        console.log("DELETEUSER RES: ", res)
        dispatch({ type: DELETEUSER_SUCCESS});
      })
      .catch(err => {
        console.log("DELETEUSER ERR: ", err)
        dispatch({ type: DELETEUSER_FAILURE});
      });
};
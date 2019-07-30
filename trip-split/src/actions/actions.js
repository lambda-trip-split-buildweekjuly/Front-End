import axios from 'axios';
// import axiosAuth from '../utils/axiosAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });
    return axios
      .post('https://split-trip-bw.herokuapp.com/api/register', creds)
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
        .post('https://split-trip-bw.herokuapp.com/api/login', creds)
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
import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
    GET_START, GET_SUCCESS, GET_FAILURE,
    GETUSERS_START, GETUSERS_SUCCESS, GETUSERS_FAILURE,
    GETUSER_START, GETUSER_SUCCESS, GETUSER_FAILURE,
    UPDATEUSER_START, UPDATEUSER_SUCCESS, UPDATEUSER_FAILURE,
    DELETEUSER_START, DELETEUSER_SUCCESS, DELETEUSER_FAILURE,
    } from '../actions/actions';

let defaultState = {
    registering: false,
    registered: false,
    loggingIn: false,
    loggedIn: false,

}

export default function reducer (state = defaultState, action) {
    switch(action.type){
        case REGISTER_START:
            return {
                ...state,
                registering: true,
            }           
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                registered: true,
            }           
        case REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                registered: false,
            }  
        //################################
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
            }           
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
            }   
        //################################
        case GET_START:
            return {
                ...state,
            }
        case GET_SUCCESS:
            return {
                ...state,
            }           
        case GET_FAILURE:
            return {
                ...state,
                } 
        //################################
        case GETUSERS_START:
            return {
                ...state,
            }
        case GETUSERS_SUCCESS:
            return {
                ...state,
            }           
        case GETUSERS_FAILURE:
            return {
                ...state,
                } 
        //################################
        case GETUSER_START:
            return {
                ...state,
            }
        case GETUSER_SUCCESS:
            return {
                ...state,
            }           
        case GETUSER_FAILURE:
            return {
                ...state,
                } 
        //################################
        case UPDATEUSER_START:
            return {
                ...state,
            }
        case UPDATEUSER_SUCCESS:
            return {
                ...state,
            }           
        case UPDATEUSER_FAILURE:
            return {
                ...state,
                } 
        //################################
        case DELETEUSER_START:
            return {
                ...state,
            }
        case DELETEUSER_SUCCESS:
            return {
                ...state,
            }           
        case DELETEUSER_FAILURE:
            return {
                ...state,
                } 
        default:
            return state;
    }    
}
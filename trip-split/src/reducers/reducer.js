import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
    } from '../actions/actions';

let defaultState = {
    state: "works"
}

export default function reducer (state = defaultState, action) {
    switch(action.type){
        case REGISTER_START:
            return {
                ...state,
            }           
        case REGISTER_SUCCESS:
            return {
                ...state,
            }           
        case REGISTER_FAILURE:
            return {
                ...state,
            }  
        //################################
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
            }           
        case LOGIN_FAILURE:
            return {
                ...state,
                }   
        default:
            return state;
    }    
}
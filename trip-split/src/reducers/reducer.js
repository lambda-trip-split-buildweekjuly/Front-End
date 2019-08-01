import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
    GET_START, GET_SUCCESS, GET_FAILURE,
    GETUSERS_START, GETUSERS_SUCCESS, GETUSERS_FAILURE,
    GETUSER_START, GETUSER_SUCCESS, GETUSER_FAILURE,
    UPDATEUSER_START, UPDATEUSER_SUCCESS, UPDATEUSER_FAILURE,
    DELETEUSER_START, DELETEUSER_SUCCESS, DELETEUSER_FAILURE,
    GETTRIPS_START, GETTRIPS_SUCCESS, GETTRIPS_FAILURE,
    GETTRIP_START, GETTRIP_SUCCESS, GETTRIP_FAILURE,
    POSTTRIP_START, POSTTRIP_SUCCESS, POSTTRIP_FAILURE, 
    POSTEXPENSE_START, POSTEXPENSE_SUCCESS, POSTEXPENSE_FAILURE, 
    GETTRIPSBYUID_START, GETTRIPSBYUID_SUCCESS, GETTRIPSBYUID_FAILURE, 
    } from '../actions/actions';


    

// let tripsData = [
//     {
//         user_id: 1,
//         trip_name: "Costa Rica",
//         trip_id: 1,
//         trip_closed: false,
//         expenses:[
//             {
//                 expense_name: "gas",
//                 expense_id: 1,
//                 expense_amount: 100,
//                 expense_members:[
//                     {
//                         person_name: "Vlad",
//                         amount_paid: 25,
//                         person_id: 1
//                     },
//                     {
//                         person_name: "Chris",
//                         amount_paid: 75,
//                         person_id: 2
//                     },
//                 ]
          
//             },
//             {
//                 expense_name: "tickets",
//                 expense_id: 2,
//                 expense_amount: 75,
//                 expense_members:[
//                     {
//                         person_name: "Vlad",
//                         amount_paid: 25,
//                         person_id: 1
//                     },
//                     {
//                         person_name: "Chris",
//                         amount_paid: 25,
//                         person_id: 2
//                     },
//                     {
//                         person_name: "James",
//                         amount_paid: 25,
//                         person_id: 3
//                     },
//                 ]
          
//             } 
//         ]
//     },
//     {
//         user_id: 1,
//         trip_name: "Buenos Aires",
//         trip_id: 2,
//         trip_closed: true,
//         expenses:[
//             {
//                 expense_name: "hotel",
//                 expense_id: 3,
//                 expense_amount: 400,
//                 expense_members:[
//                     {
//                         person_name: "Paul",
//                         amount_paid: 200,
//                         person_id: 4
//                     },
//                     {
//                         person_name: "John",
//                         amount_paid: 200,
//                         person_id: 5
//                     },
//                 ]
          
//             },
//             {
//                 expense_name: "drinks",
//                 expense_id: 4,
//                 expense_amount: 90,
//                 expense_members:[
//                     {
//                         person_name: "Bob",
//                         amount_paid: 30,
//                         person_id: 6
//                     },
//                     {
//                         person_name: "Hank Hill",
//                         amount_paid: 10,
//                         person_id: 7
//                     },
//                     {
//                         person_name: "Heizenberg",
//                         amount_paid: 50,
//                         person_id: 8
//                     },
//                 ]
          
//             } 
//         ]
//     }
// ]

// const closedTrips = tripsData.filter(trip => {
//     return trip.trip_closed
// })

// const openTrips = tripsData.filter(trip => {
//     return trip.trip_closed === false
// })

let defaultState = {
    registering: false,
    registered: false,
    loggingIn: false,
    loggedIn: false,
    trips: [],
    closedTrips: [],
    openTrips: [],
    user_id: null,

}

export default function reducer (state = defaultState, action) {
    switch(action.type){
        //payload: none
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
        //payload: none
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('user_id', action.payload)
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
        //payload: none
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
        //payload: all users
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
        //payload: user information
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
        //payload: none
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
        //payload: none
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
        //################################
        //payload: all trips in database
        case GETTRIPS_START:
            return {
                ...state,
            }
        case GETTRIPS_SUCCESS:
            return {
                ...state,
            }           
        case GETTRIPS_FAILURE:
            return {
                ...state,
                }
        //################################
        //payload: trip by ID passed in
        case GETTRIP_START:
            return {
                ...state,
            }
        case GETTRIP_SUCCESS:
            return {
                ...state,
            }           
        case GETTRIP_FAILURE:
            return {
                ...state,
                }
        //################################
        //payload: none
        case POSTTRIP_START:
            return {
                ...state,
            }
        case POSTTRIP_SUCCESS:
            return {
                ...state,
            }           
        case POSTTRIP_FAILURE:
            return {
                ...state,
            }
        //################################
        //payload: none
        case POSTEXPENSE_START:
            return {
                ...state,
            }
        case POSTEXPENSE_SUCCESS:
            return {
                ...state,
            }           
        case POSTEXPENSE_FAILURE:
            return {
                ...state,
            }
        //################################
        //payload: all trips by user_id passed in
        case GETTRIPSBYUID_START:
            return {
                ...state,
            }
        case GETTRIPSBYUID_SUCCESS:
            return {
                ...state,
                trips: action.payload,
                openTrips: action.payload.filter(trip => {
                    return trip.trip_opened
                }),
                closedTrips: action.payload.filter(trip => {
                    return trip.trip_opened === false
                }),
            }           
        case GETTRIPSBYUID_FAILURE:
            return {
                ...state,
            }
        //################################
        default:
            return state;
    }    
}


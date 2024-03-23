import { types } from "../types"

const initialState={
    users:[],
    user:[]
}

export default function usersReducer(state=initialState, action){
    switch(action.type){
        case types.USERS:
            return{...state, users: action.payload}
        case types.USER:
            return{...state, user: action.payload}
        default: return state
    }
}
import { types } from "../types"

const initialState={
    title:""
}

export default function titleReducer(state=initialState, action){
    if(action.type===types.changeTitle){
        return {...state, title:'hello'}
    }else if(action.type===types.withParams){
        return{...state, title: action.payload}
    }

    return state 
}
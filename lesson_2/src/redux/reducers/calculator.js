import { types } from "../types"

const initialState={
    result: ''
}
export default function calculator(state=initialState, action){
    if (action.type===types.PLUS){
        return{...state, result: action.payload}
    }else if(action.type===types.MINUS){
        return{...state, result: action.payload}
    }else if(action.type===types.UMNOJENIE){
        return{...state, result: action.payload}
    }else if(action.type===types.DELENIE){
        return{...state, result: action.payload}
    }
    return state
}
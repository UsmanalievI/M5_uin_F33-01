import { types } from "../types";

const initialState={
    photo:[]
}

export default function photoReducer(state=initialState, action){
    if(action.type===types.PHOTO){
        return{...state, photo: action.payload}
    }
    return state
}
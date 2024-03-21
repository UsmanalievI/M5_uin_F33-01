import { types } from "./types"

export function changeTitleAction(){
    return {
        type: types.changeTitle
    }
}

export function withParamsAction(title){
    return{
        type:types.withParams,
        payload:title
    }
}

export function changeInputAction(value){
    return{
        type: types.VALUE,
        payload: value
    }
}

export function addUserAction(name){
    return{
        type: types.ADD,
        payload: name
    }
}
export function deleteUsersAction(){
    return{
        type: types.DELETE
    }
}
export function resultCalculator(ravno){
    return{
        type: types.PLUS,
        payload: ravno
    }
}
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
export function plus(equally){
    return{
        type: types.PLUS,
        payload: equally
    }
}
export function minus(equally){
    return{
        type: types.MINUS,
        payload: equally
    }
}
export function delenie(equally){
    return{
        type: types.DELENIE,
        payload: equally
    }
}
export function umnojenie(equally){
    return{
        type: types.UMNOJENIE,
        payload: equally
    }
}
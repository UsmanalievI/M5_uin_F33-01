import { types } from "./types"

function preloaderOn(){
    return{
        type: types.PRELOADER_ON
    }
}

function preloaderOff(){
    return{
        type: types.PRELOADER_OFF
    }
}

export function addUserAction(user){
    return async function (dispatch){
        dispatch(preloaderOn())
        const options={
            method: "POST",
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        }
        const response=await fetch ('https:/jsonplaceholder.typicode.com/users', options)
        if(response.status>=200||response.status<=204){
            dispatch(preloaderOff())
        }
    }
}
function getUserAction(users){
    return{
        type: types.USERS,
        payload: users
    }
}
export function fetchUserAction(){
    return async function (dispatch){
       const response=await fetch ('https://jsonplaceholder.typicode.com/users') 
       const data=await response.json()
       dispatch(getUserAction(data))
    }
}
function getUserInfoAction(user){
    return{
        type: types.USER,
        payload: user
    }
}
export function userInfoAction(id){
    return async function (dispatch){
        const response=await fetch (`https://jsonplaceholder.typicode.com/users/${id}`) 
        const data=await response.json()
        dispatch(getUserInfoAction(data))
    }
}

function getPhotoAction(photo){
    return{
        type: types.PHOTO,
        payload: photo
    }
}
export function fetchPhotoAction(){
    return async function (dispatch){
       const response=await fetch ('https://jsonplaceholder.typicode.com/photos/?limit=10&offset=10') 
       const data=await response.json()
       dispatch(getPhotoAction(data))
    }
}
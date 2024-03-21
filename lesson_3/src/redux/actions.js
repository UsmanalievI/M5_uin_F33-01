import { types } from "./types"

export function asyncFunctionAction(){
    return function(){
        setTimeout(()=>{
            alert('heelo')
        }, 2000)
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
       const response=await fetch ('https://jsonplaceholder.com/users') 
       const data=await response.json()
       dispatch(getUserAction(data))
    }
}
import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchUserAction } from "../../redux/actions";
import User from "../../components/changeTitle/User";

function UsersPage(){
    const dispatch=useDispatch()
    const {users}=useSelector(state=>state.usersReducer)
    
    useEffect(()=>{
        dispatch(fetchUserAction())
    }, [])
    console.log(users);
    return(
        <>
            <div>{users.map((userInfo)=><User userInfo={userInfo}/>)}</div>
        </>
        
    )
}
export default UsersPage
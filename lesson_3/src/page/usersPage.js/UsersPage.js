import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchUserAction } from "../../redux/actions";
import User from "../../components/user/User";
import classes from './UserPage.module.css'

function UsersPage(){
    const dispatch=useDispatch()
    const {users}=useSelector(state=>state.usersReducer)
    
    useEffect(()=>{
        dispatch(fetchUserAction())
    }, [])

    return(
        <div>
            <div className={classes.block}>{users.map((userInfo)=><User key={userInfo.id} userInfo={userInfo}/>)}</div>
        </div>
        
    )
}
export default UsersPage
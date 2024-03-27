import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchUserAction } from "../../redux/actions";
import CustomCard from "../../components/customCard/CustomCard";
import classes from './UserListPage.module.css'

function UserListPage(){
    const dispatch=useDispatch()
    const {users}=useSelector(state=>state.userReducer)
    
    useEffect(()=>{
        dispatch(fetchUserAction())
    }, [])

    return(
        <div>
            <div className={classes.block}>{users.map((userInfo)=><CustomCard key={userInfo.id} userInfo={userInfo}/>)}</div>
        </div>
        
    )
}
export default UserListPage
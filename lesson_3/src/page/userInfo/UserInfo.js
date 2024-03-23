import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { userInfoAction } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import classes from './UserInfo.module.css'

function UserInfo() {
    const {id}=useParams()

    const user=useSelector(state=>state.usersReducer.user)
    const dispatch=useDispatch()
    console.log(user);
    useEffect(()=>{
        dispatch(userInfoAction(id))
    }, [id])
    

  return (
    <div className={classes.block}>
        <h2>Name: {user?.name}</h2>
        <img alt='userIcon' src='https://d2f7anuvnar8n5.cloudfront.net/external_assets/examples/lady_v2/result.svg'/>
        <div>
            <p>Username: {user?.username}</p>
            <p>E-mail: {user?.email}</p>
            <p>Address: {user?.address?.street}</p>
            <p>Phone Number: {user?.phone}</p>
            <p>Company: {user?.company?.name}</p>
        </div>
    </div>
  )
}

export default UserInfo
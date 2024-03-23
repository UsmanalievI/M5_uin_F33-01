import React from 'react'
import classes from './User.module.css'
import { Link } from 'react-router-dom'

function User({userInfo}) {

  return (
    
    <Link to={`/${userInfo?.id}`} className={classes.link}>
        <div className={classes.block}>
            <img alt='userIcon' src='https://d2f7anuvnar8n5.cloudfront.net/external_assets/examples/lady_v2/result.svg'/>
            <div>
            <h2>{userInfo.name}</h2>
            <p>{userInfo?.username}</p>
            <p>{userInfo?.email}</p>
            </div>
        </div>

    </Link>
       
        
  )
}

export default User
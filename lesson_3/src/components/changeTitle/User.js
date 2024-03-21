import React from 'react'

function User({userInfo}) {
  return (
    <div>
        <img alt='userIcon'/>
        <div>
          <h1>{userInfo.name}</h1>
          <p>{userInfo?.username}</p>
          <p>{userInfo?.email}</p>
        </div>
    </div>
  )
}

export default User
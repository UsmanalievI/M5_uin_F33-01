import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, changeInputAction, deleteUsersAction } from "../../redux/actions";
import User from "../../components/changeTitle/User";

function UsersPage(){

    const {users, value}=useSelector(state=>state.usersReducer)
    const dispatch=useDispatch()

    const changeInput=(event)=>{
        dispatch(changeInputAction(event.target.value))
    }

    const addUser=()=>{
        dispatch(addUserAction(value))
    }

    const deleteUsers=()=>{
        dispatch(deleteUsersAction())
    }
    
    return(
        <>
            <input value={value} type="text" placeholder="name" onChange={changeInput}/>
            <button onClick={addUser}>add</button>
            <button onClick={deleteUsers}>delete all</button>

            {users.map((users, idx)=><User key={idx} userName={users}/>)}
        </>
    )
}
export default UsersPage
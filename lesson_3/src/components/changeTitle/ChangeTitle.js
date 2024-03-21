import React from "react";
import { useDispatch } from "react-redux";

function ChangeTitle (){
    const dispatch=useDispatch()

    const changeAboutTitle=()=>{
        dispatch({
            type: 'change_about_title'
        })
    }   

    return (
        <div>
            <button onClick={changeAboutTitle}>new about title</button>
        </div>
    )
}
export default ChangeTitle

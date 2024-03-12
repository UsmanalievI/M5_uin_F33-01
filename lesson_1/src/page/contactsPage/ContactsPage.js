import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

function ContactsPage() {
    const [input, setInput]=useState()

    const title=useSelector(state=>state.contactTitle)
    const dispatch=useDispatch()

    const withParams=()=>{
        dispatch({
            type:'with_params',
            payload:'hello geeks'
        })
    }

    const addInput=()=>{
        dispatch({
            type:'from_input',
            payload: input
        })
    }

    return(
        <div>
            <h1>{title}</h1>
            <button onClick={withParams}>change title with params</button>
            <h2>-----------</h2>
            <input type="text" onChange={(event)=>setInput(event.target.value)}/>
            <button onClick={addInput}>add</button>
        </div>
    )
}

export default ContactsPage
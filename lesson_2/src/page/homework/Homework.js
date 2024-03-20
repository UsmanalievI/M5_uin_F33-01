import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {plus, minus, umnojenie, delenie} from "../../redux/actions";

function Homework(){
    const[first, setFirst]=useState()
    const[second, setSecond]=useState()
    
    const result=useSelector(state=>state.calculator.result)
    const dispatch=useDispatch()

    const plusbtn=(equally)=>{
        var num1=parseFloat(first)
        var num2=parseFloat(second)
        equally=num1+num2
        dispatch(plus(equally))
    }
    const minusbtn=(equally)=>{
        var num1=parseFloat(first)
        var num2=parseFloat(second)
        equally=num1-num2
        dispatch(plus(equally))
    }
    const umnojbtn=(equally)=>{
        var num1=parseFloat(first)
        var num2=parseFloat(second)
        equally=num1*num2
        dispatch(plus(equally))
    }
    const delibtn=(equally)=>{
        var num1=parseFloat(first)
        var num2=parseFloat(second)
        equally=num1/num2
        dispatch(plus(equally))
    }
    
    
    return(
        <>
            <input placeholder='первое значение' type="number" onChange={(event)=>setFirst(event.target.value)}/>
            <input placeholder='второе значение' type="number" onChange={(event)=>setSecond(event.target.value)}/>
            <button onClick={plusbtn}>+</button>
            <button onClick={minusbtn}>-</button>
            <button onClick={umnojbtn}>*</button>
            <button onClick={delibtn}>/</button>
            <div>{result}</div>
        </>
        
    )
}
    
export default Homework
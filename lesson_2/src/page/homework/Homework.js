import React from 'react'
import { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { resultCalculator } from '../../redux/actions'

function Homework() {
    
    const dispatch=useDispatch()
    const [firstInput, setFirstInput]=useState()
    const [secondInput, setSecondInput]=useState()
    const result=useSelector(state=>state.calculator.result)

    let ravno=0
    let first= Number(firstInput)
    let second=Number(secondInput)
    const dobavlenie=()=>{
        if(!firstInput||!secondInput){
            alert('inputa net pojalusta vedite input')
        }else {
            ravno=first+second
            dispatch(resultCalculator(ravno))
        }
    }
    const minis=()=>{
        if(!firstInput||!secondInput){
            alert('inputa net pojalusta vedite input')
        }else {
            ravno=first-second
            dispatch(resultCalculator(ravno))
        }
    }
    const umnojenie=()=>{
        if(!firstInput||!secondInput){
            alert('inputa net pojalusta vedite input')
        }else {
            ravno=first*second
            dispatch(resultCalculator(ravno))
        }
    }
    const delenie=()=>{
        if(!firstInput||!secondInput){
            alert('inputa net pojalusta vedite input')
        }else {
            ravno=first/second
            dispatch(resultCalculator(ravno))
        }
    }

  return (
    <>
        <input type="number" placeholder='perviy input' onChange={(event)=>setFirstInput(event.target.value)}/>
        <input type="number" placeholder='perviy input' onChange={(event)=>setSecondInput(event.target.value)}/>
        <button onClick={dobavlenie}>(+) plus</button>
        <button onClick={minis}>(-) minus</button>
        <button onClick={umnojenie}>(*) umnojenie</button>
        <button onClick={delenie}>(/) delenie</button>
        <div>{result}</div>
    </>
    
  )
}

export default Homework
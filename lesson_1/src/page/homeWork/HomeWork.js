import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './HomeWork.module.css'

function HomeWork(){
    const count=useSelector(state=>state.value)
    const dispatch=useDispatch()

    const increment=()=>{
        dispatch({
            type: 'increment',
            payload: count
        })
    }
    const decriment=()=>{
        if(count>0){
            dispatch({
            type: 'decriment',
            payload: count
        })
        }
        
    }
    const incTen=()=>{
        dispatch({
            type: 'inc_ten',
            payload: count
        })
    }
    const reset=()=>{
        dispatch({
            type: 'reset',
            payload: count
        })
    }

    
    return(
        <div className={classes.base}>
            <div>{count}</div>
            <div className={classes.button}>
                <button onClick={increment}>+1</button>
                <button onClick={decriment}>-1</button>
                <button onClick={incTen}>+10</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
            
    
    )
}

export default HomeWork;
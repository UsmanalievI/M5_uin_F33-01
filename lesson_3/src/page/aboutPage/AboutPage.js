import React from 'react'
import {useDispatch} from 'react-redux'
import { asyncFunctionAction } from '../../redux/actions'

function AboutPage() {

  const dispatch=useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(asyncFunctionAction())}>2 sec</button>
    </div>
  )
}

export default AboutPage
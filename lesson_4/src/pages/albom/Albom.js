import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotoAction } from '../../redux/actions'


function Albom() {
    const {photo}=useSelector(state=>state.photoReducer)
    const dispatch=useDispatch()

    const downloadImage=()=>{
        dispatch(fetchPhotoAction())
    }
  return (
    <div>
        <button onClick={downloadImage}>download photo</button>
        <div>{photo.map((photoSource)=><img src={photoSource?.url}/>)}</div>
    </div>
  )
}

export default Albom
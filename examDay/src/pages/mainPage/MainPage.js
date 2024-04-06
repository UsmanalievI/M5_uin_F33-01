import React, { useState } from 'react'
import { Container } from '../../components/Container'
import { Button } from '../../components/Button'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../redux/PostSlice'

function MainPage() {
    const dispatch=useDispatch()

    const [user, setUser]=useState({
        email:'',
        password:'',
        repeatPassword:''
    })

    const regExp=/^[A-Za-z0-9_+-.]+@gmail\.com$/;

    const changeInput=(event)=>{
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }
    
    const addUser=()=>{
        if(regExp.test(user.email) ||user.password===user.repeatPassword){
            dispatch(getPosts(user))
        }else{
            alert('введенные данные неправильны, перевроверьте')
        }
    }

  return (
    <Container variant='small'>
        <div style={{display: 'flex', justifyContent:'space-between', margin:'30px auto'}}>
            <input
                name='E-Mail'
                label='Enter g-Mail'
                placeholder='g-Mail'
                onChange={changeInput}
            />
            <input
                name='password'
                label='Enter Password'
                placeholder='Password'
                type='password'
                onChange={changeInput}
            />
            <input
                name='repeatPassword'
                label='Repeat Password'
                placeholder='repeat Password'
                type='password'
                onChange={changeInput}
            />
            <Button onClick={addUser} variant='primary'>Sign Up</Button> 
        </div>
    </Container>
  )
}

export default MainPage
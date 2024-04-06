import React from 'react'
import { Container } from '../../components/Container'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

function MainPage() {
    
    const regExp=/^[A-Za-z0-9_+-.]+@gmail\.com$/;

  return (
    <Container variant='large'>
        <div style={{display: 'flex', justifyContent:'space-between'}}>
           <Input
            name='password'
            label='Give me your password dumn'
            placeholder='password'
            type='password'
            />
            <Input
                name='g-Mail'
                label='Give me your E-mail'
                placeholder='E-Mail'
            />
            <Input
                name='number'
                label='Give me your Nomer'
                placeholder='+996 ........'
                type='number'
            />
            <Button variant='primary'>Sign Up</Button> 
        </div>
        
        <div style={{display: 'flex',gap: '10px', margin: '30px auto'}}>
            <p>lodhfwefwefw hgkg hgkgv dfskgdsdhflskd sfsdfsdf sdsdfs </p>
            <p>lodhfwefwefw hgkg hgkgv dsfsdfsd sdfdsf</p>
            <p>lodhfwefwefw hgkg hgkgv sdfsdfds sdfs sdcsd ds</p>
            <p>lodhfwefwefw hgkg hgkgv sdcsd sdvc</p>
            <p>lodhfwefwefw hgkg hgkgv dfwewertg grtdfvgr regterf</p>
        </div>
        <Button variant='outline' disabled={true}>outline</Button>
        <Button variant='delete' disabled={true}>delete</Button>
        <Button disabled={false}>primary</Button>

    </Container>
  )
}

export default MainPage
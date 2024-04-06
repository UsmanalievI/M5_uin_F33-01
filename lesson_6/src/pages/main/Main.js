import React, { useState } from 'react'
import { Container } from '@mui/material'
import TabsComponent from '../../components/tabs/Tabs'
import Souz from '../../components/souz/Souz'
import { SwiperComponent } from '../../components/swiper/Swiper'

const GetCategories=({action})=>{
    switch(action){
        case 'souz':{
            return <Souz/>
        }case 'history':{
            return <p>History</p>
        }case 'homework':{
            return 
        }
        default: return <></>
    }
}

function Main() {

    const categoriesSelect=[
        {value:'souz', label:'o souze'},
        {value:'history', label:'Istoria organization'},
        {value:'organ', label:'organ contol'},
        {value:'projects', label:'Proekty'},
        {value:'ourTeam', label:'Nasha komanda'}
    ]

    const [value, setValue]=useState(categoriesSelect?.[0].value)

    const swiperImage=[

    ]
  return (
    <Container>
        <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
        <GetCategories action={value}/>
        <SwiperComponent swiperImage={swiperImage}/>
    </Container>
  )
}

export default Main
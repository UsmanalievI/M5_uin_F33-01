import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverFlow} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

export const SwiperComponent=({swiperImage, handleChange})=>{
    return(
        <>
            <Swiper>
                {swiperImage.map(item=>
                    <SwiperSlide key={item}>
                        <img src={item?.url}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectFade} from "swiper";
import 'swiper/css/effect-fade'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import application from '../../../../../../assets/nd-application.jpg'
import criminal from '../../../../../../assets/nd-criminal.jpg'
import fidiPlus from '../../../../../../assets/nd-fidiplus.jpg'
import self from '../../../../../../assets/nd-self-study.jpg'
import Box from "@mui/material/Box";

const BannerSlider = () => {
    SwiperCore.use([EffectFade])
    return (

        <Box sx={{
            width:'70rem',
            margin: "100px auto",
            display: 'flex',
            position:'inherit',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center'
        }}>
            <Swiper spaceBetween={2} autoplay={{
                delay: 5000, disableOnInteraction: false,
            }} effect={'fade'} pagination={{clickable: true}}>
                <SwiperSlide><img width={'100%'} src={application}/></SwiperSlide>
                <SwiperSlide><img width={'100%'} src={fidiPlus}/></SwiperSlide>
                <SwiperSlide><img width={'100%'} src={criminal}/></SwiperSlide>
                <SwiperSlide><img width={'100%'} src={self}/></SwiperSlide>
            </Swiper>
        </Box>
    );
};

export default BannerSlider;
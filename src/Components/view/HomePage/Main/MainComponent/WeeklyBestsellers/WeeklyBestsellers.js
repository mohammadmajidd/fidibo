import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";
import {weeklyBestsellersBooks} from "./weeklyBestsellersData";

const WeeklyBestsellers = () => {
    return (
        <Box sx={{
            width: '70rem',
            margin: " auto",
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            flexDirection:'column'
        }}>
            <h4>پر فروش های هفته</h4>

            <Box sx={{
                width: '70rem',
                margin: " auto",
                display: 'flex',
                justifyContent: 'center',
                justifyItems: 'center',
                alignContent: 'center',
            }}>

                <Swiper   slidesPerView={5} pagination={true} >
                    {weeklyBestsellersBooks.map(item=><SwiperSlide key={item.id}><ProductCard  item={item}/></SwiperSlide>)}
                </Swiper>
            </Box>
        </Box>
    );
};

export default WeeklyBestsellers;
import React, {useState} from 'react';
import Header from "./Header/Header";
import TabContent from "./Header/TabContent";
import BannerSlider from "./Main/MainComponent/bannerSlider/bannerSlider";
import WeeklyBestsellers from "./Main/MainComponent/WeeklyBestsellers/WeeklyBestsellers";
import ShingleBanner from "./Main/MainComponent/singleBanners/ShingleBanner";
import {titles} from "./Main/MainComponent/bannersData";
import Footer from "./Footer/Footer";

const HomePage = () => {
    const [title, setTitle] = useState('پرفروش‌های هفته')
    return (
        <div>
            <Header/>
            <TabContent/>
            <BannerSlider/>
            <WeeklyBestsellers title={title} setTitle={setTitle}/>

            {titles.map(item=><di>
                <ShingleBanner src={item.imageSrc}/>
                <WeeklyBestsellers title={item.title}/>
            </di>)}
            <Footer/>
        </div>
    );
};

export default HomePage;
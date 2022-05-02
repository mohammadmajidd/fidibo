import React from 'react';
import Header from "./Header/Header";
import TabContent from "./Header/TabContent";
import BannerSlider from "./Main/MainComponent/bannerSlider/bannerSlider";
import WeeklyBestsellers from "./Main/MainComponent/WeeklyBestsellers/WeeklyBestsellers";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <TabContent/>
            <BannerSlider/>
            <WeeklyBestsellers/>
        </div>
    );
};

export default HomePage;
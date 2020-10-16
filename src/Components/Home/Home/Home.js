import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import SocialMediaSection from '../SocialMediaSection/SocialMediaSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SocialMediaSection></SocialMediaSection>
            <Services></Services>
            <OurWorks></OurWorks>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
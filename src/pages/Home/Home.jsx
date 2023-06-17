import React from 'react';
import Banner from './Banner/Banner';
import ShowInstructor from '../ShowInstructor/ShowInstructor';
import PopularClasses from '../PopularClasses/PopularClasses';
import TextSection from './TextSection/TextSection';
import Explore from './Explore/Explore';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TextSection></TextSection>
            <PopularClasses></PopularClasses>            
            <ShowInstructor></ShowInstructor>
            <Explore></Explore>
            
        </div>
    );
};

export default Home;
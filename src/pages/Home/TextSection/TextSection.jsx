import React from 'react';
import textImg from '../../../../image/a.jpg';
import './TextSection.css';

const TextSection = () => {
    return (
        <div className='flex flex-col md:flex-row m-10'>
            <div className=' text-center'>
            <h1 className='text-4xl text-blue-700 font-bold mt-10 text-justify'>Get ready for the summer of your life</h1>
            <p className='md:pr-24 mt-6 text-lg text-black font-semibold text-justify'>Go on a summer camp abroad with LL ⛺️☀️! Our summer camps include language classes in the mornings and all kinds of sports and cultural activities in the afternoons so you can make the most of your time. If you want to learn a language, play soccer ⚽, dance and meet new friends, our summer camps are the best option this year. ✈</p>
            </div>


            <div className='sun-container md:mr-8 mt-4'>
                <img className='image' src={textImg} alt="" />
            </div>
        </div>
    );
};

export default TextSection;
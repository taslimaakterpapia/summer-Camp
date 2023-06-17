import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../../image/g.jpg';
import slide2 from '../../../../image/h.jpg';
import slide3 from '../../../../image/i.jpg';
import slide4 from '../../../../image/j.jpg';



const Explore = () => {
    return (
        <section>

            <h2 className="text-center my-10 text-5xl text-blue-700 font-bold underline">Explore Destinations</h2>

        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h3 className="text-4xl uppercase text-center text-black -mt-24">USA</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-24 text-black">UK</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-24 text-black">Canada</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-24 text-black">New Zealand</h3>
            </SwiperSlide>
           

        </Swiper>    



    </section>
    );
};

export default Explore;
import Product from './Product'
import './slideProducts.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function SlideProducts({ data, title }) {


    return (
        <>
            <div className='slide-products slide'>
                <div className="container">
                    <div className="top-slide">
                        <h2>{title}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptates?</p>
                    </div>
                    <Swiper
                        loop={true}
                        autoplay=
                        {{ delay: 2000, disableOnInteraction: false }}
                        slidesPerView={4}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper">
                        {data && data.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Product product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default SlideProducts
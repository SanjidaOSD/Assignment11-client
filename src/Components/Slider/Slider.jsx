
import img1 from '../../assets/donate4.jpg'
import img3 from '../../assets/donar.jpg'
import img5 from '../../assets/donate3.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { GoTriangleRight } from "react-icons/go";


// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (

        <div>
            <Swiper navigation={true}
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={
                    { delay: 2000 }
                }
                className="mySwiper">
                <SwiperSlide><div className='w-full lg:h-[600px]'>
                    <img src={img1} alt="" className='rounded-xl' />
                </div>
                    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-slate-700 rounded-xl'>
                        <div className='text-white space-y-5 lp-12 text-center justify-center'>
                            <h2 className='text-3xl font-bold lg:mb-52 w-3/2'><span className='lg:text-6xl text-green-600 mb-12 font-lato font-extrabold'>The Food
                                for People Story</span> <br /> <hr className='font-bold mt-4 justify-start'></hr> <br /><p className='font-lato'>
                                An innovative approach to helping people emerge from the cycle of poverty.<br />
                                </p>
                                <Link to="/availableFood"><button className="btn btn-active bg-orange-500 mt-12">Donated Foods<GoTriangleRight className='font-bold text-3xl'></GoTriangleRight></button></Link>
                            </h2>

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide><div className='w-full lg:h-[600px]'>
                    <img src={img3} alt="" className='rounded-xl' />
                </div>
                    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-slate-600 rounded-xl'>
                        <div className='text-white space-y-5 lp-12 text-center justify-center'>
                            <h2 className='text-3xl font-bold text-center justify-center lg:mb-52 w-3/2'><span className='lg:text-6xl text-green-600 mb-12 font-lato font-extrabold '>The Food
                                for People Story</span> <br /> <hr className='font-bold mt-4 justify-start'></hr> <br /><p className='font-lato'>
                                An innovative approach to helping people emerge from the cycle of poverty.<br />
                                </p>
                                <Link to="/availableFood"><button className="btn btn-active bg-orange-500 mt-12">Donated Foods<GoTriangleRight className='font-bold text-3xl'></GoTriangleRight></button></Link>
                            </h2>

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide><div className='w-full lg:h-[600px]'>
                    <img src={img5} alt="" className='rounded-xl' />
                </div>
                    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-slate-600 rounded-xl'>
                        <div className='text-white space-y-5 lp-12 text-center justify-center'>
                            <h2 className='text-3xl font-bold text-center justify-center lg:mb-52 w-3/2'><span className='lg:text-6xl text-orange-600 mb-12 font-lato font-extrabold'>The Food
                                for People Story</span> <br /> <hr className='font-bold mt-4 justify-start'></hr> <br /><p className='font-lato'>
                                An innovative approach to helping people emerge from the cycle of poverty.<br />
                                </p>
                                <Link to="/availableFood"><button className="btn btn-active bg-orange-500 mt-12">Donated Foods<GoTriangleRight className='font-bold text-3xl'></GoTriangleRight></button></Link>
                            </h2>


                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Slider;






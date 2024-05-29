
// import { useLoaderData } from 'react-router-dom'
import Cart from '../../Components/Cart/Cart';
import Chef from '../../Components/Chef/Chef';
import Faq from '../../Components/Faq/Faq';
import FeaturedFoods from '../../Components/FeaturedFoods/FeaturedFoods';
import Slider from '../../Components/Slider/Slider';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from '../../Components/Gallery/Gallery';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Navbar from '../../LayOut/Navbar';
import { useLoaderData } from 'react-router-dom';

AOS.init();



function Home() {
    const foods = useLoaderData()

    // const places = useLoaderData();



    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            {/* Slider */}
            <div className="lg:mt-4 mt-16">
                <Slider></Slider>
            </div>
            {/* Design cart */}
            <div className='mt-6 mb-16'>
                <Cart></Cart>
            </div>
            {/* Featured Foods */}
            <div className='mt-16 mb-16'>
                {/* <FeaturedFoods></FeaturedFoods> */}
                <h1 className="text-center text-4xl font-bold text-red-600">Featured Foods</h1>
            <p className="text-xl font-lato text-center mt-4 mb-6">At our restaurant, we take pride in showcasing an array of featured foods that <br /> highlight our commitment to quality and culinary innovation.</p>
                <div className='grid lg:grid-cols-3 gap-4'>
                    {
                        foods.slice(0, 6).map(food => <FeaturedFoods
                            key={food._id}
                            food={food}
                        ></FeaturedFoods>)
                    }

                </div>
            </div>

            {/* Faq */}
            <div className='mt-16 mb-16'>
                <Faq></Faq>
            </div>

            {/* Meet our shef */}
            <div className='mt-16 mb-16'>
                <Chef></Chef>
            </div>

            {/* About us */}
            <div className='mt-16 mb-52'>
                <AboutUs></AboutUs>
            </div>

            {/* gallery */}
            <div className='mt-6 mb-2'>
                <h1 className='text-center text-4xl font-bold text-orange-600 mt-6 mb-6'>Our Food Gallery</h1>
                <Gallery></Gallery>
            </div>


            {/* <div className='mt-24 mb-16'>
                <h1 className=' text-center text-5xl font-bold mt-24 mb-4'>Tourist Spot</h1>
                <p className='text-center text-xl'>Places of natural beauty such as beaches, tropical island resorts, national parks, <br /> mountains, deserts and forests, are examples of traditional tourist <br /> attractions which people may visit. </p>
            </div> */}
            {/* <div className='grid md:grid-cols-3 gap-12'>
                {
                    places.slice(0, 6).map(place => <PlaceCard
                        key={place._id}
                        place={place}
                    ></PlaceCard>)
                }

            </div> */}
            {/* <div>
                <div className='mt-24 mb-16'>
                    <h3 className='text-center text-5xl font-bold '>Go Exotic Places</h3>
                    <p className='text-center text-xl'>When it comes to exploring exotic places, the choices are numbers. <br /> Whether you like peacefull destinations or vibrant landscapes, <br />we have offers for you.</p>

                </div>
                <div>
                    <Country></Country>
                </div>

            </div> */}
            {/* <div className='mt-28'>
                <AboutUs></AboutUs>
            </div>
            <hr />
            <div className='mt-44 mb-16'>
                <ChooseTour></ChooseTour>
            </div> */}
        </>
    )
}

export default Home;

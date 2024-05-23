
// import { useLoaderData } from 'react-router-dom'
import Cart from '../../Components/Cart/Cart';
import Slider from '../../Components/Slider/Slider';
import { Helmet } from 'react-helmet';



function Home() {

    // const places = useLoaderData();



    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="mt-">
                <Slider></Slider>
            </div>
            <div className='mt-6 mb-16'>
                <Cart></Cart>
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

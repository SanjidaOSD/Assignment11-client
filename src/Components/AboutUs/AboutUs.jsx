import img1 from '../../assets/donate3.jpg'
import img2 from '../../assets/donate2.jpg'
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content relative flex-col lg:flex-row">
                    <img src={img1} className='lg:w-[50%] rounded-lg shadow-2xl' />
                    <img src={img2} className='lg:w-[30%] w-[50%] lg:h-[50%] absolute lg:left-96 lg:lg:top-[60%] border-8 border-orange-500 rounded-lg shadow-2xl' />
                    <div>
                        <div className='lg:ml-44 lg:mt-0 mt-28'>
                            <h1 className='text-orange-600 mb-6 font-bold text-xl'>Most Needed</h1>
                            <h1 className="text-5xl font-bold">Donate some...</h1>
                            <p className="py-6">Provide meat to the less fortunate through your annual Eid Qurbani/ Udhiya. Please donate some food.

                            </p>
                            <Link to='/AddFood'><button className="btn bg-orange-400">Donate now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
import img1 from '../../assets/FaqFood.jpg'
import img2 from '../../assets/img16.jpg'
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
                            <h1 className='text-orange-600 mb-6 font-bold text-xl'>About Us</h1>
                            <h1 className="text-5xl font-bold">Organic and Fresh Foods For Your Health</h1>
                            <p className="py-6">Our foods are more than just dishes; they are a representation of our culinary philosophy and our passion for delivering exceptional meals. Each plate is thoughtfully crafted to ensure that every visit to our restaurant is a celebration of fine food and extraordinary flavors.

                            </p>
                            <Link to='/availableFood'><button className="btn bg-orange-400">See more</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
import { IoMdStar, IoMdStarHalf } from 'react-icons/io';
import img1 from '../../assets/chef1.jpg'
import img2 from '../../assets/chef2.jpg'
import img3 from '../../assets/chef3.jpg'
import img4 from '../../assets/chef4.jpg'


const Chef = () => {
    return (

        <div>
        <h2 className='text-5xl font-bold text-center text-red-600 mt-12 mb-4 font-lato'>Meet Our  Professional  Chef</h2>
        <p className='text-center font-lato text-xl mb-12'>These chefs exemplify the pinnacle of culinary excellence, each bringing their unique vision and innovation <br /> to the  forefront of the gastronomic world. Their contributions continue to inspire <br /> and shape the future of fine dining globally.





</p>
          <div className='lg:flex gap-4'>
            
            {/* chef1 */}
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-110">
                <figure><img src={img1} alt="Shoes" className='h-64' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Ms.Sanjida
                        <div className="badge badge-secondary bg-orange-400">Best Chef</div>
                    </h2>
                    <p>Ms.Sanjida is a world-renowned chef known for his fiery personality and exceptional culinary skills. </p>
                    <div className="card-actions justify-end">
                        <div className="badge text-orange-500"><IoMdStar></IoMdStar><IoMdStar></IoMdStar><IoMdStar></IoMdStar><IoMdStar></IoMdStar><IoMdStar></IoMdStar></div>
                        {/* <div className="badge badge-outline">Products</div> */}
                    </div>
                </div>
            </div>
            {/* chef2 */}
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-110">
                <figure><img src={img2} alt="Shoes" className='h-64' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Mr.Jewel
                        <div className="badge badge-secondary bg-orange-400">Best Chef</div>
                    </h2>
                    <p>Mr.Jewel is a world-renowned chef known for his fiery personality and exceptional culinary skills. </p>
                    <div className="card-actions justify-end">
                        <div className="badge text-orange-600"><IoMdStar></IoMdStar><IoMdStar></IoMdStar><IoMdStar></IoMdStar><IoMdStar></IoMdStar><IoMdStarHalf></IoMdStarHalf></div>
                        {/* <div className="badge badge-outline">Products</div> */}
                    </div>
                </div>
            </div>
            {/* chef3 */}
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-110">
                <figure><img src={img3} alt="Shoes" className='h-64'/></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Mehejabin khan
                        <div className="badge badge-secondary bg-orange-400">Best Chef</div>
                    </h2>
                    <p>Mehejabin Khan is a world-renowned chef known for his fiery personality and exceptional culinary skills. </p>
                    <div className="card-actions justify-end">
                        <div className="badge text-orange-600"><IoMdStar></IoMdStar><IoMdStar></IoMdStar><IoMdStar></IoMdStar><IoMdStar></IoMdStar><IoMdStarHalf></IoMdStarHalf></div>
                        {/* <div className="badge badge-outline">Products</div> */}
                    </div>
                </div>
            </div>
            {/* chef4 */}
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-110">
                <figure><img src={img4} alt="Shoes" className='h-64'/></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shariful Islam
                        <div className="badge badge-secondary bg-orange-400">Best Chef</div>
                    </h2>
                    <p>Shariful Islam is a world-renowned chef known for his fiery personality and exceptional culinary skills. </p>
                    <div className="card-actions justify-end">
                        <div className="badge text-orange-600"><IoMdStar></IoMdStar><IoMdStar></IoMdStar><IoMdStar></IoMdStar><IoMdStar></IoMdStar><IoMdStar></IoMdStar> </div>
                        {/* <div className="badge badge-outline">Products</div> */}
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Chef;
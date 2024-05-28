import img1 from '../../assets/img24.jpg'
import img2 from '../../assets/img12.jpg'
import img3 from '../../assets/img15.jpg'
import img4 from '../../assets/img16.jpg'
import img5 from '../../assets/img17.jpg'
import img6 from '../../assets/img18.jpg'
import img7 from '../../assets/img19.jpg'
import img8 from '../../assets/img20.jpg'
import img9 from '../../assets/img21.jpg'
import img10 from '../../assets/img22.jpg'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
// import img11 from '../../assets/img23.jpg'




const Gallery = () => {
    return (
        <div>
            {/* <div className="carousel rounded-box gap-2">
                <div className="carousel-item">
                    <img src={img1} className='h-[350px] w-[300px] hover:scale-110' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img2} className='h-[350px] w-[300px] hover:scale-110' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img3} className='h-[350px] w-[300px] hover:scale-110' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img4} className='h-[350px] w-[300px] hover:scale-110' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img5} className='h-[350px] w-[300px] hover:scale-110' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img6} className='h-[350px] w-[300px] hover:scale-110' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img7} className='h-[350px] w-[300px] hover:scale-110' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img8} className='h-[350px] w-[300px] hover:scale-110' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img9} className='h-[350px] w-[300px] hover:scale-110' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img10} className='h-[350px] w-[300px] hover:scale-110' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img11} className='h-[350px] w-[300px] hover:scale-110' alt="Burger" />
                </div>

            </div> */}

 <p className='text-center font-lato text-xl mb-10'>Each dish is a testament to our commitment to excellence and creativity, meticulously <br /> crafted by our team of expert chefs. Our menu spans a variety of cuisines, <br /> ensuring that there is something to tantalize every palate.</p>
            {/* .......................... */}
            <div className="carousel w-full flex">

                <div id="item1" className="carousel-item w-full gap-2">
                    <img src={img1} className='h-[220px] w-[200px] lg:h-[350px] lg:w-[300px] hover:scale-110' alt="Burger" />
                    <img src={img2} className='h-[220px] w-[200px] lg:h-[350px] lg:w-[300px] hover:scale-110' alt="Burger" />
                    <img src={img3} className='h-[220px] w-[200px] lg:h-[350px] lg:w-[300px] hover:scale-110' alt="Burger" />
                    <img src={img4} className='h-[220px] w-[200px] lg:h-[350px] lg:w-[300px] hover:scale-110' alt="Burger" />
                    <img src={img5} className='h-[220px] w-[200px] lg:h-[350px] lg:w-[300px] hover:scale-110' alt="Burger" />

                </div>
                <div id="item3" className="carousel-item w-full gap-2">
                    <img src={img6} className='h-[220px] w-[200px] lg:h-[350px] lg:w-[300px] hover:scale-110' alt="Burger" />
                    <img src={img2} className='h-[220px] w-[200px] lg:h-[350px] lg:w-[300px] hover:scale-110' alt="Burger" />
                    <img src={img7} className='h-[220px] w-[200px] lg:h-[350px] lg:w-[300px] hover:scale-110' alt="Burger" />
                    <img src={img8} className='h-[220px] w-[200px] lg:h-[350px] lg:w-[300px] hover:scale-110' alt="Burger" />
                    <img src={img9} className='h-[220px] w-[200px] lg:h-[350px] lg:w-[300px] hover:scale-110' alt="Burger" />                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs h-12 w-12"><FaArrowCircleLeft></FaArrowCircleLeft></a>
                {/* <a href="#item2" className="btn btn-xs">2</a> */}
                <a href="#item3" className="btn btn-xs h-12 w-12"><FaArrowCircleRight></FaArrowCircleRight></a>
            </div>


        </div>
    );
};

export default Gallery;
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
import img11 from '../../assets/img23.jpg'




const Gallery = () => {
    return (
        <div>
            <div className="carousel rounded-box">
                <div className="carousel-item">
                    <img src={img1} className='h-[350px] w-[300px]' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img2} className='h-[350px] w-[300px]' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img3} className='h-[350px] w-[300px]' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img4} className='h-[350px] w-[300px]' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img5} className='h-[350px] w-[300px]' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img6} className='h-[350px] w-[300px]' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img7} className='h-[350px] w-[300px]' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img8} className='h-[350px] w-[300px]' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img9} className='h-[350px] w-[300px]' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img10} className='h-[350px] w-[300px]' alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src={img11} className='h-[350px] w-[300px]' alt="Burger" />
                </div>
                
            </div>
        </div>
    );
};

export default Gallery;
// import img1 from '../../assets/img24.jpg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import { useEffect, useState } from 'react';



const FeaturedFoods = ({ food }) => {
    console.log(food)


    // const url = 'http://localhost:5000/food'

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllFoods(data);
    //             // setLoader(false);
    //         })
    // }, []);
    const {
        newFood: {
            foodImg,
            foodName,
            foodStatus,
            additionalNotes,
            foodQuantity,
            expiredDate,
            donar: { userImage, name },
        },
        _id,
    } = food;
    return (
        <div>
            <div className="">
                <div className="hero bg-green-100 rounded-lg mx-auto lg:h-[260px]">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={foodImg}
                            className='lg:w-[100px] lg:h-[120px] h-[200px] w-[200px] rounded-lg hover:scale-125 lg:mb-6'
                            alt={foodName}
                        />
                        <div>
                            <h1 className="lg:text-xl text-2xl font-bold font-lato text-orange-600">{foodName}</h1>
                            <p className="font-bold text-green-700 mb-2">{foodStatus}</p>
                            <p className="lg:text-sm font-lato">{additionalNotes}</p>
                            <div className="flex gap-2 text-sm text-green-800">
                                <p>Quantity: {foodQuantity}</p>
                                <p>Expire Date: {expiredDate}</p>
                            </div>
                            <div className="flex gap-2">
                                <img src={userImage} className="rounded-full h-[30px] w-[30px]" alt={name} />
                                <p className="font-bold text-green-700">{name}</p>
                            </div>
                            <div className="card-actions justify-end mt-4 mb-8">
                                <Link to={`/details/${_id}`} className="btn btn-sm bg-orange-500">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

FeaturedFoods.propTypes = {
    food: PropTypes.string.isRequired

};

export default FeaturedFoods;
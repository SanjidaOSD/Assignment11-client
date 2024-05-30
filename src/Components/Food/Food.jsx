
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Food = ({ foods }) => {
    console.log(foods);

    // Destructure the necessary properties from the foods object
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
    } = foods || {};

    return (
        <div className="">
            <div className="hero bg-green-100 rounded-lg mx-auto lg:h-[280px]">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={foodImg}
                        className='lg:w-[100px] lg:h-[150px] h-[200px] w-[210px] rounded-lg hover:scale-125 lg:mb-6'
                        alt={foodName}
                    />
                    <div>
                        <h1 className="lg:text-xl text-2xl font-bold font-lato text-orange-600">{foodName}</h1>
                        <p className="font-bold text-green-700 mb-2">{foodStatus}</p>
                        <p title={additionalNotes} className="lg:text-sm font-lato mb-2">{additionalNotes.substring(0,50)}...</p>
                        <div className="flex gap-2 text-sm text-green-800 mb-2">
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
    );
};

Food.propTypes = {
    foods: PropTypes.string.isRequired

};

export default Food;

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Manage = ({ manageFood, idx, handleDelete }) => {
    const { _id, newFood } = manageFood || {};
    const { foodImg,
        foodName,
        foodStatus,
        additionalNotes,
        foodQuantity,
        expiredDate } = newFood || {};
    

    return (
                <div>
                    <div className="grid grid-cols-12 border-x font-medium">
                        <div className="flex justify-center items-center col-span-1 border-b py-2">
                            <h1>{idx + 1}</h1>
                        </div>
                        <div className="col-span-4 flex justify-center items-center border-b border-s py-4">
                            <h1>{foodName}</h1>
                        </div>
                        <div className="col-span-2 flex justify-center items-center border-b border-s py-4">
                            <h1>{foodStatus}</h1>
                        </div>
                        <div className="col-span-2 flex justify-center items-center border-b border-s py-4">
                            <h1>{additionalNotes}</h1>
                        </div>
                        <div className="col-span-3 flex justify-center items-center border-b border-s py-4 gap-5 flex-wrap">
                            <Link to={`/updateSpot/${_id}`}><button className='px-3 py-1 bg-green-500 font-semibold text-white rounded-md'>Update</button></Link>
                            <button onClick={()=>handleDelete(_id)} className='px-3 py-1 bg-orange-600 font-semibold text-white rounded-md'>Delete</button>
                        </div>
                    </div>
                </div>
            );
        };
        

Manage.propTypes = {
    manageFood: PropTypes.object.isRequired

};

export default Manage;
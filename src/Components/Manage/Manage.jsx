import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const Manage = ({ manageFood, Manage, setDeleteCount, deleteCount, idx, food, setFood }) => {
    const { _id, newFood } = manageFood || {};

    const { foodImg, foodName, pickupLocation, expiredDate } = newFood || {};

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/food/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setDeleteCount(!deleteCount)
                            // const remaining = food.filter(item => item._id !== _id);
                            // setFood(remaining);
                        }
                    });
            }
        });
    };


    return (
        <div>
            <div className="grid grid-cols-12 border-x font-medium">
                <div className="flex justify-center items-center col-span-1 border-b py-2">
                    <h1>{idx + 1}</h1>
                </div>
                <div className="col-span-1 flex justify-center items-center border-b border-s py-4">
                    <img src={foodImg} className='[50px] h-[50px] rounded-xl hover:scale-125' alt="" />
                </div>
                <div className="col-span-2 flex justify-center items-center border-b border-s py-4">
                    <h1>{foodName}</h1>
                </div>
                <div className="col-span-2 flex justify-center items-center border-b border-s py-4">
                    <h1>{pickupLocation}</h1>
                </div>
                <div className="col-span-3 flex justify-center items-center border-b border-s py-4">
                    <h1 className='p-2'>{expiredDate}</h1>
                </div>
                <div className="col-span-3 flex justify-center items-center border-b border-s py-4 gap-5 flex-wrap">
                    <Link to={`/update/${_id}`}><button className='px-3 py-1 bg-green-500 font-semibold text-white rounded-md'>Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className='px-3 py-1 bg-orange-600 font-semibold text-white rounded-md'>Delete</button>
                </div>
            </div>
        </div>
    );
};


Manage.propTypes = {
    manageFood: PropTypes.object.isRequired,
    idx: PropTypes.object.isRequired,

};

export default Manage;
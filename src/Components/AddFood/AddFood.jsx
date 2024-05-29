import Swal from 'sweetalert2'
import UseAuth from '../../Hook/UseAuth';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddFood = () => {
    const { user } = UseAuth() || {};

    console.log(user)
    // const navigate = useNavigate();

    const handleAddFood = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const foodName = form.foodName.value;
        const pickupLocation = form.pickupLocation.value;
        const foodQuantity = form.foodQuantity.value;
        const additionalNotes = form.additionalNotes.value;
        const expiredDate = form.expiredDate.value;
        const foodStatus = form.foodStatus.value;
        const userImage = user.photoURL;
        const foodImg = form.foodImg.value;

        const newFood = {
            name,
            email,
            foodName,
            pickupLocation,
            foodQuantity,
            additionalNotes,
            expiredDate,
            foodStatus,
            userImage,
            foodImg,
            donar: {
                email,
                name: user?.displayName,
                userImage: user?.photoURL,
            },
        };

        
          try{
            axios.post('http://localhost:5000/food', {
            newFood
        })
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });

        
          }
          catch(err){
            console.log(err)
            }
          
    };


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl text-orange-600 font-bold">Add Your Best Food</h1>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleAddFood} className="card-body">
                            <div className="md:flex md:gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">User Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="Enter your name" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">User Email</span>
                                    </label>
                                    <input type="email" name="email" defaultValue={user?.email} placeholder="Enter your email" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="md:flex md:gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Food Name</span>
                                    </label>
                                    <input type="text" name="foodName" placeholder="Enter Food Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Pickup Location</span>
                                    </label>
                                    <input type="text" name="pickupLocation" placeholder="Enter Pickup Location" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="md:flex md:gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Expire Date</span>
                                    </label>
                                    <input type="date" name="expiredDate" placeholder="Enter Expire Date" className="input input-bordered" required />
                                </div>

                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Food Status</span>
                                    </label>
                                    <input type="foodStatus" name="foodStatus" placeholder="Enter Food Status" className="input input-bordered" required />
                                </div>

                            </div>



                            <div className="md:flex md:gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Food Quantity</span>
                                    </label>
                                    <input type="number" name="foodQuantity" placeholder="Enter Food Quantity" className="input input-bordered" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Additional Notes</span>
                                    </label>
                                    <input type="text" name="additionalNotes" placeholder="Enter Additional Notes" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="md:flex md:gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">User Image</span>
                                    </label>
                                    <input type="text" name="userImage" placeholder="User Image URL" className="input input-bordered" />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Food Image</span>
                                    </label>
                                    <input type="text" name="foodImg" placeholder="Food Image URL" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-ghost bg-orange-500 text-white">Add Food</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFood;

import { useLoaderData } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import { IoLocationSharp } from "react-icons/io5";


const FoodDetails = () => {
    const { user } = UseAuth();
    const food = useLoaderData();
    const time = new Date().toLocaleDateString()
    console.log(food);
    const {
        newFood: {
            foodImg,
            foodName,
            foodStatus,
            additionalNotes,
            foodQuantity,
            pickupLocation,
            expiredDate,
            donar: { userImage, name, email },
        },
        _id

    } = food || {};

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
    }

    return (
        <div className="">
            <div className="hero bg-orange-100 rounded-lg mx-auto">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <img
                        src={foodImg}
                        className='lg:w-[300px] lg:h-[300px] h-[400px] w-[300px] rounded-lg hover:scale-110 lg:mb-6'
                        alt={foodName}
                    />
                    <div>
                        <h1 className="lg:text-2xl text-2xl font-bold font-lato text-orange-600 mb-4">{foodName}</h1>
                        <p className="font-bold text-green-700 mb-2">{foodStatus}</p>
                        <p title={additionalNotes} className="lg:text-sm font-lato mb-2">{additionalNotes}</p>
                        <div className="flex gap-2 text-sm text-green-800 mb-2 text-bold">
                            <p>Quantity: {foodQuantity}</p>
                            <p>Expire Date: {expiredDate}</p>
                        </div>
                        <p className="mb-4 flex">Food pick up location:  <span className="flex text-center items-center text-green-700 font-bold"><IoLocationSharp></IoLocationSharp>{pickupLocation}</span></p>
                        <div className="flex gap-2">
                            <img src={userImage} className="rounded-full h-[30px] w-[30px]" alt={name} />
                            <p className="font-bold text-green-700">{name}</p>
                        </div>
                        <div className="card-actions justify-center mb-8">
                            {/* <Link to={`/request/${_id}`} className="btn btn-sm bg-orange-500">Request Food</Link> */}
                            <button className="btn mt-4 bg-orange-500" onClick={() => document.getElementById('my_modal_4').showModal()}>Request Food</button>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl bg-orange-200">

                                    <h1 className="text-center text-2xl font-bold text-green-600">Your requested food details</h1>
                                    
                                    <div className="modal-action justify-center mt-[1px]">
                                        <div method="dialog">

                                            <form onSubmit={handleAddFood} className="card-body">
                                                <div className="md:flex md:gap-6">
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">User Name</span>
                                                        </label>
                                                        <input type="text" name="name" value={user?.displayName} placeholder="Enter your name" className="input input-bordered w-full" required />
                                                    </div>
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">User Email</span>
                                                        </label>
                                                        <input type="email" name="email" value={user?.email} placeholder="Enter your email" className="input input-bordered" required />
                                                    </div>
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Donar Email</span>
                                                        </label>
                                                        <input type="email" name="email" value={email} placeholder="Enter your email" className="input input-bordered" required />
                                                    </div>
                                                </div>
                                                <div className="md:flex md:gap-6">
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Food Name</span>
                                                        </label>
                                                        <input type="text" name="foodName" value={foodName} placeholder="Enter Food Name" className="input input-bordered" required />
                                                    </div>
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Food Id</span>
                                                        </label>
                                                        <input type="id" name="_id" value={_id} placeholder="Enter Food Name" className="input input-bordered" required />
                                                    </div>

                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Pickup Location</span>
                                                        </label>
                                                        <input type="text" name="pickupLocation" value={pickupLocation} placeholder="Enter Pickup Location" className="input input-bordered" required />
                                                    </div>
                                                </div>

                                                <div className="md:flex md:gap-6">
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Expire Date</span>
                                                        </label>
                                                        <input type="date" name="expiredDate"
                                                            value={expiredDate} placeholder="Enter Expire Date" className="input input-bordered" required />
                                                    </div>
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Request Date</span>
                                                        </label>
                                                        <input type="text" name="requestDate"
                                                            value={time} placeholder="Enter Expire Date" className="input input-bordered" required />
                                                    </div>

                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Food Status</span>
                                                        </label>
                                                        <input type="foodStatus" value={foodStatus} name="foodStatus" placeholder="Enter Food Status" className="input input-bordered" required />
                                                    </div>

                                                </div>

                                                <div className="md:flex md:gap-6">
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Food Quantity</span>
                                                        </label>
                                                        <input type="number" name="foodQuantity"
                                                            value={foodQuantity} placeholder="Enter Food Quantity" className="input input-bordered" required />
                                                    </div>
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Additional Notes</span>
                                                        </label>
                                                        <input type="text" name="additionalNotes" placeholder="Enter Additional Notes" defaultValue={additionalNotes} className="input input-bordered" required />
                                                    </div>

                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Food Image</span>
                                                        </label>
                                                        <input type="text" name="foodImg" value={foodImg} placeholder="Food Image URL" className="input input-bordered" />
                                                    </div>
                                                </div>
                                                <div className="form-control mt-6">
                                                    <button className="btn btn-ghost bg-orange-500 text-white">Request</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
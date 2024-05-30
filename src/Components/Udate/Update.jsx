import {  useLoaderData, useNavigate } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Update = () => {
    const {user} = UseAuth();
    const navigate = useNavigate();
    const [updateCount , setUpDateCount] = useState()


const food = useLoaderData()
const { _id, newFood } = food || {};
const { foodImg,
    foodName,
    pickupLocation,
    expiredDate } = newFood || {};


    const handleUpdateFood = async (event) => {
        event.preventDefault();

        const form = event.target;
        const foodName = form.foodName.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDate = form.expiredDate.value;
        const foodImg = form.foodImg.value;

        const newFood = {
            
            foodName,
            pickupLocation,
            expiredDate,
            foodImg,
            donar: {
                
                name: user?.displayName,
                userImage: user?.photoURL,
            },
        };
     
          try{
            axios.put(`http://localhost:5000/food/${_id}`, {
            newFood

        })
            Swal.fire({
                title: "Good job!",
                text: "Updated successfully!",
                icon: "success"
              });

              navigate('/manageFood')

              setUpDateCount(!updateCount)

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
                        <h1 className="text-3xl text-orange-600 font-bold">Update Food</h1>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-green-100">
                        <form onSubmit={handleUpdateFood} className="card-body">
                         
                            <div className="md:flex md:gap-6">
                            <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Food Image</span>
                                    </label>
                                    <input type="text" name="foodImg" defaultValue={foodImg} placeholder="Food Image URL" className="input input-bordered" />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Food Name</span>
                                    </label>
                                    <input type="text" name="foodName" defaultValue={foodName} placeholder="Enter Food Name" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="md:flex md:gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Expire Date</span>
                                    </label>
                                    <input type="date" name="expiredDate" defaultValue={expiredDate} placeholder="Enter Expire Date" className="input input-bordered" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text font-bold">Pickup Location</span>
                                    </label>
                                    <input type="text" name="pickupLocation" defaultValue={pickupLocation} placeholder="Enter Pickup Location" className="input input-bordered" required />
                                </div>
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-ghost bg-orange-500 text-white">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Update;
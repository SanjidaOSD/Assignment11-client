import { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Request from "../Request/Request";


const MyRequestFood = () => {
    const { user } = UseAuth()
    const [requestFood, setRequestFood] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        getData()
    }, [user, requestFood]);

    const getData = async () => {
        const data  = await axios(`http://localhost:5000/request?.email=${user?.email}`);

        setRequestFood(data)
        navigate('/availableFood')

    }

    console.log(requestFood)


    return (
        <div>
            {/* <h1>{requestFood.length}</h1> */}
            <div>
                <div className="grid grid-cols-12 bg-orange-500 font-bold border-x mt-12">
                    <div className="flex justify-center items-center col-span-1 border-y  py-2">
                        <h1>SL No</h1>
                    </div>
                    <div className="col-span-1 flex justify-center items-center border-b border-s py-2">
                        <h1>Food Img</h1>
                    </div>
                    <div className="col-span-2 flex justify-center items-center border-y border-s py-2">
                        <h1>Dish Name</h1>
                    </div>
                    <div className="col-span-2 flex justify-center items-center border-y border-s py-2">
                        <h1>Pickup Location</h1>
                    </div>
                    <div className="col-span-3 flex justify-center items-center border-y border-s py-2">
                        <h1>Expire Date</h1>
                    </div>
                    <div className="col-span-3 flex justify-center items-center border-y border-s py-2">
                        <h1>Actions</h1>
                    </div>
                </div>
                {/* {
                               requestFood .map((requestFood, idx) =>
                                    <Request key={requestFood._id}
                                        manageFood={requestFood}
                                        idx={idx}
                                        
                                    ></Request>)
                            } */}

            </div>


        </div>


    );
};

export default MyRequestFood;


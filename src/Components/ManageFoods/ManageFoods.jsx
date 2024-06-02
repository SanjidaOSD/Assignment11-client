import { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import Manage from "../Manage/Manage";
import { useLoaderData } from "react-router-dom";


const ManageFoods = () => {
    const foods = useLoaderData();
    const { user } = UseAuth();
    const [manageFoods, setManageFoods] = useState([]);
    const [loader, setLoader] = useState(true);
    const [food, setFood] = useState();
    const [deleteCount, setDeleteCount] = useState(1);


    const Manages = async () => {
        await fetch(`https://y-ochre-iota.vercel.app/food?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setManageFoods(data);
                setLoader(false);
            })
    }
    useEffect(() => {
        Manages();

    }, [user,deleteCount])


    return (
        <div>
            {
                loader ?
                    <div>
                        <span className="loading items-center justify-center ml-[200px] mt-[50px] md:ml-[550px] md:mt-[200px]  loading-bars loading-lg"></span>
                    </div>
                    :

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
                        {
                            // myLists.map((myList, idx) => <Manage key={myList._id} myList={myList} idx={idx} handleDelete={handleDelete}></Manage>)

                            manageFoods.map((manageFood, idx) =>
                                <Manage key={manageFood._id}
                                    manageFood={manageFood}
                                    idx={idx}
                                    food={food}
                                    Manage ={Manage}
                                    setFood={setFood}
                                    deleteCount={deleteCount}
                                    setDeleteCount= {setDeleteCount}
                                ></Manage>)
                        }
                    </div>

            }

        </div>
    );
};

export default ManageFoods;
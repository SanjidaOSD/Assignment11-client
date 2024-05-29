
import { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import Food from "../Food/Food";



const AvailableFood = () => {
    // const {user} = UseAuth() || {}
    const [allFoods, setAllFoods] = useState([]);
    const [loader, setLoader] = useState(true);

    const url = 'http://localhost:5000/food'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllFoods(data);
                setLoader(false);
            })
    }, []);
    
    return (
        <div>
            {
                loader ?
                    <div>
                        <span className="loading items-center justify-center ml-[200px] mt-[50px] md:ml-[550px] md:mt-[200px] loading-dots loading-lg"></span>
                    </div>
                    :

                    <div>
                        {/* <h1 className=' text-center text-5xl font-bold mt-6 mb-4'> Food:{allFoods.length}</h1> */}
                        <h1 className="text-center text-3xl font-bold text-orange-600 font-lato mb-4">Available Foods</h1>
                        <p className="text-center font-lato mb-8">At our restaurant, we take pride in showcasing an array of featured foods that <br /> highlight our commitment to quality and culinary innovation.</p>
                        <div className="grid md:grid-cols-3 gap-12">
                            {
                                allFoods.map(foods => <Food key={foods._id} foods={foods}></Food>)

                                // allFoods.map(food => <div key={food._id}>
                                //     <p>{food.foodName}</p>
                                // </div>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default AvailableFood;


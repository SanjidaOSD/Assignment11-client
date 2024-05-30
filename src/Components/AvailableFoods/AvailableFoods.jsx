
import { useEffect, useState } from "react";
import Food from "../Food/Food";



const AvailableFood = () => {
    // const {user} = UseAuth() || {}
    const [allFoods, setAllFoods] = useState([]);
    const [loader, setLoader] = useState(true);
    const [sort, setSort] = useState('');
    const [currenrPage, setCurrentPage] = useState(1);

    // const url = 'http://localhost:5000/food'

    useEffect(() => {
        fetch( `http://localhost:5000/food?sort=${sort}`)
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
                        <span className="loading items-center justify-center ml-[200px] mt-[50px] md:ml-[550px] md:mt-[200px] loading-bars loading-lg"></span>
                    </div>
                    :

                    <div>

                        <h1 className="text-center text-3xl font-bold text-orange-600 font-lato mb-4">Available Foods</h1>
                        <p className="text-center font-lato mb-8">At our food donation center, we provide a diverse array of nutritious and delicious options to ensure that everyone has access to wholesome meals. <br /> Our offerings include fresh fruits and vegetables, such as crisp apples, juicy oranges, and vibrant leafy greens, <br /> all sourced from local farms. We also have pantry staples like rice, pasta,  and canned goods,  including beans, <br /> soups, and vegetables, which provide the foundation for many hearty meals.</p>
                        {/* search and sort */}
                        <div className="navbar bg-base-100">
                            <div className="flex-1">
                                <a className="btn btn-ghost text-xl">All available foods:</a>
                            </div>
                            <div className="flex-none gap-2">
                                <div className="form-control">
                                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                                </div>
                                <div>
                                    <select 
                                    onChange={ e =>{
                                        setSort(e.target.value)
                                        setCurrentPage(1)
                                    }}
                                    value={sort} 
                                    name='sort'
                                    id='sort'
                                    className="border p-4 rounded-md">
                                        <option value="asc">Ascending</option>
                                        <option value="dsc">Descending</option>

                                    </select>
                                </div>
                            </div>
                        </div>
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


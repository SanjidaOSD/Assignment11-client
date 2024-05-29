import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <h1>view food details</h1>
        </div>
    );
};

export default FoodDetails;
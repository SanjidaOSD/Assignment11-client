import { FaCaravan, FaCircleArrowRight, FaHandHoldingDollar } from "react-icons/fa6";
import { GoBlocked } from "react-icons/go";
import { IoFastFoodOutline } from "react-icons/io5";

const Cart = () => {
    return (
        <div className="lg:flex justify-around gap-2">
            <div className="card card-side bg-yellow-100 h-52 hover:scale-110">
                <div className="card-body mt-4">
                    <h2 className="card-title text-4xl font-bold text-red-600">Best</h2>
                    <p className="text-2xl font-bold">Donation.</p>
                    <div className="card-actions justify-start mb-16">
                        <button><FaCircleArrowRight className="text-3xl font-bold"></FaCircleArrowRight></button>
                    </div>
                </div>
                <GoBlocked className="text-[80px] mr-6 font-bold items-center mt-16"></GoBlocked>

            </div>

            <div className="card card-side bg-pink-200 h-52 hover:scale-110">
                <div className="card-body mt-4">
                    <h2 className="card-title text-4xl font-bold text-red-600">Don't</h2>
                    <p className="text-2xl font-bold">Waste Food.</p>
                    <div className="card-actions justify-start mb-16">
                        <button><FaCircleArrowRight className="text-3xl font-bold"></FaCircleArrowRight></button>
                    </div>
                </div>
                <IoFastFoodOutline className="text-[80px] mr-6 font-bold items-center mt-12"></IoFastFoodOutline>

            </div>


            <div className="card card-side bg-purple-200 h-52 hover:scale-110">
                <div className="card-body mt-4">
                    <h2 className="card-title text-4xl font-bold text-red-600">Donate</h2>
                    <p className="text-2xl font-bold">Your Extra Food.</p>
                    <div className="card-actions justify-start mb-16">
                        <button><FaCircleArrowRight className="text-3xl font-bold"></FaCircleArrowRight></button>
                    </div>
                </div>
                <FaCaravan className="text-[80px] mr-6 font-bold items-center mt-16"></FaCaravan>

            </div>

            <div className="card card-side bg-blue-100 h-52 hover:scale-110">
                <div className="card-body mt-4">
                    <h2 className="card-title text-4xl font-bold text-red-600">Help</h2>
                    <p className="text-2xl font-bold">People.</p>
                    <div className="card-actions justify-start mb-16">
                        <button><FaCircleArrowRight className="text-3xl font-bold"></FaCircleArrowRight></button>
                    </div>
                </div>
                <FaHandHoldingDollar className="text-[80px] mr-6 font-bold items-center mt-16"></FaHandHoldingDollar>

            </div>
        </div>
    );
};

export default Cart;
import { FaCaravan, FaCircleArrowRight, FaHandHoldingDollar } from "react-icons/fa6";
import { GoBlocked } from "react-icons/go";
import { IoFastFoodOutline } from "react-icons/io5";

const Cart = () => {
    return (
        <div className="lg:flex justify-around">
            <div className="card card-side bg-yellow-100 h-52">
                <div className="card-body mt-4">
                    <h2 className="card-title text-4xl font-bold text-red-600">Discount</h2>
                    <p className="text-3xl font-bold">Voucher in Shop.</p>
                    <div className="card-actions justify-start mb-16">
                        <button><FaCircleArrowRight className="text-3xl font-bold"></FaCircleArrowRight></button>
                    </div>
                </div>
                <GoBlocked className="text-[80px] mr-6 font-bold items-center mt-16"></GoBlocked>

            </div>

            <div className="card card-side bg-pink-200 h-52">
                <div className="card-body mt-4">
                    <h2 className="card-title text-4xl font-bold text-red-600">Fresh</h2>
                    <p className="text-3xl font-bold">Healthy food.</p>
                    <div className="card-actions justify-start mb-16">
                        <button><FaCircleArrowRight className="text-3xl font-bold"></FaCircleArrowRight></button>
                    </div>
                </div>
                <IoFastFoodOutline className="text-[80px] mr-6 font-bold items-center mt-12"></IoFastFoodOutline>

            </div>


            <div className="card card-side bg-purple-200 h-52">
                <div className="card-body mt-4">
                    <h2 className="card-title text-4xl font-bold text-red-600">Fast</h2>
                    <p className="text-3xl font-bold">Home delivery.</p>
                    <div className="card-actions justify-start mb-16">
                        <button><FaCircleArrowRight className="text-3xl font-bold"></FaCircleArrowRight></button>
                    </div>
                </div>
                <FaCaravan className="text-[80px] mr-6 font-bold items-center mt-16"></FaCaravan>

            </div>

            <div className="card card-side bg-blue-100 h-52">
                <div className="card-body mt-4">
                    <h2 className="card-title text-4xl font-bold text-red-600">Amount</h2>
                    <p className="text-3xl font-bold">Best purches.</p>
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
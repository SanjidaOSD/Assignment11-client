
// import { GiFamilyHouse } from "react-icons/gi";
// import plane from '../assets/plane.png'
import { NavLink } from 'react-router-dom';
import logo from '../assets/donate logo2.png'

const Footer = () => {
    return (
        <div className="md:mt-24 ">
            <hr />
            <footer className="footer p-10 lg:w-auto w-96">
                <aside>
                    {/* <GiFamilyHouse className="font-extrabold w-12 h-16"></GiFamilyHouse> */}
                    <img src={logo} className="lg:h-[50px] h-[50px] w-[50px] lg:w-[70px] rounded-2xl" alt="" />
                    <p className="font-bold"><span className="text-green-700 lg:text-3xl text-2xl lg:font-bold font-bold"><span className="text-red-700 text-4xl italic">S</span>hare<span className="text-red-700 text-4xl">M</span>eals</span>
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title text-xl font-bold">ADDRESS</h6>
                    <p>
                        1901 Thornridge Cir, <br />
                        Shiloh,Hawaii 81053
                    </p>
                    <p>
                        2464 Royal in.Mesa <br />
                        New Jersey Hampton 45215623
                    </p>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl font-bold">OPENING TIME</h6>
                    <p>
                        Monday - Friday <br />
                        8am - 10pm
                    </p>
                    <p>
                        Saturday - Sunday
                        <br />
                        9am - 8pm
                    </p>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl font-bold">USEFUL LINK</h6>
                    <li className="font-bold"><NavLink to='/'>Home</NavLink></li>
                    <li className="font-bold"><NavLink to='/availableFood'>Available Foods </NavLink></li>
                    <li className="font-bold"><NavLink to='/requestFood'>Requested Foods </NavLink></li>
                    <li className="font-bold"><NavLink to='/manageFood'>Manage Foods </NavLink></li>

                </nav>
            </footer>
            <hr />
            <footer className="footer footer-center p-4 bg-orange-300 font-bold text-black">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;
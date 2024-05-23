
// import { GiFamilyHouse } from "react-icons/gi";
// import plane from '../assets/plane.png'
import logo from '../assets/logo2.png'

const Footer = () => {
    return (
        <div className="md:mt-24 ">
            <hr />
            <footer className="footer p-10 bg-pink-100 text-black lg:w-auto w-96">
                <aside>
                    {/* <GiFamilyHouse className="font-extrabold w-12 h-16"></GiFamilyHouse> */}
                    <img src={logo}className="lg:h-[50px] h-[50px] w-[50px] lg:w-[70px] rounded-2xl" alt="" />
                    <p className="font-bold"><span className="text-green-700 lg:text-3xl text-2xl lg:font-bold font-bold"><span className="text-red-700 text-4xl italic">T</span>asty<span className="text-red-700 text-4xl italic">T</span>reat</span>
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title text-xl font-bold">Services</h6>
                    <a className="link link-hover">Buy house</a>
                    <a className="link link-hover">Rent house</a>
                    <a className="link link-hover">Sell house</a>
                    <a className="link link-hover">Shop and malls</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <hr />
            <footer className="footer footer-center p-4 bg-pink-300 font-bold text-black">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;
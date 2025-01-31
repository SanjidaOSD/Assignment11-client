import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import { FcBusinesswoman } from "react-icons/fc";
// import plane from '../assets/plane.png';
import { useEffect, useState } from "react";
import logo from '../assets/donate logo2.png'




const Navbar = () => {

    const { logout, user } = UseAuth()
    const [theme, setTheme] = useState(true);

    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme(true)
            localStorage.setItem('theme', 'dark')
        }
        else {
            setTheme(false)

            localStorage.setItem('theme', 'light')

        }

    }

    useEffect(() => {
        const userTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', userTheme)
    }, [theme])


    const navLink = <>
        <li className="font-bold"><NavLink to='/'>Home</NavLink></li>
        <li className="font-bold"><NavLink to='/availableFood'>Available Foods </NavLink></li>


        {user && <>

            <li className="font-bold"><NavLink to='/AddFood'>Add Food</NavLink></li>
            <li className="font-bold"><NavLink to='/manageFood'>Manage My Foods</NavLink></li>
            <li className="font-bold"><NavLink to='/myRequestFood'>My Request Food</NavLink></li>

        </>}
    </>




    return (
        <div>
            <div className="navbar bg-base-100 mb-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 relative">
                            {navLink}

                        </ul>
                    </div>
                    <div className=" mb-4">
                        <a className="btn btn-ghost lg:text-4xl flex lg:flex"><img src={logo} className="lg:h-[50px] h-[50px] w-[50px] lg:w-[70px] rounded-2xl" alt="" /> </a>
                        <span className="text-green-700 lg:text-3xl text-xl lg:font-bold font-bold"><span className="text-red-700 text-4xl italic">S</span>hare<span className="text-red-700 text-4xl">M</span>eals</span>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>

                <div className="navbar-end">


                    <label className="swap swap-rotate">

                        <input onChange={handleTheme} type="checkbox" />

                        {/* sun icon */}
                        <svg className="swap-on fill-current text-green-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current text-green-500 lg:w-8 lg:h-8 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>


                    {
                        user?.email ?
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="btn m-1">


                                    <div className="w-10 rounded-full">


                                        <img className="rounded-full" src={user?.photoURL || <FcBusinesswoman />} alt="" />

                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] shadow bg-base-100 rounded-box">

                                    <li>
                                        
                                        {/* <button className="btn btn-ghost">{user?.displayName || 'not found'}</button> */}

                                        <button onClick={logout} className="btn btn-sm text-white bg-orange-500 hover:bg-red-700">Logout</button>
                                    </li>
                                </ul>
                            </div>
                            :
                            <Link to='/login'><button className="btn bg-orange-500 hover:bg-red-400 text-white">Login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
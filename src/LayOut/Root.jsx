import{Outlet} from 'react-router-dom';
import Navbar from '../LayOut/Navbar';
import Footer from '../LayOut/Footer';

const Root = () => {
    return (
        <div className='mx-auto font-poppins'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
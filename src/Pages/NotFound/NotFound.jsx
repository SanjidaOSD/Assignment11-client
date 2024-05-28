import { Helmet } from "react-helmet";
import error from '../../assets/404.png'
import { Link } from "react-router-dom";


const NotFound = () => {
    return (

        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>User Not Found</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="text-center lg:flex lg:gap-24">
                {/* <h1 className="text-[200px] md:text-[400px] font-bold">
                404
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold">
                NOT FOUND
            </h2> */}
                <img src={error} alt="" className="h-[50%] w-[50%] items-center justify-center ml-28 lg:ml-64" />
                <Link to='/'><button className="btn bg-orange-500 lg:mt-[600px]">Back to Home</button>
                </Link>
            </div>


        </div>
    );
};

export default NotFound;
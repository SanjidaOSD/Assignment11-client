import { Link } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import GoogleLogin from "../Login/GoogleLogin";
import Github from "../Login/GithubLogin";
import { Helmet } from "react-helmet";

const Login = () => {

    const { signInUser } = UseAuth();


    const onSubmit = data => {
        // console.log(data)
        const { email, password } = data;

        signInUser(email, password)
            .then(result => {
                console.log(result.user);

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login Now</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="md:mt-24">
                <div className="card shrink-0 w-full h-full max-w-sm mx-auto shadow-2xl  p-4">
                    <h2 className="text-4xl text-center mt-6 mb-6 font-bold text-red-700 ">Login Form</h2>

                    <Link to='/emailLogin'><button onClick={onSubmit} className="btn w-full hover:scale-105 hover:bg-red-600 bg-red-600 text-white ">Log in with Email</button></Link>

                    <GoogleLogin></GoogleLogin>
                    <Github></Github>
                    <p className="text-center mb-4 mt-6">Don't have an account! <Link to='/signUp' className="text-red-700 font-bold hover:scale-105">SignUp</Link></p>

                </div>
            </div>
        </div>





    );
};

export default Login;
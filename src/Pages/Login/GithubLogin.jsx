import { Helmet } from "react-helmet";
import UseAuth from "../../Hook/UseAuth";
import { FaGithub } from "react-icons/fa";
// import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";


const Github = () => {
  const { githubLogin } = UseAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';

  const handleGithubLogin = socialProvider => {
    socialProvider()
      .then(result => {
        // console.log(result.user)
        if (result.user) {
          navigate(from)
        }
      })
  }



  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GitHub login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <button onClick={() => handleGithubLogin(githubLogin)} className="btn w-full hover:scale-105 hover:bg-red-800 bg-red-700 text-white">Log in with <FaGithub /></button>
    </div>
  );
};

export default Github;
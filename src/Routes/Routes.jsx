
import { createBrowserRouter } from "react-router-dom";
// import About from "../Pages/About";

import NotFound from "../Pages/NotFound/NotFound";
import AddFood from "../Components/AddFood/AddFood";
import Github from "../Pages/Login/GithubLogin";
import EmailLogin from "../Pages/Login/EmailLogin";
import GoogleLogin from '../Pages/Login/GoogleLogin'
// import CardDetails from "../Pages/CardDetails";
// import PrivetRoutes from "../Routes/PrivetRoutes";

import Root from '../LayOut/Root';
import SignUp from '../Pages/SignUp';
import Login from "../Pages/Login/Login";
// import ContactUs from '../Pages/ContactUs';
import Home from "../Pages/Home/Home";
import ManageFoods from "../Components/ManageFoods/ManageFoods";
import RequestFood from "../Components/RequestFood/RequestFood";

// import MyList from "../Components/MyList";
// import AllTouristSpot from "../Components/AllTouristSpot";
// import SpotDetails from "../Components/SpotDetails";
// import CountryDetails from "../Pages/CountryDetails";
// import AddPlace from '../Components/AddPlace'



const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<NotFound></NotFound>,
        children:[
           
            {
                path: "/",
                element: <Home></Home>,  
                // loader: () => fetch('https://m56-tourist-management-website-server.vercel.app/place')
              },
            //   {
            //     path:'/country/:country',
            //     element:<CountryDetails></CountryDetails>,
            //     loader:({params}) => fetch(`https://m56-tourist-management-website-server.vercel.app/country/${params.country}`)

            //   },
            //   {
            //       path:'/allSpot',
            //       element:<AllTouristSpot></AllTouristSpot>
            //   },
              {
                path:'/AddFood',
                element:<AddFood></AddFood>
              },
              {
                path:'/manageFood',
                element:<ManageFoods></ManageFoods>
              },
              {
                path:'/requestFood',
                element:<RequestFood></RequestFood>
              },
            //   {
            //     path:'/myList/:email',
            //     element:<PrivetRoutes><MyList></MyList></PrivetRoutes>
            //   },
            //   {
            //     path:'/spotDetails/:_id',
            //     element:<PrivetRoutes><SpotDetails></SpotDetails></PrivetRoutes>,
            //     loader: ({params}) => fetch(`https://m56-tourist-management-website-server.vercel.app/place/${params._id}`)
                 
                    
                
            //   },
           
           
           
            // {
            //    path:'/contact',
            //    element:<PrivetRoutes><ContactUs></ContactUs></PrivetRoutes>
            // },
           
            {
                path:'/login',
                element:<Login></Login>
            },
            {
               path:'/emailLogin',
               element:<EmailLogin></EmailLogin>
            },
            {
                path:'/githubLogin',
                element:<Github></Github>

            },
            {
                path:'/googleLogin',
                element:<GoogleLogin></GoogleLogin>

            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>,
            },
          
        ]
    }
]);
export default routes
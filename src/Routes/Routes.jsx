
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
// import RequestFood from "../Components/RequestFood/RequestFood";
import AvailableFoods from "../Components/AvailableFoods/AvailableFoods";
import FoodDetails from "../Components/FoodDetails/FoodDetails";
import PrivetRoutes from '../../src/Routes/PrivetRoutes';
import Update from "../Components/Udate/Update";
import MyRequestFood from "../Components/MyRequestFood/MyRequestFood";
import Request from "../Components/Request/Request";





const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/food')

      },

      {
        path: '/AddFood',
        element: <AddFood></AddFood>
      },
      {
        path: '/availableFood',
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: '/manageFood',
        element: <ManageFoods></ManageFoods>
      },
      {
        path: '/myRequestFood',
        element: <MyRequestFood></MyRequestFood>
      },
      // {
      //   path: '/myRequestFood',
      //   element: <PrivetRoutes><MyRequestFood></MyRequestFood></PrivetRoutes>
      // },
      // {
      //   path: '/requestFood',
      //   element: <PrivetRoutes><Request></Request></PrivetRoutes>
      // },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <PrivetRoutes><FoodDetails></FoodDetails></PrivetRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/emailLogin',
        element: <EmailLogin></EmailLogin>
      },
      {
        path: '/githubLogin',
        element: <Github></Github>

      },
      {
        path: '/googleLogin',
        element: <GoogleLogin></GoogleLogin>

      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },

    ]
  }
]);
export default routes
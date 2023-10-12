import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
//import Banner from "../pages/Home/Banner/Banner";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Instructor from "../pages/Home/Instructor/Instructor";
import DashBoard from "../layouts/dashboard/DashBoard";
import Classes from "../pages/Classes/Classes";
import NewClass from "../pages/NewClass/NewClass";
import UsersAction from "../pages/UsersAction/UsersAction";
import SingleClass from "../pages/SingleClass/SingleClass";
import AllClasses from "../pages/AllClasses/AllClasses";
import ShowInstructor from "../pages/ShowInstructor/ShowInstructor";
import MyClass from "../pages/MyClass/MyClass";
import SelectItem from "../pages/SelectItem/SelectItem";
import UpdateMyClass from "../pages/UpdateMyClass/UpdateMyClass";
import Payment from "../pages/Payment/Payment";
import Error from "../pages/Error/Error";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
          path: "/classes",
          element: <Classes></Classes>
        },
        {
          path:"/instructor",
          element: <ShowInstructor></ShowInstructor>
        },
        {
          path: 'singleclass/:id',
          element: <SingleClass></SingleClass>,
          loader: ({params})=>fetch(` https://summer-camp-server-5khiucgdl-taslimaakterpapia.vercel.app/classes/${params.id}`)
        },
        
      ]
    },
    {
      path: "/dashboard",
      element: <DashBoard></DashBoard>,
      children:[
        {
          path: "/dashboard/instructor",
          element: <Instructor></Instructor>
        },
        {
          path: "/dashboard/class",
          element: <NewClass></NewClass>
        },
        {
          path: "/dashboard/action",
          element:<UsersAction></UsersAction>
        },
        {
          path: "/dashboard/allclass",
          element: <AllClasses></AllClasses>
        },
        {
          path: "/dashboard/myclass",
          element: <MyClass></MyClass>
        },
        {
          path: "/dashboard/updateclass/:id",
          element: <UpdateMyClass></UpdateMyClass>,
          
        },
        {
          path: "/dashboard/selectitem",
          element: <SelectItem></SelectItem>
        },
        {
          path: "/dashboard/payment/:id",
          element: <Payment></Payment>,
          loader: ({params})=>fetch(` https://summer-camp-server-5khiucgdl-taslimaakterpapia.vercel.app/addtoclass/${params.id}`)
        }

      ]
    }
  ]);
  export default router;
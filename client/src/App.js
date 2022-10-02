import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";


const Layout =()=>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        // path:"/post",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      },
    ]
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },

  // {
  //   path: "/Single",
  //   element: <Single/>,
  // },
  // {
  //   path: "/Write",
  //   element: <Write/>,
  // },

]);

function App() {
  return (
   <div className="app">
     <div className="container">
        <RouterProvider router={router}/>
    </div>
   </div>
  );
}

export default App;
/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Contact from "./components/Contact";
import Service1 from "./components/Service1";
import Service2 from "./components/Service2";
import Service3 from "./components/Service3";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DashboardLayout from "./components/DashboardLayout";
import Overview from "./components/Dashboard/Overview";
import Users from "./components/Dashboard/Users"; // Ensure these components exist
import Settings from "./components/Dashboard/Setting";
import AddNewUser from "./components/Dashboard/NewUser";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateAccount />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/service1",
    element: <Service1 />,
  },
  {
    path: "/service2",
    element: <Service2 />,
  },
  {
    path: "/service3",
    element: <Service3 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/AddNewUser",
    element: <AddNewUser />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

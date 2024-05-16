import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Management from "./pages/Management";
import Client from "./pages/Client";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Careers from "./pages/Careers";
import DataRegisterMaintenence from "./pages/DataRegisterMaintenence";
import Products from "./pages/Products";
import ProbateServices from "./pages/ProbateServices";
import Kyc from "./pages/Kyc";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/leadership",
        element: <Leadership />,
      },
      {
        path: "/management",
        element: <Management />,
      },
      {
        path: "/clients",
        element: <Client />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/data-register-maintenance",
        element: <DataRegisterMaintenence />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/probate-services",
        element: <ProbateServices />,
      },
      {
        path: "/kyc",
        element: <Kyc />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

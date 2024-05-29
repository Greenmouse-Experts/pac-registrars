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
import WebRegistry from "./pages/WebRegistry";
import DocumentManagement from "./pages/DocumentManagement";
import CompanySecretarial from "./pages/CompanySecretarial";
import ProptyPlus from "./pages/ProptyPlus";
import Forms from "./pages/Form";
import ENotification from "./pages/ENotification";
import AnnualReport from "./pages/AnnualReport";
import SelfService from "./pages/SelfService";

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
        path: "/register-maintenance",
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
        path: "/document-management",
        element: <DocumentManagement />,
      },
      {
        path: "/company-secretarial",
        element: <CompanySecretarial />,
      },
      {
        path: "/kyc",
        element: <Kyc />,
      },
      {
        path: "/web-registry",
        element: <WebRegistry />,
      },
      {
        path: "/proptyplus",
        element: <ProptyPlus />,
      },
      {
        path: "/forms",
        element: <Forms />,
      },
      {
        path: "/e-notification",
        element: <ENotification />,
      },
      {
        path: "/annual-report",
        element: <AnnualReport />,
      },
      {
        path: "/self-service",
        element: <SelfService />,
      }

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

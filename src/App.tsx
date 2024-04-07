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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

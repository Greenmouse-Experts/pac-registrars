import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

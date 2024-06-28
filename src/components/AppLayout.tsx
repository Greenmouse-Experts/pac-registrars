import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { FaWhatsappSquare } from "react-icons/fa";

function AppLayout() {

  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <main className=" relative">
        <Outlet />

        <div className=" bottom-10 left-[-13.5rem] hover:left-2 transition-all  z-[9999999999] fixed  items-center flex flex-row-reverse gap-4 cursor-pointer ">
        <FaWhatsappSquare color="green" size={60} />
          <p className="bg-white py-3 px-7 rounded-xl h-fit dark:bg-gray-900">Send us Message</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;

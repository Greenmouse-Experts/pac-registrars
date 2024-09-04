import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import ChatBot from "./chatbot";

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

        <ChatBot />
        <TawkMessengerReact
          propertyId="60253eef9c4f165d47c25665"
          widgetId="1eu8nrov9"
        />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;

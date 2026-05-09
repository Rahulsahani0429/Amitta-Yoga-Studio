import { useLocation } from "../router/SimpleRouter.jsx";
import { useEffect } from "react";
import TopBar from "./TopBar.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

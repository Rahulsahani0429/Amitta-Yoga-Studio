import { BrowserRouter, useLocation } from "./router/SimpleRouter.jsx";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ClassesPage from "./pages/ClassesPage.jsx";
import TrainersPage from "./pages/TrainersPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/services": ServicesPage,
  "/classes": ClassesPage,
  "/trainers": TrainersPage,
  "/pricing": PricingPage,
  "/gallery": GalleryPage,
  "/testimonials": TestimonialsPage,
  "/blog": BlogPage,
  "/contact": ContactPage
};

function RoutedSite() {
  const { pathname } = useLocation();
  const Page = routes[pathname] || HomePage;

  return (
    <Layout>
      <Page />
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RoutedSite />
    </BrowserRouter>
  );
}

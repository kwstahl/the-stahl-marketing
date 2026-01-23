import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { Journal } from "./pages/Journal";
import { BlogPost } from "./pages/BlogPost";
import { WebDesignPackage } from "./pages/WebDesignPackage";
import { BrandIdentityPackage } from "./pages/BrandIdentityPackage";
import { FullBrandSuitePackage } from "./pages/FullBrandSuitePackage";
import { SocialMediaPackage } from "./pages/SocialMediaPackage";
import { FAQs } from "./pages/FAQs";
import { Careers } from "./pages/Careers";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";

function Layout() {
  return (
    <div className="bg-white">
      <Navigation />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/pricing", element: <Pricing /> },
      {
        path: "/services/web-design-package",
        element: <WebDesignPackage />,
      },
      {
        path: "/services/brand-identity-package",
        element: <BrandIdentityPackage />,
      },
      {
        path: "/services/full-brand-suite-package",
        element: <FullBrandSuitePackage />,
      },
      {
        path: "/services/social-media-package",
        element: <SocialMediaPackage />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/journal", element: <Journal /> },
      { path: "/journal/:id", element: <BlogPost /> },
      { path: "/faqs", element: <FAQs /> },
      { path: "/careers", element: <Careers /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-of-use", element: <TermsOfUse /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
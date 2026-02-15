import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ChatWidget } from "./components/ChatWidget";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"
 

// Keep shared UI eager (don’t lazy-load these)
import StickyLeadChat from "./components/StickyLeadChat";

// Lazy-load PAGES
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Services = lazy(() => import("./pages/Services").then(m => ({ default: m.Services })));
const Pricing = lazy(() => import("./pages/Pricing").then(m => ({ default: m.Pricing })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const Journal = lazy(() => import("./pages/Journal").then(m => ({ default: m.Journal })));
const BlogPost = lazy(() => import("./pages/BlogPost").then(m => ({ default: m.BlogPost })));

const WebDesignPackage = lazy(() =>
  import("./pages/WebDesignPackage").then(m => ({ default: m.WebDesignPackage }))
);
const BrandIdentityPackage = lazy(() =>
  import("./pages/BrandIdentityPackage").then(m => ({ default: m.BrandIdentityPackage }))
);
const FullBrandSuitePackage = lazy(() =>
  import("./pages/FullBrandSuitePackage").then(m => ({ default: m.FullBrandSuitePackage }))
);
const SocialMediaPackage = lazy(() =>
  import("./pages/SocialMediaPackage").then(m => ({ default: m.SocialMediaPackage }))
);

const FAQs = lazy(() => import("./pages/FAQs").then(m => ({ default: m.FAQs })));
const Careers = lazy(() => import("./pages/Careers").then(m => ({ default: m.Careers })));
const PrivacyPolicy = lazy(() =>
  import("./pages/PrivacyPolicy").then(m => ({ default: m.PrivacyPolicy }))
);
const TermsOfUse = lazy(() =>
  import("./pages/TermsOfUse").then(m => ({ default: m.TermsOfUse }))
);

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-[#0A203F]">Loading…</div>
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-white">
      <Navigation />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <ChatWidget />
      <SpeedInsights/>
      <Analytics/>
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

      { path: "/services/web-design-package", element: <WebDesignPackage /> },
      { path: "/services/brand-identity-package", element: <BrandIdentityPackage /> },
      { path: "/services/full-brand-suite-package", element: <FullBrandSuitePackage /> },
      { path: "/services/social-media-package", element: <SocialMediaPackage /> },

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

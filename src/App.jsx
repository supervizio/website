import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const EnterprisePage = lazy(() => import("./pages/EnterprisePage"));
const CustomersPage = lazy(() => import("./pages/CustomersPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="enterprise" element={<EnterprisePage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="legal" element={<LegalPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

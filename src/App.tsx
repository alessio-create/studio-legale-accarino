import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ChiSiamo from "./pages/ChiSiamo.tsx";
import Contatti from "./pages/Contatti.tsx";
import Espropriazioni from "./pages/practice/Espropriazioni.tsx";
import AppaltiPubblici from "./pages/practice/AppaltiPubblici.tsx";
import ConcorsiPubblici from "./pages/practice/ConcorsiPubblici.tsx";
import UrbanisticaEdilizia from "./pages/practice/UrbanisticaEdilizia.tsx";
import Blog from "./pages/Blog.tsx";
import BlogArticle from "./pages/BlogArticle.tsx";
import ProcedurePage from "./pages/ProcedurePage.tsx";
import Procedures from "./pages/Procedures.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import { procedures } from "./data/procedures";
import { RouteTransition } from "./components/site/RouteTransition";
import { SmoothScroll } from "./components/site/SmoothScroll";
import { ScrollProgress } from "./components/site/ScrollProgress";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SmoothScroll />
          <ScrollProgress />
          <RouteTransition />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/espropriazioni" element={<Espropriazioni />} />
            <Route path="/appalti-pubblici" element={<AppaltiPubblici />} />
            <Route path="/concorsi-pubblici" element={<ConcorsiPubblici />} />
            <Route path="/urbanistica-edilizia" element={<UrbanisticaEdilizia />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* Procedures index — browseable taxonomy */}
            <Route path="/procedure" element={<Procedures />} />
            {/* Procedure pages — flat root URLs, generated from the registry */}
            {procedures.map((p) => (
              <Route
                key={p.slug}
                path={`/${p.slug}`}
                element={<ProcedurePage />}
              />
            ))}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TokenisationHome from "./pages/tokenisation/TokenisationHome";
import AssetOwners from "./pages/tokenisation/AssetOwners";
import Investors from "./pages/tokenisation/Investors";
import HowItWorks from "./pages/tokenisation/HowItWorks";
import News from "./pages/tokenisation/News";
import FAQs from "./pages/tokenisation/FAQs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to tokenisation */}
          <Route path="/" element={<Navigate to="/tokenisation" replace />} />
          
          {/* Tokenisation section */}
          <Route path="/tokenisation" element={<TokenisationHome />} />
          <Route path="/tokenisation/asset-owners" element={<AssetOwners />} />
          <Route path="/tokenisation/investors" element={<Investors />} />
          <Route path="/tokenisation/how-it-works" element={<HowItWorks />} />
          <Route path="/tokenisation/news" element={<News />} />
          <Route path="/tokenisation/faqs" element={<FAQs />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

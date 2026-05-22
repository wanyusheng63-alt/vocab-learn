import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";
import { PageTransition } from "@/components/PageTransition";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import WordDetail from "./pages/WordDetail";
import Favorites from "./pages/Favorites";
import Feedback from "./pages/Feedback";
import WordLists from "./pages/WordLists";
import FlashCards from "./pages/FlashCards";
import NotFound from "./pages/NotFound";

/**
 * Configure TanStack Query client with optimized defaults
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data considered fresh for 1 minute
      staleTime: 60 * 1000,
      // Cache data for 5 minutes
      gcTime: 5 * 60 * 1000,
      // Retry failed requests once
      retry: 1,
      // Don't refetch on window focus by default
      refetchOnWindowFocus: false,
      // Don't refetch on reconnect by default
      refetchOnReconnect: false,
    },
    mutations: {
      // Retry failed mutations once
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter basename="/vocab-learn">
            <AnimatedRoutes>
              <Route path="/" data-genie-title="Home Page" data-genie-key="Home" element={<PageTransition transition="slide-up"><Index /></PageTransition>} />
              <Route path="/word/:word" data-genie-title="Word Detail" data-genie-key="WordDetail" element={<PageTransition transition="slide-up"><WordDetail /></PageTransition>} />
              <Route path="/favorites" data-genie-title="My Favorites" data-genie-key="Favorites" element={<PageTransition transition="slide-up"><Favorites /></PageTransition>} />
              <Route path="/wordlists" data-genie-title="Word Lists" data-genie-key="WordLists" element={<PageTransition transition="slide-up"><WordLists /></PageTransition>} />
              <Route path="/flashcards/:listId?" data-genie-title="Flash Cards" data-genie-key="FlashCards" element={<PageTransition transition="slide-up"><FlashCards /></PageTransition>} />
              <Route path="/feedback" data-genie-title="Feedback" data-genie-key="Feedback" element={<PageTransition transition="slide-up"><Feedback /></PageTransition>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" data-genie-key="NotFound" data-genie-title="Not Found" element={<PageTransition transition="fade"><NotFound /></PageTransition>} />
            </AnimatedRoutes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App

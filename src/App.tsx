import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { MobileBottomNav } from "./components/MobileBottomNav";
import { Navbar } from "./components/Navbar";
import { useAppRoute } from "./hooks/useAppRoute";
import { useSectionReveal } from "./hooks/useSectionReveal";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { content } from "./lib/content";
import { getProjectById } from "./lib/projects";
import { ThemeProvider } from "./lib/theme";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";

const LOADING_SEEN_KEY = "portfolio-loading-seen";

function App() {
  useSmoothScroll();
  useSectionReveal();

  const route = useAppRoute();
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem(LOADING_SEEN_KEY) !== "1";
  });
  const selectedProject =
    route.type === "project" ? getProjectById(route.projectId) : undefined;

  useEffect(() => {
    if (route.type !== "home" || !route.sectionId) {
      return;
    }

    const sectionId = route.sectionId;

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (!section) {
        return;
      }

      section.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const frameId = window.requestAnimationFrame(scrollToSection);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [route]);

  const handleLoadingComplete = () => {
    sessionStorage.setItem(LOADING_SEEN_KEY, "1");
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen">
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <AnimatePresence>
            {isLoading ? (
              <LoadingScreen
                name={content.name}
                role={content.role}
                onComplete={handleLoadingComplete}
              />
            ) : null}
          </AnimatePresence>
          <div className="relative z-10 lg:pl-64">
            {route.type !== "project" ? (
              <>
                <Navbar />
                <MobileBottomNav />
              </>
            ) : null}
            {route.type === "project" ? (
              <ProjectDetailsPage project={selectedProject} />
            ) : (
              <HomePage />
            )}
            <Footer />
          </div>
        </div>
      </LazyMotion>
    </ThemeProvider>
  );
}

export default App;

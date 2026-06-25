import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { SideRail } from "./components/SideRail";
import { useAppRoute } from "./hooks/useAppRoute";
import { useSectionReveal } from "./hooks/useSectionReveal";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import type { Locale } from "./lib/content";
import { content } from "./lib/content";
import { getProjectById } from "./lib/projects";
import { ThemeProvider } from "./lib/theme";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";

function App() {
  useSmoothScroll();
  useSectionReveal();

  const route = useAppRoute();
  const [isLoading, setIsLoading] = useState(true);
  const locale: Locale = "en";
  const copy = content[locale];
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

  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen">
          <AnimatePresence>
            {isLoading ? (
              <LoadingScreen
                name={copy.name}
                role={copy.role}
                onComplete={() => setIsLoading(false)}
              />
            ) : null}
          </AnimatePresence>
          <div className="relative z-10">
            {route.type !== "project" ? <SideRail /> : null}
            {route.type === "project" ? (
              <ProjectDetailsPage project={selectedProject} />
            ) : (
              <HomePage locale={locale} />
            )}
            <Footer withRailOffset={route.type !== "project"} />
          </div>
        </div>
      </LazyMotion>
    </ThemeProvider>
  );
}

export default App;

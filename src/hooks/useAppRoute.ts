import { useEffect, useState } from "react";
import { parseAppRoute, type AppRoute } from "../routes/projectRoutes";

export function useAppRoute(): AppRoute {
  const [route, setRoute] = useState<AppRoute>(() => {
    if (typeof window === "undefined") {
      return { type: "home" };
    }

    return parseAppRoute(window.location.hash);
  });

  useEffect(() => {
    const syncRoute = () => {
      setRoute(parseAppRoute(window.location.hash));
    };

    window.addEventListener("hashchange", syncRoute);
    window.addEventListener("popstate", syncRoute);

    return () => {
      window.removeEventListener("hashchange", syncRoute);
      window.removeEventListener("popstate", syncRoute);
    };
  }, []);

  return route;
}

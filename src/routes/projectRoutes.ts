export interface HomeRoute {
  type: "home";
  sectionId?: string;
}

export interface ProjectRoute {
  type: "project";
  projectId: string;
}

export type AppRoute = HomeRoute | ProjectRoute;

const projectRoutePrefix = "#/projects/";

export function parseAppRoute(hash: string): AppRoute {
  if (hash.startsWith(projectRoutePrefix)) {
    return {
      type: "project",
      projectId: decodeURIComponent(hash.slice(projectRoutePrefix.length)),
    };
  }

  const normalizedHash = hash.startsWith("#") ? hash.slice(1) : hash;
  const sectionId =
    normalizedHash.length > 0 && !normalizedHash.startsWith("/")
      ? normalizedHash
      : undefined;

  return {
    type: "home",
    sectionId,
  };
}

export function getProjectRoute(projectId: string): string {
  return `${projectRoutePrefix}${encodeURIComponent(projectId)}`;
}

export function getSectionRoute(sectionId?: string): string {
  return sectionId ? `#${sectionId}` : "#hero";
}

export function navigateToRoute(route: string): void {
  if (typeof window === "undefined") {
    return;
  }

  const normalizedRoute = route.startsWith("#") ? route.slice(1) : route;
  window.location.hash = normalizedRoute;
}

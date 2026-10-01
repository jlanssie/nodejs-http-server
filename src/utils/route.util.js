export function matchRoute(route, req) {
  if (route?.method?.toUpperCase() !== req?.method?.toUpperCase()) {
    return false;
  }

  const path = (req?.url || req?.pathname || "").split("?")[0];
  const pathSegments = path.split("/").filter(Boolean);
  const routeSegments = (route?.path || "").split("/").filter(Boolean);

  if (routeSegments.length !== pathSegments.length) {
    return false;
  }

  return routeSegments.every((routeSegment, i) => {
    return routeSegment === pathSegments[i];
  });
}

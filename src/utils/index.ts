export function route(route: string, params: any = {}): string {
  let builtRoute = route;

  Object.keys(params).forEach((property) => {
    builtRoute = builtRoute.replace(`:${property}`, params[property]);
  });

  return builtRoute;
}

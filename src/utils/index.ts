export function route(route: string, params: any = {}): string {
  let builtRoute = route;

  Object.keys(params).forEach((property) => {
    builtRoute = builtRoute.replace(`:${property}`, params[property]);
  });

  return builtRoute;
}

export const formatDate = (date: string) => {
  const arr = date.split("-");

  return { year: arr[0], day: arr[2], month: arr[1] };
};

export function formatTime(minutes: number) {
  const totalSeconds = Math.floor(minutes * 60);
  const hours = Math.floor(totalSeconds / 3600);
  const remainingSecondsAfterHours = totalSeconds % 3600;
  const mins = Math.floor(remainingSecondsAfterHours / 60);
  const secs = remainingSecondsAfterHours % 60;

  return { mins, secs, hours };
}

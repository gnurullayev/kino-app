export function route(route: string, params: any = {}): string {
  let builtRoute = route;

  Object.keys(params).forEach((property) => {
    builtRoute = builtRoute.replace(`:${property}`, params[property]);
  });

  return builtRoute;
}

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const year = String(newDate.getFullYear()).padStart(2, "0");
  const day = String(newDate.getUTCDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0");

  return { year, day, month };
};

export function formatTime(minutes: number) {
  const totalSeconds = Math.floor(minutes * 60);
  const hours = Math.floor(totalSeconds / 3600);
  const remainingSecondsAfterHours = totalSeconds % 3600;
  const mins = Math.floor(remainingSecondsAfterHours / 60);
  const secs = remainingSecondsAfterHours % 60;

  return { mins, secs, hours };
}

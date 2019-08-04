export const displayTimeUnit = unit => Number(unit) >= 10 ? String(unit) : `0${unit}`;

export const createDateFromTimeUnits = (hours, minutes = 0, seconds = 0) => {
  const now = new Date();

  now.setHours(hours);
  now.setMinutes(minutes);
  now.setSeconds(seconds);

  return now;
}
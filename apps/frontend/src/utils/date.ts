export function toRelativeDate(date: string | Date) {
  const relativeFormatter = new Intl.RelativeTimeFormat('en-us');

  const DIVISIONS = [
    { amount: 60, name: 'seconds' },
    { amount: 60, name: 'minutes' },
    { amount: 24, name: 'hours' },
    { amount: 7, name: 'days' },
    { amount: 4.34524, name: 'weeks' },
    { amount: 12, name: 'months' },
    { amount: Number.POSITIVE_INFINITY, name: 'years' },
  ];

  let duration = (new Date(date).getTime() - Date.now()) / 1000;

  for (const division of DIVISIONS) {
    if (Math.abs(duration) < division.amount) {
      return relativeFormatter.format(Math.round(duration), division.name as Intl.RelativeTimeFormatUnit);
    }
    duration /= division.amount;
  }

  return relativeFormatter.format(Math.round(duration), 'years');
}

export function format(date: string | Date, excludeYear = false) {
  const formatter = new Intl.DateTimeFormat('en-us', {
    weekday: undefined,
    month: 'short',
    day: 'numeric',
    year: excludeYear ? undefined : 'numeric',
  });

  let dateObj: Date | undefined;
  if (typeof date === 'string') {
    dateObj = new Date(date);
  } else {
    dateObj = date;
  }

  return formatter.format(dateObj);
}

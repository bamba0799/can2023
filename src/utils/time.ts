import { dayjs } from '@lib/dayjs';

export function getCurrentDate() {
  const date = new Date().getTime();
  return dayjs(date).format();
}

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc).extend(timezone);

export const dateTimeService = {
  getNow() {
    const now = new Date();
    return dayjs.tz(now, 'Europe/Amsterdam');
  },
  getLocalDateTime({ dateTime }) {
    return dayjs.tz(dateTime, 'Europe/Amsterdam');
  },
  getDateFromUnix({ unix }) {
    return dayjs(unix * 1000);
  },
};

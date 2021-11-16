import dayjs from 'dayjs';

const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime)

export const dateFormat = 'YYYY-MM-DD';

export const dateFormatter = (timestamp) => dayjs.unix(timestamp).fromNow();

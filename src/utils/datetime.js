import dayjs from 'dayjs';

const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime)

export const dateFormatter = (timestamp) => dayjs.unix(timestamp).fromNow();

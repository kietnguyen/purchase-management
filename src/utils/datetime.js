import moment from 'moment';

export const dateFormat = 'YYYY-MM-DD';

export const relativeDate = (date) => moment(date).fromNow();

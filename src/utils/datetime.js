import moment from 'moment';

export const dateFormat = 'YYYY-MM-DD';

export const relativeDate = (date) => {
  const currentDate = moment(date);
  const today = moment();
  if (currentDate.day() === today.day()) {
    return 'today';
  }
  if (currentDate.day() === today.subtract(1, 'days').day()) {
    return 'yesterday';
  }
  return moment(date).fromNow();
};

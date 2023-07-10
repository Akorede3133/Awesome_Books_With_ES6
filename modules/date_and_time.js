import { DateTime } from '../node_modules/luxon/src/luxon.js';
// import { DateTime } from 'luxon';

const getDateAndTime = () => {
  const now = DateTime.local();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  return date;
};
export default getDateAndTime;

// date formatting functions
const toMonth = new Intl.DateTimeFormat('en', { month: 'long' });


// format a date to MMMM, YYYY
export function toFriendlyDate(date) {

  return date instanceof Date ?
    toMonth.format(date) + ', ' + date.getUTCFullYear() : '';

}

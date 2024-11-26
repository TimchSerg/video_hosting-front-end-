import moment from "moment";

export function toDate(date) {
  if (!date) return "-";

  return moment(date).format("HH:mm DD.MM.YYYY ");
}

export function toDateNoTime(date) {
  if (!date) return "-";

  return moment(date).format('ll');
}
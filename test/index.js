import getTimeData, { getDate, getDateStamp, getDay, getMonth, getRangedYears, getYear, MonitorDate } from "../time.js";

console.log(getDateStamp());
console.log(getTimeData());
console.log(getDate());
console.log(getDay());
console.log(getMonth());
console.log(getYear());
console.log(getRangedYears("Past", 100));

const starts = {
    month: "April",
    date: 25,
    year: "2022"
}
MonitorDate(starts, 5, () => {
    console.log("object")
});
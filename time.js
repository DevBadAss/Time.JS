/**
 * 
 * @author Olawoore Emmanuel Collins
 */

/**
 * Gets dateString.
 * @returns Current Date in String Format.
 */
export const getDateStamp = () => {
    const dateStamp = new Date()
    const dateString = dateStamp.toString();
    return dateString;
}

/**
 * Get Array of Current Date Data
 * @returns An Array of Current Date Data.
 */

const getTimeData = () => {
    const StampString = getDateStamp();
    const TimeData = StampString.split(" ");
    return TimeData;
}

/**
 * Gets Current date in day/month/date/year format.
 * @returns Current Date.
 */

export const getDate = () => {
    const TimeData = getTimeData();
    var currentDate = TimeData[0] + "/" + TimeData[1] + "/" + TimeData[2] + "/" + TimeData[3];
    return currentDate;
}

/**
 * Gets current day and date.
 * @returns An Array of the current day of the week and date.
 */

export const getDay = () => {
    const DayAbbr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const TimeData = getTimeData();
    var currentDay;
    for (let i = 0; i < Days.length; i++) {
        if (TimeData[0] === DayAbbr[i]) {
            currentDay = [Days[i], TimeData[2]];
        }
    }
    return currentDay;
}

/**
 * Get Current Month.
 * @returns current month of the year.
 */

export const getMonth = () => {
    const MonthAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const TimeData = getTimeData();
    var currentMonth;
    for (let i = 0; i < Months.length; i++) {
        if (TimeData[1] === MonthAbbr[i]) {
            currentMonth = Months[i];
        }
    }
    return currentMonth;
}

/**
 * Get Current Year.
 * @returns current year.
 */

export const getYear = () => {
    var Year;
    const TimeData = getTimeData();
    Year = TimeData[3];
    return Year;
}

/**
 * Get Years in ranges.
 * @param {String} timeline TimeLine e.g Future or Past.
 * @param {Number} range Range
 * @returns An array of ranged years
 */

export const getRangedYears = (timeline, range) => {
    var currentYear = new Date().getFullYear();
    var rangedYears = [];
    let i = 0;
    if (timeline === "Future") {
        while (i < range) {
            i++;
            rangedYears.push(currentYear++);
            if (i === range) {
                break;
            }
        }
        return rangedYears;
    }

    if (timeline === "Past") {
        while (i < range) {
            i++;
            rangedYears.push(currentYear--);
            if (i === range) {
                break;
            }
        }
        return rangedYears;
    }
}

/**
 * A Date Timer.
 * @param {Object} start An object consisting of the timer starting data e.g month, date e.t.c
 * @param {Number} duration Duration for timer.
 * @param {Function} callback Function to be executed when timing is completed.
 */

export const MonitorDate = (start, duration, callback) => {
    const TimeData = getTimeData();
    const DaysInMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let start_month = start.month;
    let start_date = start.date;
    let start_year = start.year;

    for (let i = 0; i < Months.length; i++) {
        if (start_month === Months[i]) {
            let DaysLeftInCurrentMonth = (DaysInMonths[i] - start_date);
            let expiration_day = duration - DaysLeftInCurrentMonth;

            if (expiration_day === 0) {
                let expiration_day = 1;
                if (expiration_day === new Date().getDate()) {
                    callback();
                }
            }

            if (expiration_day === new Date().getDate()) {
                callback();
            }
        }
    }
}

export default getTimeData;
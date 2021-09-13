/* ======== A simple responsive calendar with dark mode. Created by @tristanbct. Just for training my JS ======== */
//============================

// Get all HTML elements
const monthText = document.getElementById("month");
const dayWeekText = document.getElementById("day-week");
const dayNumberText = document.getElementById("day-number");
const yearText = document.getElementById("year");

// Get all dates
const date = new Date();

const getMonthDate = date.getMonth();
const getDayWeekDate = date.getDay();
const getDayNumberDate = date.getDate();
const getYearDate = date.getFullYear();

// Create variables
let monthDate = "";
let dayWeek = "";

// Transform month number into month letter
switch (getMonthDate) {
    case 0:
        monthDate = "January";
    break;
    case 1:
        monthDate = "February";
    break;
    case 2:
        monthDate = "March";
    break;
    case 3:
        monthDate = "April";
    break;
    case 4:
        monthDate = "May";
    break;
    case 5:
        monthDate = "June";
    break;
    case 6:
        monthDate = "July";
    break;
    case 7:
        monthDate = "August";
    break;
    case 8:
        monthDate = "September";
    break;
    case 9:
        monthDate = "October";
    break;
    case 10:
        monthDate = "November";
    break;
    case 11:
        monthDate = "December";
    break;
    default:
        monthDate = "Error..."
    break;
}

// Transform day number into letter
switch (getDayWeekDate) {
    case 0:
        dayWeek = "Sunday";
    break;
    case 1:
        dayWeek = "Monday";
    break;
    case 2:
        dayWeek = "Tuesday";
    break;
    case 3:
        dayWeek = "Wednesday";
    break;
    case 4:
        dayWeek = "Thursday";
    break;
    case 5:
        dayWeek = "Friday";
    break;
    case 6:
        dayWeek = "Saturday";
    break;
    default:
        dayWeek = "Error...";
    break;
}

// Transfer Javascript Date to HTML document
monthText.textContent = `${monthDate}`;
dayWeekText.textContent = `${dayWeek}`;
dayNumberText.textContent = `${getDayNumberDate}`;
yearText.textContent = `${getYearDate}`;



// ======================= DARK MODE ==========================
const chk = document.getElementById('chk');
const calendar = document.querySelector(".calendar");
const dateElements = document.querySelector("h3");

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    calendar.classList.toggle("calendar-dark");
    dayWeekText.classList.toggle("elements-dark");
    dayNumberText.classList.toggle("elements-dark");
    yearText.classList.toggle("elements-dark");
});
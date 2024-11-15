let day = parseInt(prompt("Enter day:"));
let month = parseInt(prompt("Enter month (1-12):"));
let year = parseInt(prompt("Enter year:"));
let currentDate = new Date(year, month - 1, day);
currentDate.setDate(currentDate.getDate() + 1);
let newDay = currentDate.getDate();
let newMonth = currentDate.getMonth() + 1;
let newYear = currentDate.getFullYear();
alert("Next date: " + newDay + "/" + newMonth + "/" + newYear);

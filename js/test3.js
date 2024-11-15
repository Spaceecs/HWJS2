let number = prompt("Enter a three-digit number:");
number = parseInt(number);
let hundreds = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let ones = number % 10;
if (hundreds === tens || hundreds === ones || tens === ones) {
    alert("There are identical digits");
} else {
    alert("There are no identical digits");
}
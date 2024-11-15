let number = prompt("Enter a five-digit number:");
if (number.length === 5) {
    if (number === number.split('').reverse().join('')) {
        alert(number + " is a palindrome.");
    } else {
        alert(number + " is not a palindrome.");
    }
} else {
    alert("Please enter a five-digit number.");
}
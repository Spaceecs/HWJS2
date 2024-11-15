let circumference = parseFloat(prompt("Enter the circumference of the circle:"));
let perimeter = parseFloat(prompt("Enter the perimeter of the square:"));

let radius = circumference / (2 * Math.PI);
let diameter = 2 * radius;

if (diameter <= perimeter / 4) {
    alert("The circle can fit inside the square.");
} else {
    alert("The circle cannot fit inside the square.");
}

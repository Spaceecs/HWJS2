let age = prompt("Enter your age");
age = parseInt(age);
let ageGroup = age >= 0 && age <= 12 ? "Child" :
    age >= 13 && age <= 18 ? "Teenager" :
        age >= 19 && age <= 60 ? "Adult" :
            age > 60 ? "Senior" : "Unknown";
switch (ageGroup) {
    case "Child":
        alert("Child");
        break;
    case "Teenager":
        alert("Teenager");
        break;
    case "Adult":
        alert("Adult");
        break;
    case "Senior":
        alert("Senior");
        break;
    default:
        alert("Invalid age");
}
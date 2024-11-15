let usdAmount = prompt("Enter the amount in USD:");
usdAmount = parseFloat(usdAmount);
let currency = prompt("Enter the currency to convert to (EUR, UAN, AZN):").toUpperCase();
let result;
if (currency === "EUR") {
    result = usdAmount * 0.93;
} else if (currency === "UAN") {
    result = usdAmount * 40.1;
} else if (currency === "AZN") {
    result = usdAmount * 1.7;
} else {
    result = "Invalid currency.";
}
alert(result);
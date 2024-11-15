let score = 0;
let question1 = prompt("1. What is the capital of France?\n1. Berlin\n2. Paris\n3. Madrid");
if (question1 === "2") {
    score += 2;
}
let question2 = prompt("2. What is 2 + 2?\n1. 3\n2. 4\n3. 5");
if (question2 === "2") {
    score += 2;
}
let question3 = prompt("3. Which planet is known as the Red Planet?\n1. Earth\n2. Mars\n3. Jupiter");
if (question3 === "2") {
    score += 2;
}
alert("You scored " + score + " points.");

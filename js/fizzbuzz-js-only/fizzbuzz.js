let start, stop, fizzAt, buzzAt, oddEvenBool;

console.log("Please enter 4 integers for FizzBuzz:");
getValues();


function getValues() {
    getStart();
    getEnd();
    getFizz();
    getBuzz();
    getBool();
}

function getStart() {
    start = parseInt(prompt("A Starting Integer:"));
    if (!(testInteger(start))) getStart();
}

function getEnd() {
    end = parseInt(prompt("A Ending Integer:"));
    if (!testInteger(end)) getEnd();
}

function getFizz() {
    fizzAt = parseInt(prompt("A Fizzing Integer:"));
    if (!testInteger(fizzAt)) getFizz();
}

function getBuzz() {
    buzzAt = parseInt(prompt("A Buzzing Integer:"));
    if (!testInteger(buzzAt)) getBuzz();
}

function testInteger(num) {
    return !(isNaN(num));
}

function getBool() {
    oddEvenBool = prompt("Do you want to know if the value is odd or even? (yes/no):").toLowerCase();
    if (oddEvenBool === "yes" || oddEvenBool === "no") {
        fizzBuzz();
    } else {
        getBool();
    }
}

function fizzBuzz() {
    for (let i = start; i <= end; i++) {
        let answer = "";
        let evenOdd = (i % 2 === 0) ? " - Even" : " - Odd";

        !(i % fizzAt) ? answer += "Fizz" : parseInt(answer);
        !(i % buzzAt) ? answer += "Buzz" : parseInt(answer);
        !(answer) ? parseInt(answer += i) : answer;
        !isNaN(answer) ? answer : (oddEvenBool === 'yes') ? (answer += evenOdd) : answer;

        console.log(answer);
    }
}
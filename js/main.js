document.querySelector('.btn').addEventListener('click', fizzBuzz);
const ul = document.querySelector(".results__list");

function fizzBuzz() {
//     for (i=start; i <= end; i++) {
//         if (i % (fizzAt * buzzAt) === 0) {
//             console.log('FizzBuzz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else {
//             console.log(i);
//         };
//     };
    clearResults();

    const start = parseInt(document.querySelector("#start").value);
    const end = parseInt(document.querySelector("#end").value);
    const fizzAt = parseInt(document.querySelector("#fizz").value);
    const buzzAt = parseInt(document.querySelector("#buzz").value);

    for (i = start; i <= end; i++) {
        let answer = '';

        !(i % fizzAt) ? answer += 'Fizz' : answer;
        !(i % buzzAt) ? answer += 'Buzz' : answer;
        !(answer) ? answer+= i : answer;

        const li = document.createElement('li')
        li.innerHTML = answer;
        ul.appendChild(li);
    }
}

function clearResults() {
    ul.innerHTML = "";
}
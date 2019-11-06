function logName(name) {
        console.log(`Hello, ${name}!`);
}

const nameA = 'Alpha';
const nameB = 'Betty';

logName(nameA);
logName(nameB);

//============================================================================================================================

const checkAge = function(age) {
        if (age >= 18) {
                console.log('You are old enough');
        } else if (age < 18 && age >= 0) {
                console.log('You are still young');
        } else {
                console.log('You are not born yet');
        }
};

checkAge(10); // You are still young
checkAge(25); // You are old enough
checkAge(-2); // You are not born yet

//============================================================================================================================

const addMarks = (text, mark, times) => {
        let newText = text;

        for (let i = 0; i <= times; i++) {
                newText += mark;
        }

        console.log(newText);
};

addMarks('Hello', '!', 1); // Hello!
addMarks('Hello', '!', 3); // Hello!!!
addMarks('How are you', '?', 1); // How are you?
addMarks('How are you', '?', 2); // How are you??

//============================================================================================================================

const showNameWithAge = (name = 'Unknown', age = 0) => {
        const nameWithAge = `${name} is ${age} year(s) old`;

        return nameWithAge; // return the value to be used later
};

const alpha = showNameWithAge('Alpha', 11);
const betty = showNameWithAge('Betty', 42);
const gamma = showNameWithAge('Gamma', 30);

console.log(alpha);
console.log(betty);
console.log(gamma);

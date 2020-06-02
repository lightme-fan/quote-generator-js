console.log('it works!');

// These are the quotations with three sentences in each of them.
let firstQuotes = [
    'Socrates said the only true wisdom is you know nothing.',
    'Is that true?',
    'What do you make of this statement?',
];

let secondQuotes = [
    'The only thing I know is I know nothing.',
    'So, I\'m wondering to know what you know.',
    'Think about you\'ve not known so far.'
];

// This function generate the quotations
function generateQuote() {
    const firstRandom = Math.floor(Math.random() * (firstQuotes.length));
    const secondRandom = Math.floor(Math.random() * (secondQuotes.length));

    // This for loop is set to combine the first quotes with the second ones.
     for (let i = 0; i < 4; i++) {
        return firstQuotes[firstRandom]+ ` ` + secondQuotes[secondRandom] + ` `;
    }
 }
console.log(generateQuote());

// This is set to check if the input from the users are correct
const numberOfQuote = prompt("Write a number of generator you want");
alert(`Confirm your number: ${numberOfQuote}`);

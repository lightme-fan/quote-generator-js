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

let lastQuotes = [
    'He used to talk a blue streak.',
    'I do not mind whatever you say.',
    'You need to tell me why you don\'t know exactly what you have known so far.' 
];

console.log(firstQuotes, secondQuotes, lastQuotes);

// This function generate the quotations
function generateQuote() {
        const firstRandom = Math.floor(Math.random() * (firstQuotes.length));
        const secondRandom = Math.floor(Math.random() * (secondQuotes.length));
        const lastRandom = Math.floor(Math.random() * (lastQuotes.length));
           
        return firstQuotes[firstRandom]+ ` ` + secondQuotes[secondRandom] + ` ` + lastQuotes[lastRandom] + ` `;
}

console.log(generateQuote(firstQuotes, secondQuotes, lastQuotes));

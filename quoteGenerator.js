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

function generateQuote(randomQuote) {
    const userRondomQuote  = prompt("How many random quotes would you like?");
    if (userRondomQuote > 0 && userRondomQuote < 6) {    
        for (let num = 0; num < userRondomQuote; num++) {
            const firstRandom = Math.floor(Math.random() * (firstQuotes.length));
            const secondRandom = Math.floor(Math.random() * (secondQuotes.length));
            const lastRandom = Math.floor(Math.random() * (lastQuotes.length)); 
            
            const randomQuote = ` ${firstQuotes[firstRandom]} ${secondQuotes[secondRandom]} ${lastQuotes[lastRandom]}`;
            console.log(randomQuote);
        } 
    } else {
        return randomQuote;
    }
}
generateQuote();

let firstNewQuote = [
    "I love you the more in that I believe you had liked me for my own sake and for nothing else",
    "But man is not made for defeat. A man can be destroyed but not defeated",
	"When you reach the end of your rope, tie a knot in it and hang on",
];

let secondNewQuote = [
    "Cats are angels with fur.",
    "An animal’s eyes have the power to speak a great language.",
    "The better I get to know men, the more I find myself loving dogs.",
];

let lastNewQuote = [
    "Dogs are our link to paradise. They don’t know evil or jealousy or discontent",
    "An animal’s eyes have the power to speak a great language.",
    "There is nothing permanent except change.",
];

const newGenerateQuote = () => {
	let randomIndex1 = Math.floor(Math.random() * firstNewQuote.length);
	let randomIndex2 = Math.floor(Math.random() * secondNewQuote.length);
	let randomIndex3 = Math.floor(Math.random() * lastNewQuote.length);
	let string1 = firstNewQuote[randomIndex1];
	let string2 = secondNewQuote[randomIndex2];
	let string3 = lastdNewQuote[randomIndex3];
	let quote = `${string1} ${string2} ${string3}`;
	return quote;
};

console.log(firstNewQuote, secondNewQuote, lastNewQuote);

// const user = prompt("Do you want to choose type of quotation");
// console.log(user);

const answer = "";
while (answer === "yes") {
    if (answer === "yes") {
        // answer = prompt("Enter the type of quotation you want: ");
        answer = prompt("Do you want to choose type of quotation");
    } 
}

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

const question = prompt("Do you want to choose type of quotation?");
if (question >= 1 || question <= 5) {
    const otherQuestion = prompt("Enter a type of quotation you want");
    for (let num = 0; num < otherQuestion; num++) {
        if (otherQuestion === 1) {
         console.log(generateQuote(randomQuote));
        } else if (otherQuestion === 2) {
            function newGenerateQuote() {
                for (i = 0; i < otherQuestion; i++) {
                    let randomIndex1 = Math.floor(Math.random() * firstNewQuote.length);
                    let randomIndex2 = Math.floor(Math.random() * secondNewQuote.length);
                    let randomIndex3 = Math.floor(Math.random() * lastNewQuote.length);
                    let string1 = firstNewQuote[randomIndex1];
                    let string2 = secondNewQuote[randomIndex2];
                    let string3 = lastdNewQuote[randomIndex3];
                    let quote = `${string1} ${string2} ${string3}`;
                    return quote;
                }
            } 
            newGenerateQuote();
        }                       
    }
}  else {
    while (question >= 1 || question <= 5) {
        const otherQuestion = prompt("Enter the style of quotatiion you want");
        for (let num = 0; num < otherQuestion; num++) {
            if (otherQuestion === 1) {
            generateQuote(randomQuote);
            } else if (otherQuestion === 2) {
                newGenerateQuote();
            }                       
        }
    }
}

// let array1 = [
//     'Amateurs look for inspiration;',
//     'We have to be honest about what we want',
//     'All my life, I kept waiting for things to get better',
//     'Accidents happen',
//     'Either be a good parent',
// ];
// let array2 = [
//     'the rest of us just',
//     'and take risks rather than lie to ourselves',
//     'But a funny thing happened while I was waiting for the world to change',
//     'Our bones shatter, our skin splits, our hearts break',
//     'to your career or ',
// ];
// let array3 = [
//     'get up and go to work.',
//     'and make excuses to stay in our comfort zone.',
//     "Because I didn't change it.",
//     'We burn, we drown, we stay alive.',
//     'just give your dream up for adoption.',
// ];
// let randomIndex1 = Math.floor(Math.random() * array1.length);
// let randomIndex2 = Math.floor(Math.random() * array2.length);
// let randomIndex3 = Math.floor(Math.random() * array3.length);
// let string1 = array1[randomIndex1];
// let string2 = array2[randomIndex2];
// let string3 = array3[randomIndex3];
// let quote = `${string1} ${string2} ${string3}`;
// console.log(quote);


// Loïc  2:02 PM
// let array1 = [
// 'Amateurs look for inspiration;',
// 'We have to be honest about what we want',
// 'All my life, I kept waiting for things to get better',
// 'Accidents happen',
// 'Either be a good parent',
// ];
// let array2 = [
// 'the rest of us just',
// 'and take risks rather than lie to ourselves',
// 'But a funny thing happened while I was waiting for the world to change',
// 'Our bones shatter, our skin splits, our hearts break',
// 'to your career or ',
// ];
// let array3 = [
// 'get up and go to work.',
// 'and make excuses to stay in our comfort zone.',
// "Because I didn't change it.",
// 'We burn, we drown, we stay alive.',
// 'just give your dream up for adoption.',
// ];
// const generateQuote = () => {
// let randomIndex1 = Math.floor(Math.random() * array1.length);
// let randomIndex2 = Math.floor(Math.random() * array2.length);
// let randomIndex3 = Math.floor(Math.random() * array3.length);
// let string1 = array1[randomIndex1];
// let string2 = array2[randomIndex2];
// let string3 = array3[randomIndex3];
// let quote = `${string1} ${string2} ${string3}`;
// return quote;
// };
// //1. use prompt to ask the user how many times we want to generate a random quote
// const numberOfQuotes = prompt('How many random quotes do you want to generate? (1 to 5)');
// //2. check if the prompt give us something between 1 and 5
// if (numberOfQuotes >= 1 && numberOfQuotes <= 5) {
// //3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
// for (let i = 0; i < numberOfQuotes; i++) {
// //4. refactor our code into a function, and put the function call inside the loop
// //4.1 generate random numbers
// //4.2 show the generated quotes
// let quote = generateQuote();
// console.log(quote);
// }
// } else {
// console.error('We need a number between 1 and 5');
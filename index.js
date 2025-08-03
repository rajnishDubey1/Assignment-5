
const boxen = require('boxen');

const message = "I am using my first external module!";
const title = "Hurray!!!";

console.log(boxen(message, {
    title: title,
    titleAlignment: 'center',
    padding: 1,
    borderStyle: 'classic'
}));


console.log(boxen(message, {
    title: title,
    titleAlignment: 'center',
    padding: 1,
    borderStyle: 'singleDouble'
}));


console.log(boxen(message, {
    title: title,
    titleAlignment: 'center',
    padding: 1,
    borderStyle: 'round'
}));


const colorfulBox = boxen(message, {
    title: title,
    titleAlignment: 'center',
    padding: 1,
    margin: 1,           
    borderStyle: 'round', 
    backgroundColor: 'blue', 
    borderColor: 'yellow'    
});

console.log(colorfulBox);

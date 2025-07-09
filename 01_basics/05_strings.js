const name = "Utkarsh"
const repoCount = 50

//console.log(name + repoCount + "value");

//console.log('hello my name is ${name} and my repo Count is ${repoCount}');

const gameName = new String('Utkarshhhc')

console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Utkarsh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://youtu.be/sscX432bMZo"

console.log(url.replace('you' , '-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));


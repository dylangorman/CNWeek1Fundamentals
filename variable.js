
//////////////////////////////////////////////////


// What is the difference between let & const?
// they are very similar, however once you assign a value to const it can't be changed. 

// What mathematical operator returns the remainder?
// %
// EG: 27%2 remainder is 1 


// YOU TUBE VIDEO 

// function start() {
// for (let i = 1; i <11; i++){
//     if (true) {
//         let color = 'red';
//         console.log(color);
//     }
// }

// function start() {
// for (var i = 1; i <11; i++){
//     if (true) {
//         let color = 'red';
//     }
// }
// console.log(color);
// }

//avoid using VAR key word!!
//var
//ES6 (ES2015): let, const => block-scoped
// start();


// let example that will work
// let age = 27;
// console.log(age);
// age = 30;
// console.log(age);


// const example that wont work
// const age = 27;
// console.log(age);
// age = 30;
// console.log(age);


// // Math Operations
// //Addition
// 50+5 //55
// //Subtraction
// 90-1//89
// //MUltiplication
// 11111*7//77777
// //Division
// 400/25//16
// //Mudulo!!
// 27%2//1  Remainder!!
// PEMDAS
// 3**2//9 Power of (exponentiation)

// ++ incrementation
// -- decrementation 
// // ParenthesisExponentsMulitplicationDivisionAdditionSubtract
// // Parenthesis = brackets
// // Exponents = ** power of

// // NaN NOT A NUMBER//
// 0/0 //Nan
// 1 + Nan //Nan

// = equals to 
// *= times and then Assign 

// > // greater than
// < // less than
// >= //greater than or equal to
// <= //less than or equal to


// equality operators

// == // equality
// != // not equal
// === // strict equality or triple equals
// !== // strict non equal


// let i = 10;
// i += 2;
// console.log (i)


// let favDrink = "beer"
// console.log(favDrink);
// console.log("My favourite drink is " + favDrink)

// let name = "Dylan";
// let age = 41;
// let favDrink = "Beer";


// // LONG WINDED!!!
// console.log("My name is " +name+ ". I am " +age+ ". My Favourite drink is " +favDrink +".");


// TEMPLATE LITERALS MAKES THINGS CLEANER
// let name = 'Dylan';
// let age = 41;
// let favDrink = 'Beer';
// console.log(`Hi my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)

// if updating dont need to say 'let'
// 
// age = 42
// favDrink = 'whiskey'



// ACTIVITY 1
let name = 'Susannah';
let favCol = 'Purple';
console.log(`Hi my name is ${name}. My favourite colour is ${favCol}.`)

name = 'Dylan';
favCol = 'Green';
console.log(`Hi my name is ${name}. My favourite colour is ${favCol}.`)


// ACTIVITY 2

let breakfast = 'toast';
let lunch = 'pasta';
let dinner = 'vegan burger'

console.log(`Todays meals are, breakfast: ${breakfast}, lunch: ${lunch}, dinner: ${dinner}.`)

breakfast = 'cereal';
lunch = 'salad';
dinner = 'pizza'
console.log(`Tomorrows meals are, breakfast: ${breakfast}, lunch: ${lunch}, dinner: ${dinner}.`)


// ACTIVITY 3:
// Create a program that calculates the number of days from today to your birthday 


const oneDay = 24*60*60*1000; 
let today = new Date(2021,10,16);
let birthday = new Date(2022,09,28);
let birthdate = new Date(1980,09,28);
let diff = Math.round(Math.abs((today - birthday)/oneDay))

console.log(`Todays date is ${today}`)
console.log(`My Birthday is ${birthday}`)
console.log(`Days until my next birthday are ${diff}`)

today = new Date (2021,10,16);
birthday = new Date(1980,09,28);
diff = Math.round(Math.abs((today - birthdate)/oneDay))
console.log(`Days since my birthdate are ${diff}`)



// ACTIVITY 4

// let space1 = 
// let space2 = 
// let space3 = 
// let space4 = 
// let space5 = 
// let space6 = 
// let space7 = 
// let space8 = 
// let space9 = 
// let space0 = 
// let i = "|"
// let j = "---------"
// console.log (`${space0}${i}${space0}${i}${space0}`);
// console.log (`${space1}${i}${space2}${i}${space3}`);
// console.log (`${space0}${i}${space0}${i}${space0}`);
// console.log(`${j}`)
// console.log (`${space0}${i}${space0}${i}${space0}`);
// console.log (`${space1}${i}${space2}${i}${space3}`);
// console.log (`${space0}${i}${space0}${i}${space0}`);
// console.log(`${j}`)
// console.log (`${space0}${i}${space0}${i}${space0}`);
// console.log (`${space1}${i}${space2}${i}${space3}`);
// console.log (`${space0}${i}${space0}${i}${space0}`);




// if else and switch

// if else statement 



// if (condition) {
//     //do this
// }
// else if (condition2){
//     //do this
// }
// else {
//     (do something else) 
// }

// let weather = "rainy";
// if (weather == "sunny"){
//     console.log("Well, I better wear some suncream!")
// } else if (weather == "rainy"){
// console.log("Better take an umbrella")
// }else {
//     console.log("Hmmm, could go either way!")
// }

// if (true){
//     console.log("I am true")
//     console.log(1+1 == 2) //true
//     console.log(1 == "1") //true
//     console.log(2 == "1+1") //false == LOOSE EQUAL
//     console.log(2 === "2") //false === STRICT EQUAL

// }else {
//     console.log("I am false")
// }

// const day = 5;
// if (day === 1) {
//         console.log ("MONDAY")
//     }
//     else if (day === 2) {
//         console.log ("TUESDAY")
//     }
//     else if (day === 3) {
//         console.log ("WEDNESDAY")
//     }
//     else if (day === 4) {
//         console.log ("THURSDAY")
//     }
//     else if (day === 5) {
//         console.log ("FRIDAY")
//     }
//     else if (day === 6, 7) {
//         console.log("WEEKEND")
//     }
//     else {
//         console.log("I DON'T KNOW THAT")
//     }
    

    // let place = "Manc";
    // let weather = "Cloudy";

    // if (place =="Manc" && weather == "Sunny"){
    //     console.log("Check again");
    // }else if (place =="Manc" && weather =="Rain"){
    //     console.log("Obvs");
    // }
    // else{
    //             console.log("What it isn't raining?");
    //         }
    // let place = "Manc";
    // let weather = "Rain";

    // if (place =="Manc" || weather == "Sunny"){
    //     console.log("Check again");
    // }else if (place =="Manc" || weather =="Rain"){
    //     console.log("Obvs");
    // }
    // else{
    //             console.log("What it isn't raining?");
    //         }



    //         example

           
// switch statement
// const day = 2;
// switch (day) {
//     case 1:
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("TUESDAY");
//         break;
//     case 3:
//         console.log("WEDNESDAY");
//         break;
//     case 4:
//         console.log("THURSDAY");
//         break;
//     case 5:
//         console.log("FRIDAY");
//         break;
//     case 6: 
//     case 7:
//         console.log ("WEEKEND");
//         break;
//         default:
//         console.log("I DON'T KNOW THAT")
// }

// const grade = 40;
// switch (true){
//     case grade >= 70:
//         console.log("Disctinction");
//         break;
//     case grade>= 60:
//         console.log("Merit");
//         break; 
//     case grade >= 50:
//         console.log ("Pass");
//         break;
//     case grade <50:
//         console.log ("Fail");
//         break;
// }



// // ACTIVITY 1 + STRETCH
// const age = 18;
// const country = "USA";

// if (age > 17 && country == "UK"){
//     console.log ("Yes I can serve you")
// } else {
//     console.log("You aren't old enough")
// } 

// // ACTIVITY 2

// let topping = "beef";

// switch (topping) {
//     case "mushroom":
//     case "onion":
//         console.log("These are important ingredients for my pizza");
//         break;
//     case "olives":
//         console.log(`I Don't mind having ${topping} on my pizza`);
//         break;
//     case "chicken":
//     case "beef":
//         console.log(`${topping} should not be on my pizza`);
//         break;

// }
// ACTIVITY 3


// const password = ("hellnnnmo");
// //Password must be 6+ characters
// if(password.length < 8) {
//     console.log("password is too short")

// }else {
//     console.log("password is ok")
// }


// const num = 7;
// if (num %3 === 0 || num %5 === 0){
//     console.log("This number is divisible by 3 or 5")
// }else {
//     console.log("This number isn't divisible by 3 or 5")
// }
// ACTIVITY 4

// const num = 15;

// if (num %3 == 0 && num %5 == 0){
//     console.log ("fizzbuzz")
// }
// else if (num %3 == 0){
//     console.log("fizz")
// }else if (num %5 == 0){
//     console.log("buzz")
// }
// else {
//     console.log("This number isn't divisible by 3 or 5")
// }



// ACTIVITY 5
// const num = 2020202

//     if (num == num.toString().split('').reverse().join('')){
//         console.log("palindrome")
//     } else {
//         console.log("not palindrome")
//     }

//  or

//  let num = 7261;
//  console.log(num);
//  let numString = num.toString();
//  console.log(numString);
//  let splitNumString = numString.split('');
//  console.log(splitNumString);
//  let reverseNumString = splitNumString.reverse();
//  console.log (reverseNumString);
//  let finalNumString = reverseNumString.join('');
//  console.log(finalNumString);

//  or 
 
//  let num = 7261;
//  let numString = num.toString();
//  let reverseNumString = numString.split('').reverse().join('');
// if (num == reverseNumString){
//     console.log(`Yes ${num} is a palindrome`)

// } else{
//     console.log(`No ${num} is not a palindrome`)
// }





// ACTIVITY 6
// let placeOfWork = "Manchester";
// const townOfHome = "Liverpool";
// let timeOfDay = 10
// if (timeOfDay == 7){
//     console.log (`I am at home in ${townOfHome}`)
// }if (timeOfDay == 8){
//     console.log ("I am commuting")
// } if (timeOfDay == 9){
//     console.log (`I am at work in ${placeOfWork}`)
// } else {
//     console.log ("I don't know where I am!!")
// }

// ACTIVITY 7

// Activity 7
let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let vowel = ['a', 'e', 'i', 'o', 'u'];
let highestIndex =0;
// counter go through whole array using length as limiter
for (let i = 0; i < vowel.length; i++){
//  console.log(string.lastIndexOf(vowel[i]));
// gets index of vowel in current iteration
    index = string.lastIndexOf(vowel[i]);
// compares current index to find highest index
if (index >= highestIndex ){
// so new highestindex becomes index
    highestIndex = index;
// won't reach last two nums in vowelarray
    lastVowel = vowel[i];
} console.log (lastVowel)
}
// let string = "alphabet";
// let vowels = ['a','e','i','o','u'];

// for (vowels = string.length(-1); vowels >0; vowels--)
// {
//     if(vowels.indexOf(charAt.string(i)));
// }
// console.log (vowels)


// const string = "ear";

//     const vowels = "aeiou";
//     for(vowels = inputWord.length()-1; i > 0; i--)
//     {
//         if(vowels.indexOf(inputWord.toLowerCase().charAt(i))>=0)
//         {
//             System.out.println("The last vowel is : " + inputWord.charAt(i));
//             break;
//         }
//     }


// ACTIVITY 8
const word = "HELLOH";
const firstLetter = word.charAt(0);
const lastLetter = word.charAt(word.length -1)
if (firstLetter == lastLetter){
    console.log ("TRUE")
} else {
    console.log("FALSE")
}

// ACTIVITY 9
const num1 = 5;
const num2 = 4;
let sum = (num1 + num2)

if (sum %2 === 0 ){
    console.log (sum)
}else {
    console.log(num1 * num2)
}

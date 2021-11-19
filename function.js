// function multiplyAll(arr) {
//     let product = 1;
//     for (let i = 0; i < arr.length; i++) {
//         const subArray = arr[i];
//         console.log(`Sub-array ${i}: ${arr[i]}`);
//         for (let j = 0; j < arr[i].length; j++) {
//             console.log(`Element ${j}: ${arr[i][j]}`);
//             product *= subArray[j];
//         }
//     }
//     return product;
//   }
  
//   multiplyAll([[1,2],[3,4],[5,6,7]]);




// functions are reuseable chunks of code 


//  function anything (){
//      console.log("Oh you again")
//      console.log("for the last time")
//      console.log("LEAVE ME ALONE!!")
//  }
// DEFINE THE FUNCTION EXECUTE IT AFTERWARDS!
 function singSong(){
     console.log("DO");
     console.log("RE");
     console.log("MI");
 }
 singSong()

 function greet(){
     console.log('HI')
 }
 greet()


 ///////////////////////////////////////////

 function printHeart(){
    console.log("<3");
}
printHeart()
//  look up hoisting //


// NEW SYNTAX     = ()=>

// const pressGrindBeans = ()=>{
//     console.log("Grinding for 20 seconds");
// }
// pressGrindBeans();

const timer = ()=>{
    console.log("Timer set for 1 hour");
}
timer();

let coffeeIsGrinding = false;
const pressGrindBeans = () =>{
    if (coffeeIsGrinding){
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    }else{
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
pressGrindBeans();
pressGrindBeans();


let spinWash = false;
const turnWashingMachineOn = () =>{
    if (spinWash){
        console.log("spinWashEnding");
        spinWash = false;
    }else{
        console.log("Spin Wash About to Begin");
        spinWash = true;
    }
}
turnWashingMachineOn();
turnWashingMachineOn();



// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing £${amount} from account ${accnum}`);
// }
// cashWithdrawal (300,accnumber2)
// cashWithdrawal (200,accnumber2)
// cashWithdrawal (100,accnumber2)
// cashWithdrawal (50,accnumber2)
// cashWithdrawal (20,accnumber2)
// cashWithdrawal (10,accnumber2)
// cashWithdrawal (5,accnumber2)



// global variable

// eg:
let accnumber1 = 5043244 
let accnumber2 = 4656346 
let accnumber3 = 3232232 
let accnumber4 = 5021212 
let accnumber5 = 5011313

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing £${amount} from account ${accnum}`);
}

cashWithdrawal (300,accnumber2)
cashWithdrawal (200,accnumber1)
cashWithdrawal (100,accnumber3)
cashWithdrawal (50,accnumber4)
cashWithdrawal (20,accnumber2)
cashWithdrawal (10,accnumber3)
cashWithdrawal (5, accnumber5)


// TRY THIS 
const addUp = (num1, num2) =>{
    return num1 + num2;
}
//  WILL NOT DISPLAY THE ANSWER (NO console.log) 
addUp(2,5);
// THIS WILL DISPLAY THE ANSWER 
console.log(addUp(2,5));


// Functions might call other functions to achieve goal 

// => intended to make syntax less wordy 



// ACIVITY 1 
// TURN BELOW DECLARATION SYNTAX INTO ARROW FUNCTION SYNTAX
// function factorial (n) {
// if ((n === 0) || (n === 1)){
//     return 1;
// } else {
//     return (n * factorial(n-1));
// }
// }
// console.log(factorial(33));
// ARROW FUNCTION ANSWER 
const factorial = (n) => {
if ((n === 0) || (n === 1)){
    return 1;
} else {return (n + factorial(n-1));
}    
}
console.log(factorial(2));


// ACTIVITY 2
// EDIT THE BELOW SYNTAX TO INCLUDE TWO PARAMETERS AND A RUNNING ORDER COUNT UPDATED WHEN THE FUCNTION IS CALLED;
// let orderCount = 0;
// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// } 
// takeOrder("pineapple");

// ANSWER BELOW
let orderCount = 0;
const takeOrder = (topping, extras) => {
    console.log(`Pizza with ${topping}, and extra ${extras}, new order count ${orderCount+1}`);
    orderCount++;
} 
takeOrder("pineapple", "fries");
takeOrder("extra cheese", "onion rings");
takeOrder("olives", "halloumi fries");
takeOrder("pineapple", "fries");
takeOrder("extra cheese", "onion rings");
takeOrder("olives", "halloumi fries");
takeOrder("pineapple", "fries");
takeOrder("extra cheese", "onion rings");
takeOrder("olives", "halloumi fries");


// ACITIVITY 3
// CASH MACHINE TIME!


const cashMachine = (amount, pin) => {
    let balance = 5000;
    let correctPin = 1234;
const checkBalance = ()=>{
    if (amount <= balance) {
        return true;
    } else{
        return false;
    }
};
let avaiableFunds = checkBalance();
const checkPin = () =>{
if (pin == correctPin ){
    return true;
}else{
    return false;
}
};
let isCorrectPin = checkPin();
const cashWithdrawal = () =>{
    if(avaiableFunds == true && isCorrectPin == true){
        balance -= amount;
        console.log(`
        Here is your £${amount}, your remaining balance is £${balance}
        `);
    }else if (avaiableFunds == true && isCorrectPin == false){
        console.log ("Incorrect Pin, please try again!");
    } else if (avaiableFunds == false && isCorrectPin == true){
        console.log ("Insufficient funds, try a smaller amount.");
    }else {
        console.log ("Incorrect Pin, please try againn!");
    }
};
    checkBalance();
    checkPin();
    cashWithdrawal();
  };
cashMachine(4000, 1234)
cashMachine(4000, 1234)

// Cash Machine Function Challenge
// 





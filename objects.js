// LEARNING OBJECTIVES 
// OOP 

// introducing Objects
// key value pairs to store data 
///////////////////////////////////////////////////////////////////

// let offer ="none"
// let time = 2000
// const cafe = {                                //create variable called cafe. The {} determines that this is an object not variable or array
// name: "Gorman",                            //name, seatingCapacity, hasSpecialOffers and drinks are all keys
// seatingCapacity: 100,
// hasSpecialOffers:true,
// drinks: [
//     "Cappuccino",
//     "Latte",                                    //keys and values are separated by colon.
//     "Filter Coffee",
//     "Tea",
//     "Hot Chocolate"                                //key:value
// ],
// breakfastOffer: "Free croissant with coffee",
// lunchOffer: "Free drink with surprisingly priced sandwich",
// noOffer: "Sorry No Offer",

// FUNCTIONS WITHIN OBJECTS
// openCafe: ()=>{
//     return "Come on in";
// },
// closeCafe:()=>{
//     return "we are closed, come back tomorrow!"
// }
// };

// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());


// IN ES6 
// openCafe(){
//     return "Come on in";
// },
// closeCafe(){
//     return "we are closed, come back tomorrow!"
// }
// };
// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(offer);
// }else if (time<1500){
//     offer = cafe.lunchOffer;
//     console.log(offer);
// }else {
//     offer = cafe.noOffer;
//     console.log(offer);
// }
////////////////////////////////////////////////////////////////////

// PUSHING FUNCTIONS FURTHER

let offer ="none"
let time = 2000
const cafe = {                                //create variable called cafe. The {} determines that this is an object not variable or array
name: "Gorman",                            //name, seatingCapacity, hasSpecialOffers and drinks are all keys
seatingCapacity: 100,
hasSpecialOffers:true,
drinks: [
    "Cappuccino",
    "Latte",                                    //keys and values are separated by colon.
    "Filter Coffee",
    "Tea",
    "Hot Chocolate"                                //key:value
],
breakfastOffer: "Free croissant with coffee",
lunchOffer: "Free drink with surprisingly priced sandwich",
noOffer: "Sorry No Offer",
    openCafe(){
        if (this.hasSpecialOffers){                     //as 'hasSpecialOffers' is actually outside of the functions scope, 
            return "Time for a special offer!";         //we need to tell 'openCafe' WHERE 'hasSpecialOffers' 
        }                                               //we do thus using 'this.' as keyword
    },                                                     // 'this.' means this current object
    closeCafe(){
        return "We are closed, come back tomorrow!";
    }
};
console.log(cafe.openCafe())




///////////////////////////////////////////////////////////////////

let day = "Sunday"
const alarm = {
    weekendAlarm: "No Alarm Needed",
    weekdayAlarm: "get up at 7am",
}
if (day == "Saturday" || day == "Sunday"){
    console.log(alarm.weekendAlarm);  
}else {
    console.log(alarm.weekdayAlarm);
}


///////////////////////////////////////////////////////////////////
// const person = {
//     firstName: "Dylan",
//     lastName: "Gorman",
//     age : 41,
//     isMale: true,
//     favDrinks: [
//         "Coffee",
//         "IPA",
//         "Coke",
//     ],
//     favSongs: [
//         "The rat" ,
//         "Black",
//         "Hide and Seek",
//     ],
    
// };
// console.log(person)
// console.log(person.favSongs)

///////////////////////////////////////////////////////////////////
// ACTIVITY 1
const person = {
    firstName: "Dylan",
    lastName: "Gorman",
    age : 41,
    isMale: true,
    favDrinks: [
        "Coffee",
        "IPA",
        "Coke",
    ],
    favSongs: [
        "The rat" ,
        "Black",
        "Hide and Seek",
    ],
    sayHi(){
        if (this.firstName){                     
            return `Hello my name is ${this.firstName}`        
        }                                               
    } 
};
// console.log(person)
// console.log(person.favSongs)
console.log(person.sayHi())

// ACTIVITY 2

const pet = {
    name: "Bluey",
    typeOfPet: "Huskie Dog",
    age: 1,
    colour: "Black/White",
    eat(){
        if (this.name){
            return `${this.name} is eating.`
        }
    },
    drink() {
        if (this.name){
            return `${this.name} is drinking.`
        }
    }
};
console.log(pet.eat())
console.log(pet.drink())


// ACTIVITY 3
const coffeeShop = {
    branch: "Allerton Rd, Liverpool",
    drinks: [
        "Cortado", 
        "Flat White",
        "Americano", 
        "Filter Coffee",
        "Tea",  
    ],
    drinksPrices: {
        Cortado: 2.99,
        FlatWhite: 2.75, 
        Americano: 2.50,
        FilterCoffee: 1.50, 
        Tea: 1.50, 
    },
    food: [
        "2 slices Plain Toast(with butter)",
        "Eggs on Toast",  
        "Eggs and Beans on Toast",
        "Vegan Sausage Roll",
        "Hummus and Bread",
    ],
    foodPrices:{
        slicesOfToast :1.50, 
        eggsOnToast: 2.50, 
        eggsAndBeansOnToast: 3.50,
        veganSausageRoll: 2.99, 
        hummusAndBread: 3.75,
    },
order ( food,drink, price1,price2){
    return ` You ordered ${food} and ${drink} and your total is £${price1 + price2} ` 
}
}
let food = coffeeShop.food
let drinks = coffeeShop.drinks
let foodPrices = coffeeShop.foodPrices
let drinksPrices = coffeeShop.drinksPrices
console.log(coffeeShop.order(drinks[1],food[2], drinksPrices.FlatWhite,foodPrices.eggsAndBeansOnToast))
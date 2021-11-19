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
        "Cortado", 2.99, //[0],[1]
        "Flat White", 2.75, // [2], [3]
        "Americano", 2.50, // [4], [5]
        "Filter Coffee", 1.50, // [6], [7]
        "Tea", 1.50, //[8], [9]
        "Sparkling Water", 1.50, // [10], [11]
        "Still Water", 1, // [12]. [13]
        "Apple Juice", 1, // [14], [15]
    ],
    food: [
        "2 slices Plain Toast(with butter)",1.50, // [0], [1]
        "Eggs on Toast", 2.50, //[2], [3]
        "Eggs and Beans on Toast", 3.50, // [4], [5]
        "Vegan Sausage Roll", 2.99, // [6], [7]
        "Hummus and Bread", 3.75, // [8], [9]
    ],
drinksOrdered(){
    this.drinks;
    return `Your drinks order is ${this.drinks[6]}:£${this.drinks[7]} and ${this.drinks[8]}:£${this.drinks[9]} and a ${this.drinks[2]}:£${this.drinks[3]}.`
    },
foodOrdered(){
    this.food;
    return `Your food order is ${this.food[0]}:£${this.food[1]} and ${this.food[8]}:£${this.food[9]}.`
    },
total(){ 
    return `Your total order comes to £ ${this.drinks[7]+ this.drinks[9]+ this.drinks[3]+ this.food[1]+ this.food[9]}`
},
}
console.log(coffeeShop.drinksOrdered())
console.log(coffeeShop.foodOrdered())
console.log(coffeeShop.total())

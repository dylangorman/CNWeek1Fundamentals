// // ARRAYS
// // properties on an array
// // as a list going down
// // let coffeeOrder = [
// //     "Alex - Cortado",
// //     "Ben - Cortado",
// //     "Charlie - Whatever's new"
// // ];
// // console.log(coffeeOrder)
// // console.log (coffeeOrder[2]); //prints the 3rd in the list as [0] is always the first

// // or in a row 
// // let coffeeOrder = ["Alex - Cortado", "Ben - Cortado", "Charlie - Whatever's new"];
// // console.log (coffeeOrder)

// // coffeeOrder[1] = "Ann - Vanilla latte"
// // console.log(coffeeOrder)


// // .lenght() on an array


// // .push method - adds to the end of an array

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];
// coffeeOrder.push("Donna - espresso");
// console.log(coffeeOrder)

// // .pop method - removes the last item from an array
// coffeeOrder.pop();
// console.log(coffeeOrder)

// // no need to add the item in array just .pop() will always remove last item 

// // loads more methods!!!
// // .map()
// // .shift()
// // .unshift()
// // .splice()
// // .unsplice()


// // ACTIVITY 1 
// let favouriteSongs = ["The Rat - The Walkmen", "Oh Superman - Laurie Anderson", "Midlife Crisis - Faith No More"];
// console.log (favouriteSongs)
// favouriteSongs.push ("Black - Pearl Jam", "Hide and Seek - Imogen Heap")
// console.log (favouriteSongs)
// favouriteSongs.pop()
// console.log (favouriteSongs)
// favouriteSongs.shift() //gets rid of the first item in array
// console.log (favouriteSongs)



// // for LOOPS
// // itteration or loops 

// let favDrinks = ["IPA", "flat white", "Sour Beer"];
// console.log(favDrinks[0]);
// console.log(favDrinks[1]);
// console.log(favDrinks[2]);

// // if you had an array with 1000 favDrinks, it would ttake forerver! 
// // use loops so we dont reapet code

// for (let i = 0; i <favDrinks.length; i++){ //.length will always keep the loop within the amount of items in list
//     console.log(favDrinks[i]);
// }
// for (let i = favDrinks.length - 1; i >= 0; i --){
//         console.log (favDrinks[i]);

// }

//         let multipleTwo = [];
//         for (let i = 0; i <=20; i++){
//             if(i% 2== 0){
//                 multipleTwo.push(i);
//             }
//         }

//         console.log(`Numbers divisible by 2 between 0 and 20 are are: ${multipleTwo}`);


//         // while loops 
//         // iteration or loops 
//         let age = 15;
//         while(age <18){
//             console.log("You're a child");
//             age++
//         }
//         console.log("You're an adult")


//         let cards = ["Diamond", "Spade", "Heart", "Club"];
//         let currentCard = "Club";
//         while(currentCard != "Spade"){
//             console.log(currentCard);
//             currentCard = cards[Math.floor(Math.random()*4)];

//         }console.log(currentCard);


// LOOPS ACTIVITIES
        // ACTIVITY 1
let favFilms =  ["Truman Show", "Ghostbusters", "Death Proof"];
console.log(favFilms)
favFilms.push("Requiem for a Dream", "GroundHog Day")
console.log (favFilms);
favFilms.pop();
for (let i = 0; i < favFilms.length; i ++){
            console.log (favFilms[i]);
}


// ACITVITY 2
// const num = [];
// for (let i = 1; i <= 6; i++) 
// num.push(Math.floor(Math.random()*51))
// {
// console.log (num);
// }

// ACTIVITY 3

for (let i = 0; i <=9; i++)
console.log(i)

let i = 10;{
while (i > 0){
        i--;
        console.log(i);
}console.log ("Blast off");
}

// ACTIVITY 4
let films = ["Harry Potter", "Finding Nemo","Ghostbusters", "Jaws"]
for (let i = 0; i <films.length; i++)
        console.log(films[i]);
if (films[2] === "Ghostbusters"){
    console.log (`Yay it's Ghostbusters!`)
} else {
    console.log(`Boo we want Ghostbusters!`)
}

// ACTIVITY 5

let num = Math.floor(Math.random() * 31);
for (let i = 1; i <= 1; i++)
console.log(num)
if (num%7 == 0){
    console.log ("Number divisible by 7")
} else {console.log("Number NOT divisible by 7")}

// ACTIVITY 6
let dylsFollowers = ["Frank","Mac","Dee","Dennis"];
let suzeFollowers = ["Dee","Charile","Dennis","Artemis"];
let mutualFollowers = [];

for(let i = 0; i < dylsFollowers.length ; i++){
for (let j = 0; j < suzeFollowers.length ; j++){
if (dylsFollowers [i]=== suzeFollowers[j]){
mutualFollowers.push(suzeFollowers[j]);
}
}
};
console.log(mutualFollowers);

// ACTIVITY 7

// do while loops 


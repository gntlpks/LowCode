//let myLuckyNumber = 13
//let myName = "Amanda"

//alert(myName+ ":" +myLuckyNumber)

const message = " TASTE THE RAINBOW! ";
let whisper = message.trim().toLowerCase()

//alert(whisper)

let fullName ="Sara Monteiro";
 
let firstN= fullName.slice(0, 5);
 
let lastN= fullName.slice(5, 14);
 //procurar onde vamos fazer o corte
 let cutIndex =fullName.indexOf(" ")

let firstName = fullName.slice(0,cutIndex);
//alert(firstName)

let lastName = fullName.slice(cutIndex+1);
//alert(lastName)

console.log(lastN)

const word = "skateboard"
let corte = word.slice(5);
alert(corte);
let facialHair = corte.replace("o", "e");
alert(facialHair);


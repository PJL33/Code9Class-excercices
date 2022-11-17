let string = "The password has been hidden  by the current endpass";
let stringSplit = string.toLowerCase().split(" ");
let indexHidden = stringSplit.indexOf("hidden");
let indexEndpass = stringSplit.indexOf("endpass");
console.log("Mo ki nan mitan mo hidden ak endpass yo se :",stringSplit.slice(indexHidden + 1,indexEndpass).join(" "));
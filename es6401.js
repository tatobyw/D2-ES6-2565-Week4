//1. Declarating Function
function sayAsign(){
    console.log("Welcome to Thailand");
}
//2. Annonymous Function
//Can be assigned as a value to a variable.
let sayHello = function (){
        console.log("Welcome to Annonymous");
}
//3. 
function addName(callback,name){
    const message = callback();
    console.log(message);
    console.log(name);
}
//Call Function
// sayAsign();
// sayAsign();
addName(sayHello,"Chananthon Thanomngoen");
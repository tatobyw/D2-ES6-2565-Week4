//
function greet(name){
    //inner function
    function disPlayName(){
        console.log(`Hi ${name}`)
    }
    //returning function
    //disPlayName()
    return disPlayName
}
//greet = ("Chananthon")
const g1 = greet('Chananthon')
g1()
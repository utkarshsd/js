
function sayMyName(){
console.log("u");
console.log("t");
console.log("k");
console.log("a");
console.log("r");
console.log("s");
console.log("h");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // console.log("utkarsh")
    // return result
    return number1 + number2
    
}


const result = addTwoNumbers(3, 5)
// console.log("result: ", result);


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return 
        
//     }
//     return `${username} just logged in`
// }
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return 
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("utkarsh"))
// console.log(loginUserMessage("utkarsh"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
 
// console.log(calculateCartPrice(200, 400, 500, 2000));
 
const user = {
    username: "utkarsh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

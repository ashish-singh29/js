//normal function
 

// function function_name(){}
// function declaration
function sayhi(){
    console.log('hi')
}  /// function body


sayhi() //function calling or invokation



//parameter in function

function add(a,b){
    console.log('the addition is',a+b)
}
add(4,5)// arguments in function


function mul (c,d){
    console.log('the multiplication is',c*d)
}
mul(4,5)



function sub(e,f){
    console.log('substraction is',e-f)
}
sub(87,34)

function div(m,n){
    console.log('division is',m/n)
}
div(45,13)

/// function are treated as first class citizen in java script

let sayhello =function(){//anonymous function
    console.log('hello')
}
sayhello()//function expression





// immediately invoked function expression(IIFE)


let substraction=(function(x,y){
    console.log(x-y)
})(45,23)



function sayme(){
    let sayme='i am'
    return sayme
}
var answerfromfunction=sayme()
console.log(answerfromfunction)


function multiply(j,k)
{
    console.log(j*k)
}
multiply(2,4)
multiply(5,8)
multiply(23,56)

//IIFE
let multiplyIIFE=(function(q,r){
console.log(q*r)})
(9,6)































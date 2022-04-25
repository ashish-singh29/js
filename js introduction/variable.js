//variable declaration

// var, let, const

var a;// \variable will always be initialized with undefined value
console.log(a)
//js is dynamically type language
a=3
console.log(a)
a='i am a string'
console.log(a)
a=null
console.log(a)
a=true
console.log(a)

//string
var s='i am string'
var s2='a'
console.log(s)
console.log(s2)
//boolean
var t=true
var f=false
console.log(t)
console.log(f)
//number
var b=4
var n=3.2
var f=29.4333
console.log(b)
console.log(n)
console.log(f)
//null
var n=null
console.log(n)
//undefined
var u;
console.log(u)



//var keywords has some problems

//redeclaration
var b='hello'
console.log(b)

var b='bye'
console.log(b)

// using let
let c='hello'
console.log(c)
//loop

//for loop

//is number is prime

var flag=true

var num=16
for(var i=2; i*i<=num; i++){
    if(num%i==0){
        flag=false
        break
    }
}
if (flag==true){
    console.log('number is prime')
}
else{
    console.log('number is not prime')
}

//2nd problem with var- scoping
if(10%2==0)
{
    var z='number is divided by 2'
    console.log(z)
}
console.log(z)
//var is function scope
// let is block scope


//const keyword
const a=2;
const a;// no  redeclaration is allowed
a='hello'//not reassigning allowed


















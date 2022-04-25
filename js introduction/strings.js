//string is a sequence of multiple character

let string='pepcoders'
console.log(string)

// string length property
console.log(string.length)

// string methods

//1. Extraction method
// slice method
// slice(start,end+1)
//let slicedstr=string.slice(3,7)
let slicedstr=string.slice(0,3)
console.log(slicedstr)

//2. substr method (startingindex,lengthuptotheletter)

let substring=string.substr(3,4)
console.log(substring)

 //replacing string's content

 let sayhello='hello alok'
 console.log(sayhello)  //hello alok
// replace(valuetobereplaced,valuetobereplacedwith)
 let saybye=sayhello.replace('hello','bye')
 console.log(saybye)  //bye alok


//// uppercase method and lowercase
let text1='Hello World'
 text2=text1.toUpperCase()  //string fully uppercase
console.log(text2)

let text3='HELLO WORLD'
text4= text3.toLowerCase()
console.log(text4)


// concatenation (concat method)



let firststring='Hello'
let secondstring='Dhruv'

let concatenatedstr=firststring.concat(' ',secondstring)
console.log(concatenatedstr)


// trim method is used to remove white space


let text='      hello world    '
let trimmedText=text.trim()
console.log(text)
console.log(trimmedText)







































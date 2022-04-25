// array provides you an ordered collection of elements

//let arr=[]//array declaration

let cars=['BMW','MUSTANG','AUDI','MERCEDES'] //same data type
//console.log(cars)

//let testarr=['BMW',2,true,null,undefined,20.34]
//console.log(testarr)



//accessing the element of an array
console.log(cars[3])
console.log(cars[1])
console.log(cars[2])
console.log(cars[0])


// replacing an element in array
cars[2]='jaguar'
console.log(cars)
// add an array element
cars[4]='BENTLEY'
console.log(cars)

cars[7]='lamborgini'
console.log(cars)


//arrays methods


//pop methods- this methods removes the element at last of the array
let removedElement=cars.pop()
console.log(removedElement)
console.log(cars)
 //push methods-to add element to the end of an array
cars.push('Aston Martin')
 cars.push('Land Rover')
 console.log(cars)


//shift and unshift

//shift-this method is used to remove an element from the starting of an array

cars.shift()
console.log(cars)

//unshift -this method is used to add an element at starting of an array

cars.unshift('tata')
console.log(cars)
// length property of an array
console.log(cars.length)  

// 2D array
let matrix=[
   [1,2,3] ,
   [4,5,6],
   [7,8,9],
]
console.log(matrix)
console.log(matrix[0][1])
























    




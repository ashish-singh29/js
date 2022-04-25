// java script objects are always in key value pair

// to declare and object 

let obj={} // this is how you declare an object

let person={
    name:'amit',
    age : 21,
    phone: 8802340284,
    gender:'male'
}

let car ={
    car_name: 'BMW Z300',
    brand: 'BMW',
    max_speed:'300km/hr',
    color:'black',
    price: 10000000
}

// IRON MAN -Avengers

let iron_man={
    firstName:'Robert Dwayne',
    LastName:'junior',
    Friends:['peter','hulk','vision','strange'],
    age:40,
    isAvenger:true,
    adress:{
        state:'Manhatten',
        city:"New York"
    },
    sayHi:function(){
        console.log("Iron Man says hi")
    }
}


iron_man.sayHi()

// dot notation

console.log(iron_man.firstName)
console.log(iron_man.adress)

// bracket notation


console.log(iron_man['isAvenger'])


console.log(iron_man.age)
console.log(iron_man.adress.city)

console.log(iron_man.Friends)
console.log(iron_man.Friends[1])

// for in loop for objects
for(let key in iron_man){
    console.log('key',key,'value',iron_man[key])

}


iron_man.isAvenger=false  // update in object
console.log(iron_man)


iron_man.movies=['ironman 2','civil war','end game'] // add new property in object
console.log(iron_man)



delete iron_man.age
console.log(iron_man) // deleting a property from an object

iron_man.Friends[2]='thor'
iron_man.adress.city='brooklyn'
console.log(iron_man)
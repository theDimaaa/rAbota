let myCar = {
    color: 'orange',
    engine: '2L',
    brand: 'toyota',
    drive: function(){
        console.log('driving')
    },
    park: function(){
        console.log('parking')
    },
    start: function(){
        console.log('starting')
    },
    stop: function(){
        console.log('stopping')
    },
    driver: {
        name: 'Jon',
        lastName: 'Jonov',
        old: '33',
        category: 'A'
    }
}

console.log(myCar) // 4
myCar.driver.name = 'Alexander' // 5
delete myCar.driver.lastName // 7
for(i in myCar.driver){ // 6
    console.log(myCar.driver[i])
}
console.log(myCar.driver) // 8

if('model' in myCar){ // 9
    console.log(myCar)
}else{
    console.log('Отсутствует')
}

for(i in myCar.driver){ // 10
    console.log(myCar.driver[i])
}
for(i in myCar){ // 11
    if(typeof myCar[i] === 'string'){
        console.log(myCar[i])
        console.log(i) // Для себя
    }
}
myCar.driver2 = { // 12
    name: 'Jones',
    category: 'C' 
}
console.log(myCar) // 13

let add = 'driver2' // 14

console.log(myCar[add]) // 15

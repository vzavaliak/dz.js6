//1) Створити масив з 20 чисел та:

let mas = [3,6,1,5,87,65,12,45,90,0,46,17,9,10,51,100,2,25,61,104]
//  a) відсортувати його від меншого до більшого.

let mas1 = mas.sort((a,b)=>{
    if(a < b)
        return a - b
} );
console.log(mas1)


// b) відсортувати його від більшого до меншого.
/*let mas2 = mas.sort((a,b)=>{
    if(a > b)
        return b - a
})
console.log(mas2)*/


//c) Відфілтрувати числа які є кратними 3.
let mas3 = mas.filter((value) => {return value % 3 === 0})
console.log(mas3)

// d) Відфілтрувати числа які є більшими за 10.

let mas4 = mas.filter((value) => {return value > 10})
console.log(mas4)

//e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

let mas5 = mas.forEach(value => {
  document.write(`${value} <br> `)

})

//f) За допомогою map збільшити кожен елемент в масиві в три рази.
let mas6 = mas.map((value, index) => {return value * 3})
console.log(mas6)

//  g) Порахувати загальну суму всіх елментів у масиві (reduce)
let mas7 = mas.reduce((acc, currentValue) => {return acc + currentValue})
console.log(mas7)


//2) Створити масив з 20 стрічок та:

let str = ['nike','puma','adidas','reabook','google','apple','amazon','samsung','zara','mqween',
    'columbia','eldorado','nokia','eco','barcelona','madrid','ocean','father','macbook','lviv']
//  a) Відсортувати його в алфавітному порядку
let str1 = str.sort((a,b) =>{
    if(a > b ) {
        return 1
    }return -1
})
console.log(str1)
//  b) Відсортувати в зворотньому порядку
let str2 = str.sort((a,b) =>{
    if(a < b ) {
        return 1
    }return -1
})
console.log(str2)
//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let str3 = str.filter((v) =>{return v.length > 4})
console.log(str3)
//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

let str4 = str.map(value => { return `Sam says ${value}`})
console.log(str4)

//3) Все робити тільки за допомогою методів масивів!
// Дано масив :
 const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
 ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)


/*let users1 = users.sort((a,b)=>{
    if(a.age > b.age){
        return 1
    }return  -1
})
console.log(users1)*/

/*let users2 = users.sort((a,b)=>{
    if(a.age < b.age){
        return 1
    }return  -1
})
console.log(users2)*/


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)


/*let users3 = users.sort((a,b)=>{
    if(a.name.length > b.name.length){
        return 1
    }return -1
})
console.log(users3)*/

/*let users4 = users.sort((a,b)=>{
    if(a.name.length < b.name.length){
        return 1
    }return -1
})
console.log(users4)*/


// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)
// d) відсортувати його за індентифікатором

let users5 = users.map((x,i ) => {
    x.id = i + 1

    return x
})
console.log(users5)


// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

/*

let users7 = users.reduce((acc, value) =>{
  if(value.isMarried === true){
      value.house = true;

      acc.push(value)
  }
  return acc

},[])
console.log(users7)*/


const cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204x",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];

//Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

let cars1 = cars.filter(value =>{ return value.volume > 3})
console.log(cars1)

//- двигун = 2л

let cars2 = cars.filter(value =>{return value.volume === 2})
console.log(cars2)

//- виробник мерс

let mers = cars.filter(value => {return value.producer === 'mercedes' })
console.log(mers)

//- двигун більше 3х літрів + виробник мерседес

let cars3 = cars.filter(value => {return value.volume > 3 && value.producer === 'mercedes' } )
console.log(cars3)

//- двигун більше 3х літрів + виробник субару

let cars4 = cars.filter(value => {return value.volume > 3 && value.producer === 'subaru' } )
console.log(cars4)

//- сили більше ніж 300

let power = cars.filter(value => {return  value.power > 300})
console.log(power)


//- сили більше ніж 300 + виробник субару

let cars5 = cars.filter(value => {return value.power > 300 && value.producer === 'subaru' } )
console.log(cars5)

//- мотор серіі ej
let motor = cars.filter(m => { return m.engine === 'ej20' ||  m.engine === 'ej204x' })
console.log(motor)


//- сили більше ніж 300 + виробник субару + мотор серіі ej

let cars6 = cars.filter(value => {
    return value.power > 300 && value.producer === 'subaru' && value.engine === 'ej20' &&  value.engine === 'ej204x'
} )
console.log(cars6)

//- двигун меньше 3х літрів + виробник мерседес

let enjM = cars.filter(value =>{return value.volume < 3 && value.producer === 'mercedes' })
console.log(enjM)

//- двигун більше 2л + сили більше 250

let enjPower = cars.filter( value =>{return value.volume > 2 && value.power > 250 })
console.log(enjPower)

//- сили більше 250  + виробник бмв

let powerBMW = cars.filter(value => {return value.power >250 && value.producer === 'bmw' })
console.log(powerBMW)



const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];


//-- Відсортувати їх по ID

let userID = usersWithAddress.sort((a,b)=>{return a.id - b.id})
console.log(userID)

// -- Відсортувати їх по ID в зворотньому порядку

/*
let userID2 = usersWithAddress.sort((a,b)=>{return b.id - a.id})
console.log(userID2)
*/

// -- Відсортувати по віку

/*
let userAge = usersWithAddress.sort((a,b)=>{return a.age - b.age})
console.log(userAge)
*/

// -- Відсортувати по віку в зворотньому порядку

let userAge1 = usersWithAddress.sort((a,b)=>{return b.age - a.age})
console.log(userAge1)

// -- Відсорутвати по імені

let userName =users.sort((a, b)=>{
    if(a.name < b.name){
        return 1
    }return  -1
})
console.log(userName)

// -- Відсорутвати по назві вулиці
let streetName = usersWithAddress.sort((a, b) => {
    if(a.address.street > b.address.street){
        return 1
    }return  -1
})

console.log(streetName)

// -- Відсорутвати по номеру будинку

let numberHouse = usersWithAddress.sort((a, b) => {return a.address.number - b.address.number})
console.log(numberHouse)


//-- Залигити тільки тих, хто молодший ніж 30 (filter)
let filter = usersWithAddress.filter(value => { return value.age < 30})
console.log(filter)
// -- Залишити тільки одружених
let married = usersWithAddress.filter(value => {return value.isMarried === true})
console.log(married)
// -- Залишити тільки одружених, які молодні за 30
let married30 = usersWithAddress.filter(value => {return value.isMarried === true &&value.age < 30})
console.log(married30)
// -- Залишити лише тих, в кого парні номери будинків.
let number2 = usersWithAddress.filter(value => {return value.address.number % 2 === 0})
console.log(number2)

// -- Порахувати загальний вік всіх людей. (reduce)
let maxAge = usersWithAddress.reduce((acc, currentValue) => {
    return acc + currentValue.age
},0)
console.log(maxAge)
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
let children = usersWithAddress.reduce((acc, currentValue) =>{
    if(currentValue.isMarried === true && currentValue.age > 30){
        currentValue.children = true;
        acc.push(currentValue)
    } return acc;
},[] )
console.log(children)
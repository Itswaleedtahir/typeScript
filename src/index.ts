let age : number = 20;
if (age<40)
    age += 10;
console.log(age);

let sale = 123_345_34;
let course = "Typescript";
let isPublished = true;

//any type
// let level;
// function render(level: any){
//     console.log(level);
// }

//arrays
let numbers: number[] = [1,2,3,4]
numbers.forEach(n => n.toFixed);

//tuples
let user: [number, string]= [1,'waleed'];
//tuples is having fixed length but with push compiler is not throwing any exceptions hopefully they will resolve it.
user.push(1);

//ENUM
const small = 1;
const medium = 2;
const large = 3;

enum size {small = 1 , medium , large};
let mySize = size.medium;
console.log(mySize);


//Functions

function tax(income: number , taxYear = 2020): number {
    if(taxYear < 2022)
        console.log( income*1.3);
   return income*1.2;
}

tax(20000);

//OBJECTS
let employee : {
    readonly id : number,
    name: string,
    retire : (date: Date) => void
}={
    id: 1,
    name: 'Waleed',
    retire: (date: Date)=>{
        console.log(date);
    }
}

//Type Alias
type Employee = {
    readonly id : number,
    name: string,
    retire : (date: Date) => void
}

let emplyee: Employee = {
    id: 1,
    name: 'Waleed',
    retire: (date: Date)=>{
        console.log(date);
    }
}

//UNION TYPE

function kgtolbs(weight: number | string): number {
    //Narrowing
    if(typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;    
    
}

kgtolbs(10);
kgtolbs('10');

//intersection type
type Draggable = {
    Drag: ()=> void
};
type Resizable = {
    Resize: ()=> void
};
type UTWidget = Draggable & Resizable;

let textBox : UTWidget= {
    Drag: ()=> {},
    Resize : ()=> {}
}

//Literal types
type Quantity = 50 | 100;
let quantity : Quantity = 100;

type Metric = 'cm' | 'meter'

//Nullable type
function greet(name: string | null | undefined){
    if(name)
        console.log(name);
    else
        console.log('Hola!')
}

greet(undefined)

//Optional Type
type customer = {
    birthday: Date
};

function getCustomer(id: number): customer | null | undefined {
    return id=== 0 ? null : { birthday: new Date()};
}
let customer = getCustomer(1);
//Optional Type
console.log(customer?.birthday);
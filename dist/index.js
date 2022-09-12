"use strict";
let age = 20;
if (age < 40)
    age += 10;
console.log(age);
let sale = 12334534;
let course = "Typescript";
let isPublished = true;
let numbers = [1, 2, 3, 4];
numbers.forEach(n => n.toFixed);
let user = [1, 'waleed'];
user.push(1);
const small = 1;
const medium = 2;
const large = 3;
var size;
(function (size) {
    size[size["small"] = 1] = "small";
    size[size["medium"] = 2] = "medium";
    size[size["large"] = 3] = "large";
})(size || (size = {}));
;
let mySize = size.medium;
console.log(mySize);
function tax(income, taxYear = 2020) {
    if (taxYear < 2022)
        console.log(income * 1.3);
    return income * 1.2;
}
tax(20000);
let employee = {
    id: 1,
    name: 'Waleed',
    retire: (date) => {
        console.log(date);
    }
};
let emplyee = {
    id: 1,
    name: 'Waleed',
    retire: (date) => {
        console.log(date);
    }
};
function kgtolbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgtolbs(10);
kgtolbs('10');
let textBox = {
    Drag: () => { },
    Resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name);
    else
        console.log('Hola!');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map
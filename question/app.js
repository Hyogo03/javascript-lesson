// Q1
const nickname = 'ひょうご';
const age = 25;

console.log('私のニックネームは'+nickname+'です。年齢は'+age+'歳です。')

// Q2
let languages = ['JavaScript','PHP','Ruby','Python','Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// Q3
let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
};
console.log(user.age);

// Q4
let playerList = [
    {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
    },
];

console.log(playerList[1].favorites[1]);

// Q5

let totalAge = 0;
for (let i = 0; i < playerList.length; i++) {
    totalAge += playerList[i].age;
}
const averageAge = totalAge / playerList.length;
console.log(averageAge);


// Q6
function sayHello() {
    console.log('Hello');
}
sayHello();

const sayWorld = function() {
    console.log('World');
}
sayWorld();

// Q7
user.birthday = '2000-09-27';
user.sayHello = function() {
    console.log('Hello!');
};
user.sayHello();

// Q8
let calc = {};

calc.add = function(x, y) {
    console.log(x + y);
};
calc.subtract = function(x, y) {
    console.log(x - y);
};
calc.multiply = function(x, y) {
    console.log(x * y);
};
calc.divide = function(x, y) {
    console.log(x / y);
};
calc.add(4, 3);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(25, 5);

// Q9
function remainder(x, y) {
    return x % y;
}
const RemainderValue = remainder(5, 3);
console.log(`5 を 3 で割った余りは ${RemainderValue} です。`);

// Q10
// function foo() {
//     let x = 1;
// }
// console.log(x);

//foo関数の内部で宣言された変数(x)はローカル変数となり、関数の外部からは参照できないため、エラーが発生する。


// 応用編
// Q1
let random = Math.floor(Math.random() * 10);
console.log(random);

// Q2
let Alert = function() {
    console.log('Hello World!');
}
setTimeout(Alert, 3000);

// Q3
let num = 5;

if (num > 0) {
    console.log('num is greater than 0');
} else if (num < 0) {
    console.log('num is less than 0');
} else if (num == 0) {
    console.log('num is 0');
}

// Q4
let numbers = [];

for (let i = 0; i < 100; i++) {
    numbers.push(i);
}
console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
    const element = mixed[i];
    
    if (typeof element === 'number') {
        if (element % 2 == 0) {
            console.log(element+' even');
        } else {
            console.log(element+' odd');
        }
    }else {
        console.log(element+' not a number');
    }
}

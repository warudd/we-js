//Exercise1
const number = [10,11];
if(number[0] < number[1]){
    console.log(number[1]);
}
else if (number[0] > number[1]){
    console.log(number[0]);
}
else {
    console.log('value equal');
}
//Exercise2
const input1 = 3;
const input2 = -7;
const input3 = 222;
const totalInput = (input1*input2*input3);

if (String(totalInput).includes('.') && String(totalInput).includes('-')){
    console.log('The sign is . , -');
}
else if (String(totalInput).includes('.')){
    console.log('The sign is .');
}
else if (String(totalInput).includes('-')){
    console.log('The sign is -');
}
//Exercise3
// console.log(arrEx3.sort((a , z) => z - a));
const a = -1;
const b = 0;
const c = 4;
if (a>b && a>c){
    if(b>c){
        console.log(`${a} ${b} ${c}`);
    }
    else if (b<c){
        console.log(`${a} ${c} ${b}`);
    }
}
else if (b>c && b>a) {
    if(a>c){
        console.log(`${b} ${a} ${c}`);
    }
    else if (a<c){
        console.log(`${b} ${c} ${a}`);
    }
}
else if (c>b && c>a){
    if(b>a){
        console.log(`${c} ${b} ${a}`);
    }
    else if (b<a){
        console.log(`${c} ${a} ${b}`);
    }
}

//Exercise 4
// ex3.sort((a , z) => z - a));
const num1 = -5;
const num2 = -2;
const num3 = -6;
const num4 = 0;
const num5 = -1;

if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5){
    console.log(num1);
}
else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5){
    console.log(num2);
}
else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5){
    console.log(num3);
}
else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5){
    console.log(num4);
}
else if (num5 >= num1 && num5 >= num2 && num5 >= num3 && num5 >= num4){
    console.log(num5);
}

//Exercise 5
for (let index = 0; index <= 15; index++) {
    if(index % 2 == 0){
        console.log(`${index} is even`);
    }
    else{
        console.log(`${index} is odd`);
    }
}

//Exercise 6
let star = ''
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 1; j++) {
        star += '*';
    }
    console.log(star);
}

//Exercise 7
var sumEx7 = 0;
for (var i = 0; i < 1000; i++)
{
    if (i % 3 === 0 || i % 5 === 0)
    {
       sumEx7 += i;
    }
}
console.log(sumEx7);

//Exercise 8
let student = {David: 80, Vinoth: 77, Divya: 88, Ishitha: 95, Thomas:68};
let sumScore = 0;
for (const score in student) {
    sumScore += student[score];
}
let nStudent = Object.keys(student).length; //คำสั่งเพื่อนับจำนวนใน obj
let avg = sumScore/nStudent;
for (const s in student) {
    if(student[s] < 60)
        console.log(`${s} you grade F`);
    else if (student[s] < 70){
        console.log(`${s} you grade D`);
    }
    else if (student[s] < 80){
        console.log(`${s} you grade C`);
    }
    else if (student[s] < 90){
        console.log(`${s} you grade B, (avg is ${avg})`);
    }
    else if (student[s] < 100){
        console.log(`${s} you grade A, (avg is ${avg})`);
    }
}
//Basic JS
console.log('------------Basic-JS------------');
//Q1
let dateNow = new Date();
let day = dateNow.getDay();
const dayInWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log(`Today is : ${dayInWeek[day]}.`);

let hour = dateNow.getHours();
let minute = dateNow.getMinutes();
let second = dateNow.getSeconds();

let midDay = ''
if (hour >= 12) {
    midDay = 'PM'
    hour = hour - 12
}
else {
    midDay = 'AM'
}
console.log(`${hour}${midDay} : ${minute} : ${second}`);

console.log('------------------------');

//Q2
let conVertDate = new Date(new Date().getTime()+(3600*1000*7)).toISOString()
let splitDate = conVertDate.split('T')[0]
let splitSign = splitDate.split('-')
let arrDate = [];

for (let i = 0; i < splitSign.length; i++) {
    if (i === 0) {
        arrDate.push(splitSign[i])
    }
    if (i = 1) {
        arrDate.unshift(splitSign[i])
    }
    if (i = 2){
        arrDate.splice(1,0,splitSign[i])
    }
}
let answer1 = arrDate.join('-')
let answer2 = arrDate.join('/')
console.log(`${answer1}, ${answer2}`);

console.log('------------------------');

//Q3
for (let year = 2014; year <= 2050; year++){
    let dayInYear = new Date(year,0,1); //สร้างปี 2014 ,เดือน JAN คือ 0, วันที่ 1    
    if (dayInYear.getDay() === 0) { //ถ้าเท่ากับ 0 หมายความว่าวันที่ 1 เดือน JAN ตรงกับวันอาทิตย์ (getDay() วันอาทิิตย์-วันเสาร์ 0-7)
        console.log(`1st January is being a Sunday ${year}`);
    }
}

//Function
console.log('------------Function------------');
//Q1
function reVerseNumber(x) {
    let input = String(x).split('');
        input.reverse()
    for (let i = 0; i < input.length; i++) { //เช็คค่าติดลบ
        if (input[i] === '-') {
            input.splice(i,1)
            input.unshift('-')
        }
    }
    return input.join('')
}
console.log(reVerseNumber(32243));

console.log('------------------------');

//Question11
console.log('#Question11');
const inputQ11 = [2,4,5,6,1,0,8];
let min = inputQ11[0];
let max = inputQ11[0];

inputQ11.forEach(num => {
    if(num < min){
        min = num
    }
    else if (num > max){
        max = num
    }
});
console.log('min -> ',min);
console.log('max -> ',max);

//Question12
console.log('#Question12');
const inputQ12 = 25;
const isPrimeNumber = (num) =>{
    let isPrime = true;
    for (let i = 2; i < num; i++) { //เริ่มที่ 2 เพราะ 1 กับเลข input หารลงตัว (loop 2 - input)
        if (num % i == 0) { //เช็คเพื่อให้รู้ว่าเป็นจำนวนเฉพาะไหม ถ้า mod = 0 คือไม่เป็นจำนวนเฉพาะเพราะหารแล้วลงตัว
            isPrime = false;
            break
        }
    }
    return isPrime
}

for (let i = 1; i <= inputQ12; i++) { //
    if (isPrimeNumber(i)) { //ถ้าเป็น true คือ mod ไม่ลงตัว = เป็นจำนวนเฉพาะจะพิมพ์
        console.log(i);
    }
}

//Question13
console.log('#Question13');
//วาง phone ไว้เฉยๆ 3 min, กิินแบต 0.2/min, call 1 min, โทรออกแบตลดลง 5 เท่า
//(3*0.2)+(1*(0.2*5)) = วางเฉยๆ 3min + call 1 min = กินแบต 1.6%
//battery 1.6% => 4 min
//battery 1% => 4/1.6
//battery 89% => 4/1.6 * 89 = ระยะเวลาที่มือถือแบตหมด
function batteryTimeCalculator(
    percentBattery, // %แบตตั้งต้น
    standbyTimeDuration, // เวลาที่วางไว้เฉยๆ
    callTimeDuration, // เวลาที่โทรออก
    standbyBatteryRate, //แบตเตอรี่ถูกกินไปต่อนาที
    callBatteryRate){
    let batteryReduceWhenStandby = standbyTimeDuration * standbyBatteryRate //เวลาในการที่วาง phone ไว้เฉยๆ * เวลาที่กินแบตต่อนาที = แบตเตอรี่ลดในการวางเฉยๆ
    let batteryReduceWhenCall = callTimeDuration * callBatteryRate //เวลาที่โทรออก * เวลาที่กินแบตเป็นเท่าเมื่อโทรออก = แบตเตอรี่ลดในการโทรออก
    let batteryReducePerRound = batteryReduceWhenStandby + batteryReduceWhenCall //แบตจะลดใน 1 รอบเท่าไหร่
    let time = (((standbyTimeDuration + callTimeDuration) / batteryReducePerRound) * percentBattery)//เวลาที่ใช้ของ phone นี้จนแบตหมด
    return time
}
const timeToUsePhone1 = batteryTimeCalculator(89,3,1,0.2,0.2 * 5)
const timeToUsePhone2 = batteryTimeCalculator(49,5,1,0.4,0.4 * 2)
console.log(timeToUsePhone1 , timeToUsePhone2);

//Question14
console.log('#Question14');
function isLowerCase(str) { //ค่าที่รับเข้ามา A เอา A.lowercase === A จะเป็น false) เท่ากับจะรู้ได้ว่าค่าที่รับเข้ามามันไม่ใช่พิมเล็ก
    return str.toLowerCase() === str; //true or false
}
function isUpperCase(str) {
    return str.toUpperCase() === str;
}

const inputQ14 = 'AC';
let haveCapitalLetter = false; //flag
let haveSmallLetter = false;

inputQ14.split('').forEach(letter => { //แปลงให้ input เป็น array วนเช็คค่า input ทีละตัวไปเทียบกับฟังก์ชัน
    if (isLowerCase(letter)) { //ถ้า letter เป็นพิมเล็ก
        haveSmallLetter = true;
    }
    if (isUpperCase(letter)){
        haveCapitalLetter = true;
    }
});

if(haveSmallLetter && haveCapitalLetter){ //ถ้าเป็น true ทั้งคู่หมายความว่ามีผสมกันเพราะวนทีละตัวเช็คแล้วเป็น true ทั้งคู่
    console.log('Mix');
}else{
    if (haveSmallLetter) {
        console.log('All Small letter');
    }
    if (haveCapitalLetter) {
        console.log('All Capital letter');
    }
}

//Question15
console.log('#Question15');
const inputQ15 = 'zepelepenapa'; //ถอดรหัสถ้าเป็นสระ eng จะเติม p และสระตัวเดิมอีกครั้ง (zelena)
let newStringQ15 = '';

for (let iQ15 = 0; iQ15 < inputQ15.length;) { //update ค่า loop ไปใส่ใน if else แทน
    const charQ15 = inputQ15[iQ15]; //ได้ตัวอักษรทีละตัว
    if (['a','e','i','o','u'].includes(charQ15)) { //ถ้าตัวอักษรตัวไหนอยู่ใน array ชุดนี้ จะเป็น true 
        newStringQ15 += charQ15; //newStringQ15 = newStringQ15 + charQ15
        iQ15 += 3 //เพราะจะต้องข้ามอีก2ตัวที่เป็นการเข้ารหัสมา ze ข้าม pe ไปทำ l ต่อ
    }
    else{
        newStringQ15 += charQ15; //newStringQ15 = newStringQ15 + charQ15
        iQ15 += 1 //จุดวนเพิ่มขึ้นใน for ใส่ตรงนี้แทน
    }   
}
console.log(newStringQ15);

//Question16
console.log('#Question16');
const inputQ16 = 23;
let count1Q16 = 0;
let count2Q16 = 0;
//สูตรคูณหาเศษไม่ใช้ mod
for(let i = 0; i <= inputQ16;i=i+3){ //เลขเพิ่มขึ้นทีละ 3 
    count1Q16++ //จำนวนครั้ง
}
for(let i = 0; i <= inputQ16;i=i+11){
    count2Q16++ 
}
console.log(inputQ16 - (count1Q16-1)*3); //ได้เศษที่เหลือจากการหารไม่ลงตัว
console.log(inputQ16 - (count2Q16-1)*11); 
//function สูตรคูณ
function findRemainder(input,divinder) {
    let countQ16 = 0
    for(let i = 0; i <= input;i=i+divinder){ //เลขเพิ่มขึ้นทีละ 3 
    countQ16++ }//จำนวนครั้ง
    return inputQ16 - (countQ16-1) * divinder
}
console.log(findRemainder(23,3));

//Question17
console.log('#Question17');
const inputQ17 = 5;
let starQ17 = '*'
for(let i = 0; i < inputQ17; i++){
    console.log(starQ17);
    starQ17 += '*'
}

//Question18
console.log('#Question18');
const inputQ18 = 5;

for (let i = inputQ18-1; i >= 0; i--) {
    let starQ18 ='';
    for (let j = 0; j < i; j++) {
        starQ18 += ' '
    }
    for (let k = inputQ18-i; k > 0; k--) {
        starQ18 += '*'
    }
    console.log(starQ18);
}

//Question19
console.log('#Question19');
//05.45
//องศาระหว่างช่อง 30 (12*30 = 360degree)
//30 * 9 = 270 องศา ระหว่างเข็มยาวอยู่ที่เลข 9 (นับองศาจากเลข 12 ถึง 9)
//30 * 5 = 150 องศา ระหว่างเข็มสั้นอยู่ที่เลข 5 (นับองศาจากเลข 12 ถึง 5) 
//30 * 5 = 150 + 22.5 = 172.5 องศา คือระยะองศาระหว่างเลข 12 ถึงเข็มสั้นที่เดินตามเข็มยาว เข็มสั้นก็จะอยู่เกือบ 6 
//270 - 172.5 = 97.5 องศา ในช่วงระยะห่างของเข็มสั้นกับเข็มยาว
//ถ้าเข็มยาวเดิน 60min เข็มสั้นจะเดิิน 30 degree
//ถ้าเข็มยาวเดิน 1min เข็มสั้นจะเดิน 30/60 = 0.5 degree
//ถ้าเข็มยาวเดิน 45min เข็มสั้นจะเดิน 0.5 * 45 = 22.5 degree

const clockDegreeCalculator = (time) =>{
    let splitedTime = time.split(':');
    let hour = splitedTime[0]
    let minute = splitedTime[1]
    let degreeInFiveMinute = 30 
    let degreeInAMinute = 6 //1 นาที 6 องศา เพราะ 5 นาที = 30 องศา (30/5 = 6 degree/1min)
    let degreeOfShortPinInMinute = 0.5 //องศาที่เหลือระหว่างที่เข็มยาวเดินแล้วเข็มสั้นเดินตามใน 1 min

    let longPinDegree = degreeInAMinute * minute //(องศาตั้งแต่เลข 12 ถึงนาทีนั้นๆ)
    let shortPinDegree = (degreeInFiveMinute * hour)+(minute * degreeOfShortPinInMinute) //(องศาตั้งแต่เลข 12 ถึงชั่วโมงนั้นๆ)+(หาองศาเศษที่เหลือ)

    let degree = Math.abs(longPinDegree - shortPinDegree) //absolute ไม่สนใจค่าติดลบ (เอาเครื่องหมายติดลบออก)
    if((360-degree) < degree){ //คิดมุมฝั่งน้อย
        return 360 - degree //องศาวงกลมลบเพื่อหามุมแคบ
    }
    return degree //ไม่เข้า if คือมุมแคบอยู่แล้ว มุมที่น้อยที่สุดไม่เอามุมป้านฝั่งตรงข้ามมุมแคบ
}
console.log(clockDegreeCalculator('09:00'));
console.log(clockDegreeCalculator('05:45'));

//Question20
console.log('#Question20');
//output ผลของการ modulo กับ 42 มีผลการ mod ที่ไม่ซ้ำกันกี่ตัว (ถ้า mod ลงตัวทั้งหมดคือเศษ 0 output = 1ตัว)
const inputQ20 = [42,84,252,420,840,126,42,84,420,126];
//[39,40,41,42,43,44,82,83,84,85] , [1,2,3,4,5,6,7,8,9,10]

let remainder = []; //เก็บเศษจากผล mod
let count = 0;
// let uniqueNumbers = [];
//นำ remainder มาเช็คกับ uniqueNumbers ว่าเศษนั้นถูกเก็บใน uniqueNumbers หรือยังถ้าไม่มี push ถ้ามีแล้ว no push

inputQ20.forEach(num=> {
    const r = num % 42
    if(!remainder.includes(r)) count++ //push ทุกตัวช่างมันไม่ต้องใช้ uniqueNumbers.lenght แต่ใช้ count มาเก็บ lenght แทน
    remainder.push(r)
})
console.log(count);


// remainder.forEach(currentNumber => {
//     if (!uniqueNumbers.includes(currentNumber)) {
//          uniqueNumbers.push(currentNumber)
//      }

// })
// console.log(uniqueNumbers.length);
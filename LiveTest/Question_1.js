//Question1
console.log('#Question1');
//Ans 1
let lastChar = (x) => {
    // console.log(x.substr(9));
    return x.substr(x.length -1);
}
console.log(lastChar('Hello world'));
//Ans 2
function findLastChar(str) {
    let len = str.length
    let indexOfLastChar = len-1
    let ans2 = str[indexOfLastChar]
    return ans2
}
console.log(findLastChar('westride'));

//Question2
console.log('#Question2');
//Ans1
let makeArr = (str) => {
    let initArr = [];
    for (let i = 0; i < str.length; i++) { //Or use 'for of'
        initArr.push(str[i])
    }
    return initArr
}
console.log(makeArr('WeStride'));
//Ans2
function makeArr2(str) {
    return str.split('')
}
console.log(makeArr2('Zoo'));

//Question3
console.log('#Question3');
function pow(x , y) {
    return x ** y;
}
console.log(pow(7,5));

//Question4
console.log('#Question4');
let num = 0;
while (num <= 10) {
    console.log(num);
    num++;
}

//Question5
console.log('#Question5');
for (let i = 10; i >= 0; i--) { // >= true, => infinite loop ? Ask mentor
    console.log(i);
}
//if use while :: num -= 1

//Question6
console.log('#Question6');
function findSpace(str) {
    let splitStr = str.split(' '); //return array
    let strLen = splitStr.length; //['Hello','world']
    let lengthOfSpace = strLen -1; // -1 because 1space/2word, 2space/3word
    return lengthOfSpace
}
console.log(findSpace('Hello world'));

//Question7
console.log('#Question7');
function replaceSpace(str) {
    let replaceStr = str.replaceAll(' ','-')
    return replaceStr
}
console.log(replaceSpace('My name is bob'));

//Question8
console.log('#Question8 :Logical Encrypt:');
let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let ansEnc = [];
function decrypt(str) {
    let splitStrEnc = str.split('') //['x','v','o']
    for (const s of splitStrEnc) {
        if(s != ' '){
            let inputIndex = arr.indexOf(s) 
            let indexAns = inputIndex+5 //ตำแหน่งตัวอักษรที่เป็นคำตอบ
            let ansValue = arr[indexAns] //คำตอบหลังจากถอดรหัส
            if(ansValue){ //หาตัวอักษรเจอโดยที่ไม่เกิน z //or if(indexAns > 25)
                ansEnc.push(ansValue);
            } 
            else {
                let numOfEnd = (arr.length-1) - inputIndex //จำนวนที่เหลือก่อนจะสุดที่ z //26 - 23
                let newLoop = 5-numOfEnd //เริ่มนับใหม่อีกกี่ตัวหลังจากสุดที่ z ถึงจะถึงคำตอบ //3
                let newAns = arr[newLoop-1] //index start 0
                ansEnc.push(newAns)
            }
        }
        else {
            ansEnc.push(s)
        }
    }
    let answer = ansEnc.join('')
    return answer
}
console.log(decrypt('XVO'));

//Question9
console.log('#Question9');
let arrAToZ = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; //จับคู่ตัวอักษร
let ansQ9 = [];

function converter(str) {
    let splitStrQ9 = str.split(''); //['U','R','Y','Y','B',' ','V','A','Q','V','N']
        for (const s of splitStrQ9) {
            if (s != ' ') {
                let indexStr = arrAToZ.indexOf(s) //หาตัวตรงข้ามด้วยการ + or - 13
                let char = '' //เก็บตัวอักษรคู่ตรงข้าม
                if (indexStr <= 12) { // +13 ชุดแถวบน
                    char = arrAToZ[indexStr+13] //หาคู่ตรงข้าม
                }
                else{ //-13 ชุดแถวล่าง
                    char = arrAToZ[indexStr-13] //หาคู่ตรงข้าม
                }
                ansQ9.push(char)
            }
            else {
                ansQ9.push(s)
            }
        }
    return ansQ9.join('');
}
console.log(converter('URYYB VAQVN')); //Hello india

//Question10
console.log('#Question10');
let arrQ10 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let arrAnsQ10 = [];

function encryptQ10(str) {
    let splitedStr = str.split('') //['C','A','T']
    for (const s of splitedStr) {
        let inputIndexQ10 = arrQ10.indexOf(s) //หา 'C' ใน A-Z อยู่ index ที่เท่าไหร่
        let indexAnsQ10 = inputIndexQ10 - 5 //ตำแหน่งของคำตอบ
        let ansValueQ10 = arrQ10[indexAnsQ10]
        if (ansValueQ10) { //ถ้าหาเจอใน arrQ10
            arrAnsQ10.push(ansValueQ10)
        }
        else{ //ถ้าหาไม่เจอใน arrQ10 (index ติดลบ)
            let newLoopQ10 = 5 - (inputIndexQ10) //เหลืออีกกี่ตัวที่จะนับจาก Z ลงไป //(inputIndexQ10+1) เพราะให้รู้เป็นตัวที่เท่าไหร่ ไม่ใช่ index ที่เท่าไหร่
            let indexLastAns = (arrQ10.length)-newLoopQ10 //จำนวนทั้งหมดลบด้วย จำนวนที่จะนับต่อจาก Z ลงไป //เริ่มหา index ที่ถูกต้อง
            arrAnsQ10.push(arrQ10[indexLastAns])
        }
    }
    let answerQ10 = arrAnsQ10.join('');
    return answerQ10
}
console.log(encryptQ10('CAT'));

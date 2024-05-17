//Exercise1
function multiply(x,y) {
    let sum = x*y;
    return sum;
}
sum = multiply(9,9);
console.log(sum);

//Exercise2
function isShortsWeather(temperature) {
    if(temperature >= 75){
        return true
    }
    else{
        return false
    }
}
console.log(isShortsWeather(70));

//Exercise3
function lastElement(arr) {
    let arrSlice = arr.slice(-1);
    if (arr == ''){
        return null
    }
    else return arrSlice
}
console.log(lastElement([1,3,5]));

//Exercise4
function capitalize(str) {
   let strUpper = str[0].toUpperCase() + str.substring(1);
    return strUpper
}
console.log(capitalize('ant'));

//Exercise5
function sumArray(arrEx5) {
    let sum = 0;
    for (let i = 0; i < arrEx5.length; i++) {
        sum += arrEx5[i]
    }
    return sum
}
console.log(sumArray([1,2,3]));

//Exercise6
function returnDay(day) {
    switch (day) {
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        case 7:
            return 'Sunday'
        default:
            return null
    }
}
console.log(returnDay(7));
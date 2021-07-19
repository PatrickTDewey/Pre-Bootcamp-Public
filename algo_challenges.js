
let myArray = [0,-2,8];

function findMax(array){
    let max = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] > max) {
            max = array[index];
        } 
    }
    return max;
}
console.log(findMax(myArray));
console.log(2 > undefined);;

function findAverage(array) {
    let sum = 0, avg = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];        
    }
    avg = (sum / array.length);
    return avg;
}

function oddNumbers() {
    let array = [];
    for (let index = 1; index <= 50; index++) {
        if (index % 2 === 1) {
            array.push(index);
        }
    }
    return array;
}

function greaterY(array, Y) {
    let greaterArray = [];
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] > Y) {
            greaterArray.push(array[index]);    
        }
        
    }
    count += greaterArray.length;
    return count;
}

function squareVal(array) {
    for (let index = 0; index < array.length; index++) {
        array[index] *= array[index];
        
    }
    return array;
}

function negativeToZero(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 0) {
            array[index] = 0;
        }        
    }
    return array;
}

function maxMinAvg(array){
    let newArray = []
    let max = 0, min = 0, sum = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] > max) {
            max = array[index];
        } 
        if (array[index] < min) {
            min = array [index];
        }
        sum += array[index]; 
    }
    sum = sum / array.length;
    newArray.push(max);
    newArray.push(min);
    newArray.push(sum);
    return newArray;
}

function swap(array) {
    let temp = 0;
    temp += array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = temp;
    return array; 
}

function numberToString(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 0) {
            array[index] = 'Dojo';
        }        
    }
    return array;
}

function sum_even() {
    var sum = 0;
    for (let index = 3; index <= 232; index++) {
        if (index % 2 === 0) {
            sum += index;
        }
        
    }
    return sum;
}
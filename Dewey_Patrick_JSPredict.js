function myBirthYearFunc() {
    console.log(`I was born in ` + 1993);
}
myBirthYearFunc(); // --> I was born in 1993

function myBirthYearFunc1(birthYearInput) {
    console.log(`I was born in ` + birthYearInput);
}
myBirthYearFunc1(1993); // --> I was born in 1993

function add(num1,num2){
    console.log(`Summing Numbers!`);
    console.log(`num1 is: ` + num1);
    console.log(`num2 is: ` + num2);
    var sum = num1 + num2;
    console.log(sum);
}

add(2,3) 
/*
Summing Numbers!
num1 is: 2
num2 is: 3
5
*/
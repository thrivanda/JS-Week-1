// for, foreach, while, while do

// 1. addition function
// Arrow function
const addition = (num1, num2) => { 
    return console.log(`hasil dari ${num1} + ${num2} adalah ${num1 + num2}`); 
};
// addition(2, 4);

function penambahan(angkaPertama, angkaKedua, angkaKetiga) {
    return console.log(angkaPertama + angkaKedua * angkaKetiga);
};
// penambahan(10, 5, 2);

// 2. even or odd
const evenOrOdd = (arrayListNumber) => {
    let newValue = Array();
    // looping atau pengulangan
    // for(let i = 0; i < arrayListNumber.length; i++) {
    //     if(arrayListNumber[i] % 2 == 0){
    //         newValue.push('genap');
    //     } else if (arrayListNumber[i] % 2 == 1){
    //         newValue.push('ganjil');
    //     }
    // }

    arrayListNumber.forEach(element => {
        if(element % 2 == 0){
            newValue.push('genap');
        } else if(element % 2 == 1){
            newValue.push('ganjil');
        }
    });
    return console.log(newValue);
}
// evenOrOdd([2,4,91,53,3,18,72]);

// 3. Modulus
const modulus = (number) => {
    let result = number % 2;
    const convertNumberToString = result.toString();
    console.log(`hasil dari modulus 9 % 2 adalah ${convertNumberToString} tipe datanya adalah ${typeof(convertNumberToString)}`);

    return convertNumberToString === '1';
}
// console.log(modulus(9));

// 4. Multiply the array.
const multiplyArray = (arrValue) => {
    // please write your code here
}

const testMultiplyArrayLength = (testCase, expectedValue, value) => {
    for(let i = 0; i < testCase.length; i++){
        if(testCase[i] !== expectedValue[i]){
            console.log(`test case 1: Failed ! expected ${expectedValue[i]} but got ${testCase[i]}`);
        } else if(testCase[i] === expectedValue[i]) {
            console.log(`test case 1: Success ! multiply ${value[i]} is same with ${expectedValue[i]}`);
        }
    }
}
// testMultiplyArrayLength(multiplyArray([1,8,5,'20','7']), [ 1, 64, 25, 400, 49 ], [1,8,5,'20','7']);


// 5. Filter out the odd number
const filterOutTheOddNumber = (numberList) => {
    let result = Array();
    numberList.forEach(element => {
        if(element % 2 === 1) {
            result.push(element);
        }
    });

    return result;
}

// test case 1
const testFilterOutTheOddNumber = (testCase, expectedValue, value) => {
    for(let i = 0; i < testCase.length; i++){
        console.log(testCase[i] !== expectedValue[i] 
        ? `test case 1: Failed! expected ${expectedValue[i]} but got ${testCase[i]}`
        : `test case 1: Success! Passed the test case`);
    }
};

// test case 2
const testFilterOutTheOddNumberLength = (testCase, expectedValue, value) => {
        console.log(testCase.length !== expectedValue.length 
        ? `test case 2: Failed! expected array value length ${expectedValue.length} but got ${testCase.length}`
        : `test case 2: Success! Passed the test case`);
};
testFilterOutTheOddNumber(filterOutTheOddNumber([3,16,89,20,243,890,675]), [3,89,243,675], [3,16,89,20,243,890,675]);
testFilterOutTheOddNumberLength(filterOutTheOddNumber([3,16,89,20,243,890,675]), [3,89,243,675], [3,16,89,20,243,890,675]);
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
    for(let i = 0; i < arrValue.length; i++){
        arrValue[i] *= parseInt(arrValue[i]); 
    }
    return arrValue;
}
// multiplyArray([1,8,5,'20','7']);

const testMultiplyArrayLength = (testCase, expectedValue, value) => {
    for(let i = 0; i < testCase.length; i++){
        if(testCase[i] !== expectedValue[i]){
            console.log(`test case 1: Failed ! expected ${expectedValue} but got ${testCase}`);
        } else if(testCase[i] === expectedValue[i]) {
            console.log(`test case 1: Success ! multiply ${value} is same with ${expectedValue}`);
        }
    }
}

testMultiplyArrayLength(multiplyArray([1,8,5,'20','7']), [ 1, 64, 25, 400, 49 ], [1,8,5,'20','7']);

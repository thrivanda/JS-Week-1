/**
 * Get the highest Score
 * @param {Object[]} arrayStudentList 
 */
 const arrayStudentList = [
    { name: "Angel", score: 70, major: "System information"},
    { name: "Joanne", score: 98, major: "Cyber Security"},
    { name: "Brian McKenzie", score: 90, major: "Robotics"},
    { name: "K", score: 70, major: "System information"},
    { name: "France Kho", score: 68, major: "Cyber Security"},
    { name: "Yeremia", score: 92, major: "Cyber Security"},
]

const highestGrade = (studentList) => {
    let result = [];
    for(let i = 0; i < studentList.length; i++){
        if(studentList[i].major === 'Cyber Security' && studentList[i].score >= 90) {
            result.push(studentList[i]);
        }
    }

    return result;
};

// test case for Highest Grade
const testCaseGetHighestGrade = (testValue, expectedValue) => {
    for(let i = 0; i < testValue.length; i++) {
        console.log(testValue[i].name === expectedValue[i].name  && testValue[i].major === expectedValue[i].major  ? 'Get Highest Grade: Success!' : 'Get Highest Grade: Failed!');
    }
}

// testCaseGetHighestGrade(highestGrade(arrayStudentList), [ { name: 'Joanne', score: 98, major: 'Cyber Security' },
// { name: 'Yeremia', score: 92, major: 'Cyber Security' } ]);


/**
 *  Shopping Cart - Sum the value if the value is same
 * @param {Object[]} val  
 */
const shoppingCart = (val) => {
    const sortVal = val.sort();
    let newObj = {};
    let count = 0;

    for(let i = 0; i < sortVal.length; i++){
        console.log(newObj[sortVal[i]]);
        if(newObj[sortVal[i]] == newObj[sortVal[i]]){
            newObj[sortVal[i]] = count++;
        } else {
            newObj[sortVal[i]] = 1;
        }
    }
    console.log(newObj);
}

console.log(shoppingCart(['coffe', 'egg', 'milk', 'egg', 'cookingOil', 'egg']));

// test case for Shopping Cart
const testShoppingCart = (testValue, expectedValue) => {
   return console.log(JSON.stringify(testValue) === JSON.stringify(expectedValue) ? 'Shopping Cart: Success!' : 'Shopping Cart: Failed!');
};

// testShoppingCart(shoppingCart(['coffe', 'egg', 'milk', 'egg', 'cookingOil', 'egg']), { coffe: 1, egg: 3, milk: 1, cookingOil: 1 });
// testShoppingCart(shoppingCart(['chocolate', 'noodles', 'chocolate']), { chocolate: 2, noodles: 1 });


/**
 * Capitalize Words - make every first letter word to capital
 * @param {*} arrWords 
 */
const capitalizeWords = (strVal) => {
    // please write your solution here
}

// test case for Capitalize Words
const testCapitalizeWords = (testValue, expectedValue) => {
    return console.log(testValue === expectedValue ? 'Capitalize Words: Success!' : 'Capitalize Words: Failed!');
 };
 
// testCapitalizeWords(capitalizeWords('hElLO wORLd!'), 'Hello World!');
// testCapitalizeWords(capitalizeWords('the qUick BroWn Fox'), 'The Quick Brown Fox');

const convertIntToStr = (arrVal) => {
    // please write your solution here
}

// test case for Convert Integer to String
const testConvertIntToStr = (testValue, expectedValue) => {
    for(let i = 0; i < testValue.length; i++) {
        console.log(testValue[i] === expectedValue[i] ? 'Convert Integer to String: Success!' : 'Convert Integer to String: Failed!');
    }  
};
 
// testConvertIntToStr(convertIntToStr([1, 4, 9]), [ '1', '4', '9' ]);
// testConvertIntToStr(convertIntToStr([3, 1, 19, 65]), [ '3', '1', '19', '65' ]);
/**
 * Get the highest Score
 * @param {Object[]} arrayStudentList 
 */
const highestGrade = (arrayStudentList) => {
    // please write your solution here
};

const arrayStudentList = [
    { name: "Angel", score: 70, major: "System information"},
    { name: "Joanne", score: 98, major: "Cyber Security"},
    { name: "Brian McKenzie", score: 90, major: "Robotics"},
    { name: "K", score: 70, major: "System information"},
    { name: "France Kho", score: 68, major: "Cyber Security"},
    { name: "Yeremia", score: 92, major: "Cyber Security"},
]

// test case 
const testCaseGetHighestGrade = (testValue, expectedValue) => {
    for(let i = 0; i < testValue.length; i++) {
        console.log(testValue[i].name === expectedValue[i].name  && testValue[i].major === expectedValue[i].major  ? 'Get Highest Grade: Success!' : 'Get Highest Grade: Failed!');
    }
}

testCaseGetHighestGrade(highestGrade(arrayStudentList), [ { name: 'Joanne', score: 98, major: 'Cyber Security' },
{ name: 'Yeremia', score: 92, major: 'Cyber Security' } ]);



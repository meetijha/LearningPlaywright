
let scores = [45, 82, 91, 60, 73];

// map — transforms every element, returns NEW array

let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);// [ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass' ]


// filter — keeps elements that pass a test

let passing = scores.filter(s => s >= 70);
console.log(passing);// [ 82, 91, 73 ]

// reduce — accumulates to a single value

let total = scores.reduce((sum, s) => sum + s, 0); // 0 is initial value of sum, s is each element of scores, 
// sum is the accumulated value which starts with 0 and adds each score to it. Finally, total will be the sum of all scores in the array.
console.log(total);

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());// [ 1, 2, 3, 4, 5 ]

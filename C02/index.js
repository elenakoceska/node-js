const arr = [1, 2, 3, 4, 5];

for (let i=0; i <= arr.length; i++) {
    console.log("i", arr[i]);
    if(arr[i] == 5) {
        arr[i] = 6;
    }
};

for (let el of arr) {
    console.log(el);
}; //vrednosti od elementite od celata niza

for (let el in arr) {
    console.log(el);
} // go zema indexot od nizata

//find - go naoga prviot od nizata

const res = arr.find((el) => el === "b");
console.log("res", res) ;
const res2 = arr.find((el) => {
    if(el === "a") {
        return el;
    }
});
console.log("res2", res2);


//map - vraka nov array
const mapEl = arr.map((el) => {
    if (el === "a") {
        el = "A";
    }
    return el;
});
console.log("mapEl", mapEl)


//forEach

const loops = arr.forEach((el) => el);


// reduce
const arrNums = [10, 50, 30];
const reducer = arrNums.reduce((acc, curr) => acc + curr);
console.log("reducer", reducer);


// const reducer = arr.reduce((acc, curr) => {
//     if(typeof curr === Number) acc = acc + curr;
//     return acc;
// })
//-----------------------------

//sort
const arrNum = [1, 2, 7, 4, 5, 8, 6, 3, 9];
const sortData = arrNum.sort((a, b) => {
    if( a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0; 
});
console.log("sortData", sortData);


// filter
const filterData = arrNum.filter((el) => el > 5);
console.log("data", filterData);


//------------------------

//objects

const student = {
    name: "Test User",
    age: 28,
    uni: "finki",
    averGrade: 7.5,
    grades: [7, 8, 10, 6, 6],
    getAverageGrade: grades.reduce ((acc, curr)) => el / grades.length {
        console.log(grades.reduce);
    };

};

console.log("student grades", student.grades);


// Callback
const callMeBack = () => {
    console.log("Hi");

};

const greetMe = (fn) => {
    fn();
}
greetMe(callMeBack);

//-----------------------


// function isEven(number) {
//     //return number %2 === 0;
//     if(number % 2)
//     return 1
// }


// function filter(number, fn) {
//     let result = [];
//     for (let num of numbers) {
//        if(fn(num)) {
//         results.push(num);
//        }
//     }
//     return results;
// }
// console.log(filter([1, 2, 3, 4, 5], isEven));


function isOdd(number) {
    if (number)
}
function filter(number, fn) {
    let result = [];
    for (let num of numbers) {
        if(fn(num)) {
            results.push(num);
        }
    }
    return results;
}
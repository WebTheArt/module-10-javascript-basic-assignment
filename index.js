
// 1) Write a function named calculateDifference

function calculateDifference(a, b) {
    return a - b;
}
let result = calculateDifference(10, 4);
console.log(result);



// 2) Write a function named isOdd

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(7)); 
console.log(isOdd(10));



// 3) Write a function named findMin

function findMin(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]; 
        }
    }
    return min;
}

console.log(findMin([10, 3, 5, 2, 8])); 
console.log(findMin([7, 25, 0, -5, 30])); 
console.log(findMin([])); 


// 4) Write a function named filterEvenNumbers

function filterEvenNumbers(numbersFill) {
    let evenNumbers = []; 
    for (let i = 0; i < numbersFill.length; i++) {
        if (numbersFill[i] % 2 === 0) {
            evenNumbers.push(numbersFill[i]); 
        }
    }
    return evenNumbers; 
}


console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 
console.log(filterEvenNumbers([10, 15, 20, 25, 30, 41])); 


// 5) Write a function named sortArrayDescending

function sortArrayDescending(numbersDec) {
    let sortedArray = [...numbersDec];
    sortedArray.sort((a, b) => b - a);
    return sortedArray;
}

console.log(sortArrayDescending([12, 15, 3, 7, 23, 10, 25]));



// 6) Write a function named lowercaseFirstLetter

function lowercaseFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str[0].toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Hello"));



// 7) Write a function named findAverage

function findAverage(numbersAvg) {
    if (numbersAvg.length === 0) {
        return "The array is empty. Cannot calculate the average.";
    }

    let sumAvg = 0;
    for (let i = 0; i < numbersAvg.length; i++) {
        sumAvg += numbersAvg[i];
    }

    const average = sumAvg / numbersAvg.length;
    return `The average of all elements is ${average}`; 
}

console.log(findAverage([10, 20, 30])); 
console.log(findAverage([]));          



// 8) Write a function named isLeapYear

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; 
    } else {
        return false; 
    }
}

console.log(isLeapYear(2000)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2024)); 


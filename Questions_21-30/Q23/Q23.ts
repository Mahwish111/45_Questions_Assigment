// Conditional  Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False..


// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'subaru';

// Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')   //True

// Tests 2: Strict Equality comparision (True)
console.log("Is car === 'subaru'? I predict False.")
console.log(car == 'subaru')  // (False)

// Test 3: Inequality comparison (False)
console.log("Is car != 'subaru'? I predict False.")
console.log(car != 'subaru')  //False

// Tests 4: Strict Inequality comparison (False)
console.log("Is car !== 'subaru'? I predict False.")
console.log(car !== 'subaru')  //False

// Tests 5: Less than comparison (False)
console.log("Is car < 'subaru'? I predict False")
console.log(car < 'subaru') //False (lexicographic comparison)

// Tests 6: Greater than comparison (False)
console.log("Is car > 'subaru'? I predict False")
console.log(car > 'subaru')  //False (lexicographic comparison)

//Tests 7: Less than or equal comparison (True)
console.log("Is car <= 'subaru'? I predict True.") 
console.log(car <= 'subaru')  //True

// Tests 8: Greater than or equal comparison (True)
console.log("Is car >= 'subsru'? Ipredict True.")
console.log(car >= 'subaru')  // True

// Tests 9: Checking Truthness (True)
console.log("Is car? I predict True.");
console.log(car);  //True (non-empty string is true)
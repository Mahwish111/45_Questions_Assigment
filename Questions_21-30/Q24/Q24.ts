// More Conditional Tests: You don't have to limit the number of tests you create to 10. If you want to try more comparisons, write mora tests. Have at least one True and one False result for each of the following:

 let car1= 'subaru';
 let age: number= 37;
 let numbers: number[] = [1, 2, 3, 4];

 // Tests for equality and inequality with strings

 // Test 1: Equality (True)
 console.log("Is car1 == 'subaru'? I predict True.")
 console.log(car1 == 'subaru')  //True (case-insensitive)

 // Test 2: Strict Equality (False)
 console.log("Is car1 === 'subaru'? I predict False.")
 console.log(car1 === 'subaru')  //False (case sensitive)

 // Test 3: Inequality (True)
 console.log("Is car1 != 'Toyota'? I predict True.")
 console.log(car1 != 'Toyota')  //True

 // Test 4: Inequality (False)
 console.log("Is car1 !== 'subaru'? I predict True.")
 console.log(car1 !== 'subaru')  //False (case-sensitive)

 // Tests using the lower case function

 //Test 5: Lowercase converson (True)
 console.log("Is car1 .toLowerCase() == 'subaru'? I predict True.");
 console.log(car1.toLowerCase() =='subaru');  //True (Converted to LowerCase)

 //Test 6: Lowercase conversion (False)
 console.log("Is car1 === car1.toLowerCase()? I predict False.");
 console.log(car1 === car1.toLowerCase());  // False (Original Value Remains UpperCase)

 
 //  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to and less than or equal to.
 
// Test 7: Equality (True)
console.log("Is age == 37? I predict True.")
console.log(age == 37); //True

// Test 8: Inequality (False)
console.log("Is age != 40? I predict True.");
console.log(age != 40); //True

// Test 9: Greater than (False)
console.log("Is age > 40? I predict False.");
console.log(age > 40); // False

// Test 10: Less than or equal (True)
console.log("Is age <= 37? I predict True.");
console.log(age <=37); // True

//   Tests using "and" and "or" operators

// Test 11: AND (True)
console.log("Is age > 30 && age < 40? I predict True.");
console.log(age > 30 && age < 40);  //True (Both conditions met)

// Test 12: OR (False)
console.log("Is age > 30 || age < 19? I predict False.");
console.log(age > 30 || age < 19);  //False (Neither condition met)


//  Test whether an item is in a array  

//Test 13: In Array (True)
console.log("Is 3 in numbers? I predict True.");
console.log(3 in numbers); //True (checks for index existance)

// Test whether an item is not in a array

// Test 14: Not in Array (False)
console.log("Is 5 not in numbers? I predict True.");
console.log(5 in numbers); // True (negation of "in" operation)


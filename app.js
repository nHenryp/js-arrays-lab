//const movies = ['', '', '']

// ! Mini Lab 1

// ? Define a "const" students that is an array. Add the name of four of your classmates as strings.
//const students = ['Anne', 'Felix', 'Raphna', 'anna'];

// ? Access the first name in the array and log it to the console.
//const firstStudents = students[]

// ? Access the third name in the array and log it to the console.

// ? Log the length of the array 

// ? Use the length property to log the final name in the array

// ? Define an array "students" and add some strings of names. Write a for loop that will log each item from the array in order.
//const students = ['Narmer', 'freya', 'yousef', 'lury'];

//for (let i = 0; i < students.legnth; i++) {
  //  console.log(students[i]);
//}

// ? Write a for of statement that console logs each students name in order

//for (const student of students){
    //console.log(students[])
//}

// ? Write a for of statment that console logs each students name, but with the letters of the name reversed.

//const callbackfunction = () => {
//movies.forEach( ) => {
//}

//}

/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

//const foods = [];  

//console.log('Exercise 1 result:', foods);


/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/
//const foods = ['pizza', 'cheeseburger'];  


//console.log('Exercise 2 result:', foods);


/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/
//const foods = ['pizza', 'cheeseburger'];

//foods.unshift('taco')

//console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/
//const foods = ['pizza', 'cheeseburger'];

//foods.unshift('taco')
//const favFood = foods[1]

//console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
//const foods = ['pizza', 'cheeseburger'];

//foods.unshift('taco')
//const favFood = foods[1]
//foods.splice(2, 0, 'tofu')

//console.log('Exercise 5 result:', foods);


/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

//const foods = ['pizza', 'cheeseburger'];

//foods.unshift('taco')
//const favFood = foods[1]
//foods.splice(2, 0, 'tofu')


//foods.splice(1,1, 'sushi')
//foods.splice(2,0, 'cupcake')
//console.log('Exercise 6 result:', foods);

//order of process
//splice(start) 
//splice(start, deleteCount)
//splice(start, deleteCount, item1)
//splice(start, deleteCount, item1, item2)
//splice(start, deleteCount, item1, item2, /* …, */ itemN)




/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/
//const yummy = foods.slice(1,3)
//(start, end(it takes the item -1 of the number you write down))
//e.g
//const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']


//const foods = ['pizza', 'cheeseburger'];

//foods.unshift('taco')
//const favFood = foods[1]
//foods.splice(2, 0, 'tofu')



//foods.splice(1,1, 'sushi')
//foods.splice(2,0, 'cupcake')
//const yummy = foods.slice(1,3)

//console.log('Exercise 7 result:', yummy);
//taco,sushi,cupcake,tofu, cheeseburger


/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/


//const foods = ['pizza', 'cheeseburger'];

//foods.unshift('taco')
//const favFood = foods[1]
//foods.splice(2, 0, 'tofu')
//foods.splice(1,1, 'sushi')
//foods.splice(2,0, 'cupcake')
//const yummy = foods.slice(1,3)

//const soyIdx = foods.indexOf('tofu')

//console.log('Exercise 8 result:', soyIdx);


/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

//const foods = ['pizza', 'cheeseburger'];

//foods.unshift('taco')
//const favFood = foods[1]
//foods.splice(2, 0, 'tofu')
//foods.splice(1,1, 'sushi')
//foods.splice(2,0, 'cupcake')
//const yummy = foods.slice(1,3)

//const soyIdx = foods.indexOf('tofu')

//const allFoods =(foods.join(' -> '));
//console.log(foods.join(' -> '))

//console.log('Exercise 9 result:', allFoods);


/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/


const foods = ['pizza', 'cheeseburger'];

foods.unshift('taco')
const favFood = foods[1]
foods.splice(2, 0, 'tofu')
foods.splice(1,1, 'sushi')
foods.splice(2,0, 'cupcake')
const yummy = foods.slice(1,3)

const soyIdx = foods.indexOf('tofu')

const allFoods =(foods.join(' -> '));
console.log(foods.join(' -> '))


const hasSoup = foods
console.log(foods.includes('soup'))


console.log('Exercise 10 result:', hasSoup);




/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];



console.log('Exercise 11 result:', odds);

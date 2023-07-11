/**
 * ***************************************************** EASY GOING ******************************************
 */
console.log('********** EASY GOING **********');
let str = '';

for (let i = 1; i <= 20; i++) {
	str += i + ' ';
}

console.log(str);
console.log(' ');

/**
 * ******************************************************* GET EVEN *********************************************
 */
console.log('********** GET EVEN ********');
let str2 = '';

for (let i = 0; i <= 200; i++) {
	if (i % 2 === 0) {
		str2 += i + ' ';
	}
}

console.log(str2);
console.log(' ');

/**
 * ****************************************************** FIZZ BUZZ *********************************************
 */
console.log('********** FIZZ BUZZ **********');
let str3 = '';

for (let i = 1; i <= 100; i++) {
	i % 3 === 0 && i % 5 === 0
		? (str3 += 'FizzBuzz, ')
		: i % 5 === 0
		? (str3 += 'Buzz, ')
		: i % 3 === 0
		? (str3 += 'Fizz, ')
		: (str3 += i + ', ');
}

console.log(str3);
console.log(' ');

/**
 * ****************************************************** WILD WILD LIFE *********************************************
 */
//TODO: ***** Should I convert to objects? *****
console.log('********** WILD WILD LIFE **********');
const wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory'];
const sharky = ['Sharky', 'shark', 20, 'Left Coast'];
const plantee = ['Plantee', 'plant', 5000, 'Mordor'];
const porgee = ['Porgee', 'Porg', 186, 'Ahch-To'];
const dart = ["D'Art", 'Demogorgan Dog', 2, 'Upside Down'];

//1. Update Plantee's birthday
console.log("1. Update Plantee's Birthday One Year");
console.log(plantee);

plantee[2] += 1;
console.log(plantee);
console.log(' ');

//2. Change Wolfy's hometown
console.log("2. Change Wolfy's Hometown From 'Yukon Territory'");
console.log(wolfy);

wolfy[3] = 'Gotham City';
console.log(wolfy);
console.log(' ');

//3. D'Art's second hometown
console.log("3. Add D'Art's Second Hometown of 'Hawkins'");
console.log(dart);

dart[3] += ' & Hawkins';
console.log(dart);
console.log(' ');

//4. Remove and replace 'Wolfy'
console.log("4. Remove And Replace 'Wolfy' With 'Gameboy'");
console.log(wolfy);

wolfy.splice(0, 1, 'Gameboy');
console.log(wolfy);
console.log(' ');

/**
 * ****************************************************** YELL AT THE NINJA TURTLES *********************************************
 */
console.log('********** YELL AT THE NINJA TURTLES **********');
const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (let name of turtles) {
	console.log(name.toUpperCase() + '!!!');
}

console.log(' ');

/**
 * ****************************************************** METHODS, REVISITED
 **********************************************
 */
console.log('********** METHODS REVISITED ********');
const favMovies = [
	'Jaws',
	'The Fellowship of the Ring',
	"Howl's Moving Castle",
	'Django Unchained',
	'Cloud Atlas',
	'The Usual Suspects',
	'Toy Story',
	'Conan the Barbarian',
	'Titanic',
	'Harry Potter',
	'Fried Green Tomatoes',
	'Volver',
	'Oculus',
	'Seven',
	'Black Panther',
	'Harry Potter',
	'Imitation of Life',
	'Snatch',
	'Fast and Furious',
];

console.log('Original Array:');
console.log(
	"const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl's Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];"
);
console.log(' ');

// The index of Titanic
let idx = favMovies.indexOf('Titanic');
console.log(`The index of Titanic is ${idx}`);
console.log(' ');

// Sort the array
favMovies.sort();

// Pop the array
favMovies.pop();

// Push to the array
favMovies.push('Guardians of the Galaxy');

//Reverse the array
favMovies.reverse();

// Shift the array
favMovies.shift();

// Un-shift the array
let c = favMovies.unshift('Test Movie Inserted');
console.log('After unshift, it returns the length. In this case: ', c); // Returns the length of the new array
console.log(' ');

// Splice the array
let idx2 = favMovies.indexOf('Django Unchained');
favMovies.splice(idx2, 0, 'Advatar');

let len = favMovies.length;
let midpoint = len / 2;

let movieSliced = favMovies.slice(midpoint, favMovies.length);

console.log('New sliced array:');
console.log(movieSliced);
console.log(' ');

console.log(
	'The index of "Fast and Furious" is',
	favMovies.indexOf('Fast and Furious')
);
console.log(
	'It was never removed due to the "sort()" method. "Volver" was "popped" from the end.'
);
console.log(' ');

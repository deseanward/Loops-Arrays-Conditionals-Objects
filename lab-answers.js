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

 
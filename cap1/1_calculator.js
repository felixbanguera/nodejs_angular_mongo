'use strict'

const all_args = process.argv;
console.log(all_args);
let js_args = all_args.slice(2);

let num1 = parseFloat(js_args[0]);
let operation = js_args[1];
let num2 = parseFloat(js_args[2]);

let result = '\n Not well used params, ex: 1 + 2';

if(js_args.length == 3){	
	switch(operation){
		case '+':
			result = `Sum: ${parseFloat(num1 + num2)}`;
			break;
		case '-':
			result = `Subtraction: ${parseFloat(num1 - num2)}`;
			break;
		case '*':
			result = `Multiplication: ${parseFloat(num1 * num2)}`;
			break;
		case '/':
			result = `Division: ${parseFloat(num1 / num2)}`;
			break;
	}
}

console.log(`RESULT: ${result}`);
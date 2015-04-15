// function maxofthree(num1,num2,num3){

// var X = Math.max(num1,num2,num3);

// console.log(X);

// }

// maxofthree(23,9,100);

function celsiusToFahrenheit(num1){

//Store a celsius temperature into a variable.

var celsius = num1;

//Convert it to fahrenheit and output "NN°C is NN°F".

var fahrenheit = (celsius*9/5) + 32;

console.log(celsius + "°C is " + fahrenheit + " °F");


}

celsiusToFahrenheit(20);

//Create a function called :

//Now store a fahrenheit temperature into a variable.
//Convert it to celsius and output "NN°F is NN°C."

function fahrenheitToCelsius(num3){

//Store a celsius temperature into a variable.

var fahrenheit1 = num3;

//Convert it to fahrenheit and output "NN°C is NN°F".

var celsius1 = (fahrenheit1 -32 )*(5/9);

console.log(fahrenheit1 + "°F is " + celsius1 + " °C");


}

fahrenheitToCelsius(100);



function calculateSupply(age, amount_day){

var die = 80
var time_until = (80-age)*365;

console.log("You will need KES " + Math.round(time_until*amount_day) + " to last you until the ripe old age of "+die + " years")


}

calculateSupply(24, 20.99824880009999999999775544)




var recipe = {

	title: "Omena", 
	servings: 5, 
	ingredients:["Omenas","sukuma","cooking oil", "lettuce"],

	printRecipe: function(){

	console.log("title:" , this.title);
	console.log("servings:" , this.servings);
	console.log("ingredients:");

	for (var i = 0; i < this.ingredients.length; i ++) {
	

		console.log( this.ingredients[i]);
}

}

}

recipe.printRecipe();


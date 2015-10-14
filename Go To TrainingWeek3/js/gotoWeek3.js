/*

Johnnetta Beverly-Leefort
SDI Section#3
Go To Week #3
 10/13/2015
 */


//alert("Testing to see if connected");
//Create an array of fruit name and then sort it.
//Array- is a Variable that holds Multiple Variables
//Index # of an array always starts with 0


var bowlOfFruit =["apple","banana","pear","peach" ];
// see whole array
console.log(bowlOfFruit);

//console.log the banana
console.log(bowlOfFruit [ 1]);

//How many items are in an array?
//Lenght property access by using dot syntax

console.log(bowlOfFruit.length);

//Count the number of pear in ours fruit bowl

//Create a variable that will keep track of many pear there are.

var totalNumPears=0;

//Test each item in the array and check if it is a pear.
//Basic structure of a conditional.
// If (condition to test){code that will run if true}

//"7"==-true
//"7"===false
//prompts always return strings!!


if(bowlOfFruit[0]==="pear") {
      //This code will run if true
      //Add 1 to the total number of pear
      console.log("This item is a pear!");
      totalNumPears++;
}else{
      console.log("This fruit is not a pear!");
}
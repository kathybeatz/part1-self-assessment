console.log('Let\'s start Hacking!');

var javaScriptString = 'Javascript is super duper awesome';
var myProfileObject = {};
var javaScriptArray = ['J', 'a', 'v', 'a'];

/* 1. Print to the Javascript console the 5 letter in a string (no variables allowed)


2. Loop through a string and print each character to the Javascript console (the only variable allowed is the iterator)

3. Copy and refactor problem 2 using a `while` loop

4. Add to `myProfileObject` the properties and values ('key, value pairs'): 
  
  1. 'school' set to 'Telegraph Prep'
  2. 'location' set to 'Berkeley, California'
  3. 'name' set to your name

  **NOTE: Explain the method you are using to do this (hint: '_____, notation')
  */

  console.log(javaScriptString[4]);

  for(var i = 0; i < javaScriptString.length; i++){
  	console.log(javaScriptString[i]);
  }


  myProfileObject.school = 'Telegraph Prep';
  myProfileObject['location'] = 'Berkeley, California';
  myProfileObject.name = 'Kathleen Lopez';

/* 5. Create a function that takes, an object and a name as parameters. It will return a new object with ONLY these properties:
  1. Your first and last name ex: **`name`: `'Bobby Tables'`**
  2. Your `place of birth`: city, state (or equivalent), country
  3. Your `hobby` or favorite activity
  4. A method that prints: 'My first name is [first name]' and my last name is '[last name]'
    - This method must use the 
*/

var func = function(obj, name){
	obj.name = name;
	obj['place of birth'] = ;
	
}
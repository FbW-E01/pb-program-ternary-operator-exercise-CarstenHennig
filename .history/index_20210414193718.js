// Rewrite this if using the conditional operator '?':

/* let result;
let a=3;
let b=6;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

/* _________________________________ */
let a=3;
let b=6;

//write your code here 
(a + b < 4) ? console.log("Below") : console.log("Over");

/* _________________________________ */


//Rewrite the code below to use the ternary operator (?:) (you should be able to condense the if-else logic into one line).
/* if (score > 1337)
{
    msg = "This is a new highscore!";
}
else
{
    msg = "You need more points to beat the highscore!";
} */

/* _________________________________ */

let score = 42;
let msg = "";

//write your code here 
(score > 1337) ? msg = "This is a new highscore" : msg = "You need more points to beat the highscore";
console.log(msg)

/* _________________________________ */


// Rewrite if..else using multiple ternary operators '?'.
//For readability, it’s recommended to split the code into multiple lines.

/* let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

/* _________________________________ */


//write your code here 
let login = "Director";
let message;
(login = "Employer") ? message = "Hello" : message = "";
(login = "Director") ? message = "Greetings" : message = "";
(login = "") ? message = "No login" : message = "";
console.log(message)

/* _________________________________ */


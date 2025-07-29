/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, 
then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 300;
let num2 = 250;
// console.log(num1 + num2);

if (num1 > num2){
    console.log(num1 * 2);
}
else{
    console.log(num1 + num2);
}

//simple ternary
    let result = num1 > num2 ? num1*2 : num1 + num2;
    console.log(result);




    let myNumber = 80;
let myFriendNumber = 39;

if (myNumber >=80 && myFriendNumber >= 80 ){
      console.log('Go for a lunch');
 }

 else if( myNumber >=80 && myFriendNumber >= 60 ){
    console.log('good luck next time');
 }
 else if ( myNumber >=80 && myFriendNumber >= 40){
    console.log("keep your friend's message unseen")
 }
 else if( myNumber >=80 && myFriendNumber <=40 ){
    console.log("block your friend");
 }

else{
    console.log('go to home and sleep and act sad ')
}
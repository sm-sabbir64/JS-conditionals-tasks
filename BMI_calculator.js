/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

 let height = 60;
 let weight = 30;
 let BMI = weight / height * height;

 if (BMI <= 18.5){
    console.log('Your BMI is', BMI.toFixed(2), 'you are underweight');
 }
 else if  ( BMI >= 18.5 && BMI <=24.5 ){
    console.log('Your BMI is', BMI.toFixed(2),'you are normal' );
 }
 else if( BMI >=25 && BMI <=29.9 ){
    console.log('Your BMI is', BMI.toFixed(2), 'you are overweight');

 }

 else{
    console.log('You are obese');
 }
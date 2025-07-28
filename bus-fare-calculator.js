/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 23;
let ticket = 800;
 
if (age <= 10){
    // free ticket for child
    console.log('Free ticket');
}
 
else if (age <= 25){
    //10% discount for students
    const discount = ticket *10/100;
    const payAmount = ticket -discount;
    console.log(payAmount);
}

else if ( age <= 60){
        //  15% discount for SeniorCitizen 
    const discount = ticket * 15/100;
    const payAmount =  ticket - discount;
    console.log(payAmount);
}

else{
    console.log('800');
}
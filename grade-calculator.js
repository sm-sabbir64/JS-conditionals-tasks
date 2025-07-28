/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
   
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

    ***/

    let myNumber = 76;

    if ( myNumber >=90 && myNumber <=100 ){
        console.log("You have achieved 'A' ");
    }

    else if (myNumber >=80 && myNumber <= 89){
        console.log("You have achieved 'B' ");
    }
    else if (myNumber >=70 && myNumber <= 79){
        console.log("You have achieved 'C' ");
    }
    else if (myNumber >= 60 && myNumber <=69 ){
        console.log("You have achieved 'D' ");
    }

    else{
        console.log("You have achieved 'D' ");
    }



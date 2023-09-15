// Q--1 
// let ans=prompt("Enter a number or string");

// if(!isNaN(ans)){
//     console.log(ans+ " is a number");
// }
// else if(ans === ans.toUpperCase()){
//     console.log(ans+ " is a uppercase letter");
// }
// else if(ans === ans.toLowerCase()){
//     console.log(ans+ " is a lowercase letter");
// }

// Q--2
// let a1=prompt("Enter a char");
// let num1=+a1;
// let a2=prompt("Enter a char");
// let num2=+a2;


// if(num1 < num2){
//     console.log(num1 + " is larger  number");
// }
// else if(num1 > num2){
//     console.log(num2 + " is larger number");
// }

// else if(num1 === num2){
//     console.log(" Both are equal");
// }


// Q--3
// let num3=prompt("Enter a char");

// if(num3 < 0){
//     console.log(num3 + " is a negative  number");
// }
// else if(num3 > 0){
//     console.log(num3 + " is positive number");
// }

// else if(num3 == 0){
//     console.log( num3 + " is equal to zero" );
// }


// Q--3
// let correctpass ="hello";
// let userinput = prompt(" Please enter your password ");

// if (userinput== correctpass){
//     console.log("Correct! The password you entered matches the original password");
// }
// else if  ( !userinput == correctpass ){
//     console.log(" “Incorrect password");
// }

// Q -- 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }

// else {
// greeting = "Good evening";
// };

// Q 
// var studentNames = []; 

// Q 
// var student = ["Ahmed", "Ali " , "Usman"]; 

// Q 
var number = [ 1 , 2  , 3]; 

// Q 
var bool = [true, false]; 

// Q 
let Qualification = [ "SSC"," HSC"," BCS",  " BS"," BCOM", "MS"," M. Phil.", "PhD"]; 
document.write("Qualifications : <br>");
for (let index = 0; index < Qualification.length; index++) {
     document.write("<br>")
      document.write(Qualification[index]);
    
}


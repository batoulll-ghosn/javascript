function addition(num1,num2){
        let sum= num1 + num2;
        return sum;
}

function subtraction(num1,num2){
         let sub= num1- num2;
         return sub;
}

function multiplication(num1,num2){
        let mul= num1*num2;
        return mul;
}

function divide(num1,num2){
      if (num2!=0){
     let divi=num1/num2;  
     return divi;}
     else {
        console.log( 'Enter Another number!')
        return num1;
     }
}
function myCalculator(operator, num1 , num2){
     if (operator === '+'){
        console.log (addition(num1, num2));
     }
     else if (operator === '-'){
        console.log (subtraction(num1, num2));
     }
     else if (operator === '*'){
        console.log (multiplication(num1, num2));
     }
     else if (operator === '/'){
        console.log (divide(num1, num2));
     }
     else { 
        console.log('operator unvalid!')
     }
}
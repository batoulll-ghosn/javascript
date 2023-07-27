for (let i=1 ;i<=20;i++){
    if(i%3==0){
        console.log( i+' '+ 'divi 3');
    }
    else if(i%5==0){
        console.log( i+' '+ 'divi 5');
    }
    else  if(i%3==0 && i%5==0){
        console.log( i+' '+ 'divi 3');
    }
    else { 
        console.log(i);
    }
}
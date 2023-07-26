numbers=[1,2,4,6,8,11,45,98,102,66,73];
let i;
let nb;
for( i=0 , i< numbers.length , i++ ) {
  nb=numbers[i];
  if(nb%2==0){
    console.log('This number is even'+ numbers[i])
  }
  else{
    console.log('This number is odd' + numbers[i] )
  }
}
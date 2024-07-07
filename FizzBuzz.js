/*
    FizzBuzx
    1. Print numbers from 1 to n
    2. if number is divisible by 3 , print "Fizz"
    3. if number is divisible by 5 , print "Buzz"
    4. if number is divisible by 3 and 5 , print "FizzBuzz"
    5. else, print the number
*/

const FizzBuzz = num => {
   for(let i=1; i<=num; i++){
     if(i % 3 == 0){
        console.log("Fizz")
     }
     else if( i % 5 == 0){
        console.log("Buzz")
     }
     else if( (i % 3 == 0 )&& (i % 5 == 0)){
        console.log("FizzBuzz")
     }
     else{
        console.log(i)
     }
   }
}
FizzBuzz(25)
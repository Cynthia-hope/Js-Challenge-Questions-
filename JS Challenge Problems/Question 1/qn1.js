/*Write a function named fizzBuzz that takes in two(2) parameters which are expected to be strings. The function should return the string Fizz if the combined length of the parameters is divisible by 3, the string Buzz if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and 3.*/




function fizzBuzz(str1,str2){
    let combined= str1.length + str2.length;
    if(combined % 5 ===0 && combined % 3 ===0){
        return "FizzBuzz"
    }
    else if(combined  % 3 ===0){
        return "FizzBuzz"

    }
    else if(combined % 5 ===0){
        return "Buzz"

    }
    else{
        return "none of the above"
    }

};
console.log(fizzBuzz("girl","boy"));
// this was the parameterised function 
function submission(a,b)
{
    let result = a+b;
    console.log("result is :", result);
}
submission(4,4)
//now let's see the example of non parameterized function
function GREETS()
{
    console.log("Hello Satyam the great of all ..!!");
}
GREETS();
// greet function as an example for parameterised function 
function greet(username)
{
    console.log("welcome The Great of all :" , username);
}
greet("satyam");
// the above examples are of the named function as these functions contains the function name here 
//now let's see the another type of function such as anynomous function which do not contains the function name  
// this anonymous function is also known as the function expression 

let sum = function(r,k)
{
    let result= r+k;
    return result; 
}
console.log("the sum of the values is :",sum(3,4));
// let us now see the example of the nested function 
function addsquares(r,k)
{
    function square(num){
        return num*num;
    }
    console.log(square(4))
}
addsquares(1,2); 
//let's see another example of nested function
function addsquares1(r,k)
{
    const a=square1(r);
    const b=square1(k);
    function square1(num){
        return num*num;
    }
    return a+b;
}
console.log(addsquares1(1,2)); 
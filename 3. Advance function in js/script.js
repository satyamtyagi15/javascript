// named  functions 
function greet(){
    console.log("hey satyam the great of all..!!!");
}
greet();



// anynomous  functions / function expression
 let hey = function (){
    console.log("hey satyam the great of all..!!!");
}
hey();



// arrow functions 
    hii =()=>{
        console.log("hey satyam the great of all..!!!");
    }
    hii();
// let's see some more examples of arrow function
  greet3=(count)=>{
        console.log("hey the great of all..!!!", count);
    }
    greet3("satyam tyagi");
// let's see how arrow function makes our codes shorter
square= (num)=>{
    return num*num;
}
console.log(square(4));
// with perfect use of arrow function it can be written directly 
square1 = (num)=>num*num;
console.log(square1(2));











// Call Back function 
//let's now see what's a callback function as we can see in the above function we have passed number as a parameter a callback function is the one where we pass the function as a parameter
//let's now see the example of a call back function
const calculate = (a,b,operation)=>{
    return operation(a,b)
}
console.log(calculate(5,6,function(n1,n2){
    return n1+n2;
}));



const subtraction = (a,b,operation)=>{
    return operation(a,b)
}
console.log(subtraction(9,3,function(n1,n2){
    return n1-n2;
}));


const multiplication = (a,b,operation)=>{
    return operation(a,b)
}
console.log(multiplication(9,3,function(n1,n2){
    return n1*n2;
}))

console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------")

// now let's see the example of call back function with 3 types of function 


//callback function
const calculate2 = (a,b,operation)=>{
    return operation(a,b);
}

//anynomous function
const submission = calculate2(6,3,function(a,b){
    return a+b;
})
console.log(submission);


//named function 
function sub(a,b){
    return a-b;
}
const substraction = calculate2(6,3,sub);
console.log(substraction);

// arrow function 
const mul = (a,b)=>a*b;
const multiplication2 = calculate2(9,5,mul)
console.log(multiplication2);



// Now we'll study the array call back functions 
const arr =[2,3,4,5,6,8,9,0,-5,-24,-6];
const printfirstnegetiveno = (num)=>num<0;
const result= arr.find(printfirstnegetiveno);
console.log(result);
const answer = arr.findIndex(printfirstnegetiveno);
console.log(answer);


console.log("now let's print whole elements of an array ")
 

arr.forEach((num,index)=>{
    console.log("ELement:",num,"Index:",index);
})
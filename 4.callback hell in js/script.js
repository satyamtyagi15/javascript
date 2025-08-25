// now let's study about the callback hell in javascript 
// it's basically means to execute the code after waiting for sometime 
// in this we pass to parameters they are=> callback function and the time duration it need to wait and execute the code the time duration is in milliseconds so in order to convert it into the seconds we need to multiply  it with the 1000 
// for this we use settimeout function
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("this will be executed after 3 sec")
},3000 );

console.log("three");


// in the ahove example we can see that the console.log("three") is written after the settimeout function and we know that the javascript executes the code line by line but still it's getting printed first and after 3 second the code inside the settimeout is printed

// now let's create a new method of getting candies



function getcandies(callback1){
    setTimeout(() => {
        const candies = "🍬🍭🍫";
        console.log("in our getcandies method ",candies);
        callback1(candies)
        
    }, 10000);
}

getcandies((candies) => {
    console.log("here is out candies ",candies)
});


//now if we want to handover the keys to the employees before giving them candies 


function getcandies(callback2){
    setTimeout(() => {
        const candies = "🍬🍭🍫";
        console.log("in our getcandies method ",candies);
        callback2(candies)
        
    }, 10000);
}


function handoverkeys(candies,callback3){
    setTimeout(() => {
        const keys = candies + "🔑🗝️🔐"
        console.log("in our handoverkeys method",  keys)
        callback3(keys)
    }, 10000);
}

getcandies((candies) => {
   handoverkeys(candies,(keys)=>{
   console.log("here is your keys and candies ",keys)
   })
});

// now let's see one more example suppose i want the  onboardings as well then 



function getcandies(callback4){
    setTimeout(() => {
        const candies = "🍬🍭🍫";
        console.log("in our getcandies method ",candies);
        callback4(candies)
        
    }, 10000);
}


function handoverkeys(candies,callback5){
    setTimeout(() => {
        const keys = candies + "🔑🗝️🔐"
        console.log("in our handoverkeys method",  keys)
        callback5(keys)
    }, 10000);
}

function onboarding(keys,callback6){
    setTimeout(() => {
        const onboarded = keys + "🏡🏠"
        console.log("in our onboarding method",  onboarded)
        callback6(onboarded)
    }, 10000);
}


getcandies((candies) => {
   handoverkeys(candies,(keys)=>{
    onboarding(keys,(onboarded)=>{
        console.log("Welcome to our Restaurant :",onboarded);
    })
   })
});
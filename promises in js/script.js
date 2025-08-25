// // we use promises in javascript in order to overcome the drawback of callback hell where we do deep nesting of callback function or n times using callback function in nested way 
// // promises is a good way to handle asynchronous operations  in javascript 
// // it is used to find out if the asynchronous operation is successfully completed or not much similar to our callback function only 
// // so the promises in js have 3 stages it can be either pending stage or fullfilled stage or rejected stage
// // const ticket = new Promise(function(resolve,rejected){
// //     const isBoarded = false;
// //     if(isBoarded){
// //         resolve("you're okay to ONBOARD:")
// //     }
// //     else{
// //         rejected("you're not eligible to ONBOARD , your flight has been cancelled :")
// //     }
// // })
 
// // ticket.then((data)=>{
// //     console.log("wohooo",data)
// // })
// // .catch((data)=>{
// //     console.log("oh no ",data)
// // })
// // now let's keep it as true then 
// const ticket = new Promise(function(resolve,rejected){
//     const isBoarded = true;
//     if(isBoarded){
//         resolve("you're eligible to ONBOARD:")
//     }
//     else{
//         rejected("you're not eligible to ONBOARD , your flight has been cancelled :")
//     }
// })
 
// ticket.then((data)=>{
//     console.log("wohooo",data)
// })
// .catch((data)=>{
//     console.log("oh no ",data)
// })
// .finally(()=>{
//     console.log("The statement inside the finally will always be executed irrespective the data is true or false : ")
// })




// // now let's see the candies example with this promise method instead of callback hell method 
// function getcandies(){
//     return new Promise((resolve,rejected)=>{
//            setTimeout(() => {
//         const candies = "🍬🍭🍫";
//         console.log("in our getcandies method ",candies); 
//         resolve(candies)
//     }, 10000);

//     })
// }
// console.log(getcandies())


// // now if we run the above code we can see in the console that the promise is showing in the pending status this is due to the settimeout 
// // let's see without settimeout it shows us that the promise is fullfilled 
// function fullfilled(){
//     return new Promise((resolve,rejected)=>{
//         resolve("success now the promise status is been pending it has become fullfilled :")
//     //        setTimeout(() => {
//     //     const candies = "🍬🍭🍫";
//     //     console.log("in our getcandies method ",candies); 
//     //     resolve(candies)
//     // }, 10000);

//     })
// }
// console.log(fullfilled())
// // now let's see  the example if our program has been rejected
// function REJECTION(){
//     return new Promise((resolve,rejected)=>{
//         rejected("your program has been rejected the status under pending is showing rejected now  :")
//     //        setTimeout(() => {
//     //     const candies = "🍬🍭🍫";
//     //     console.log("in our getcandies method ",candies); 
//     //     resolve(candies)
//     // }, 10000);

//     })
// }
// console.log(REJECTION());
// NOW LET'S MAKE A FULL PROGRAM OF CANDIES ONBOARDING AND KEYS 
//-----------------------------------------------------------------------------------------------------------------------------------------------------
// function getcandy(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             const candy = "🍫🍭🍬";
//             // console.log("in our getcandy method: ", candy);
//             resolve(candy);
//         }, 3000);
//     })
// }

// function handoverkeys(candy){
//      return new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             const keys = candy +"🔑🗝️";
//             // console.log("in our handoverkeys method: ", keys);
//             resolve(keys);
//         }, 3000);
//     })
// }

// function Onboarding(keys){
//       return new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             const onboarded = keys +"🏡🏠";
//             // console.log("in our Onboarding method: ", onboarded);
//             resolve(onboarded);
//         }, 3000);
//     })
// }
// getcandy()
// .then((candy)=>{
//     console.log("here is the candy: ", candy);
//     return handoverkeys(candy);
// })
// .then((keys)=>{
//     console.log("here is the keys : ", keys);
//     return Onboarding(keys);
// })
// .then((onboarded)=>{
//     console.log("welcome to the restaurant :",onboarded);
// })

// now let's see the code with the error in keys 

function getcandy(){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            const candy = "🍫🍭🍬";
            // console.log("in our getcandy method: ", candy);
            resolve(candy);
        }, 3000);
    })
}

function handoverkeys(candy){
     return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            const keys = candy +"🔑🗝️";
            // console.log("in our handoverkeys method: ", keys);
            //  resolve(keys)
             reject("keys not found ");
        }, 3000);
    })
}

function Onboarding(keys){
      return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            const onboarded = keys +"🏡🏠";
            // console.log("in our Onboarding method: ", onboarded);
            resolve(onboarded);
        }, 3000);
    })
}
// getcandy()
// .then((candy)=>{
//     console.log("here is the candy: ", candy);
//     return handoverkeys(candy);
// })
// .then((keys)=>{
//     console.log("here is the keys : ", keys);
//     return Onboarding(keys);
// })
// .then((onboarded)=>{
//     console.log("welcome to the restaurant :",onboarded);
// })
// .catch((err)=>{
//     console.log("error occured   :( ",err);
// })
// // similarly we can use finally in order to always execute the code irrespective of errors or not 
// .finally(()=>{
//     console.log("Happy to assist you :) ")
// })
// we also have an alternative for this resolve and rejected
//we can achieve the similar things with the async and and await 
// async function onboardclient() {
//    const CANDIES = await getcandy();
//    console.log("here is the candy: ", CANDIES);

//    const key = await handoverkeys()
//    console.log("here is the KEY : ", key);

//    const onboarded = await Onboarding()
//        console.log("welcome to the restaurant :",onboarded);
   
// }
// onboardclient();


// now what if there occurs the error in the code how to handle the code if the code is made with the async and wait mwethod 
// for that we'll use the try and catch method 
async function onboardclient() {
  try{
     const CANDIES = await getcandy();
   console.log("here is the candy: ", CANDIES);

   const key = await handoverkeys()
   console.log("here is the KEY : ", key);

   const onboarded = await Onboarding()
       console.log("welcome to the restaurant :",onboarded);
  }
  catch(err){
    console.log("error occured :", err)
  }
   
  console.log("Happy to assist you :) ");
}
onboardclient();
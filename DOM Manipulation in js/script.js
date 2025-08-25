// // here dom stands for the document object model 
// // we will be discussing the 4 major things in this dom manipulation in js 
// // 1. how to access the particular element using js 
// // let's take an example i want to access the entire body then 
// console.log(document.body);
// //now let's how i can change the background color for the body using js 
// const bodybackground = document.body;
// bodybackground.style.backgroundColor = "green";
// // now it's not only about the color we can also access the particular element by this method for eg let's access the box 4
// //1st. approach
// const box4 = document.getElementById('box-4'    );
// console.log(box4);
// // now if for eg i want to access the div tag then i'll be using getelements by tagname method 
// //2nd approach 
// const div = document.getElementsByTagName('div');
// console.log(div);
// // now suppose i need to print the h1 instead of div
// const h1 = document.getElementsByTagName('h1');
// console.log(h1);
// //3rd approach
// // you can also acceess the element by classname for eg
// const boxes = document.getElementsByClassName('box');
// console.log(boxes);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
// // now the next thing we would be covering is how we can use and how we can modify the html elements
// //Modifying the html elements (there are two different methods for this purpose 1. by using innerhtml 2.by using innertext)
// // let's suppose i need to modify the box 1 first of all we'll be accessing it with the use of the id 
// const box1 = document.getElementById('box-1');
// box1.innerHTML="Satyam Tyagi"//you can see the content of box 1 is now replaced by my name let's do it with innertext as well 
// // const box2 = document.getElementById('box-2');
// // box2.innerText="Satyam Tyagi"
// // now what's the difference between two in innertext you can only change the text of the content  while in innerhtml you can change the whole inner elements for eg
const box3 = document.getElementById('box-3');
// // // box3.innerHTML = "<b>BOX-3</b> <P>LOREM</P>"
// // // LET'S WRITE IT IN A SINGLE LINE 
// // document.getElementById('box-4').innerText='THIS IS BOX 4';
// // // so it's not about modifying the html tags or text we can also modify the styles her for eg
// // box1.style.backgroundColor='yellow'
// // //now you can also remove or add elements 
// // //let's say for eg box 3  is having a circle property and i need to remove it from box 3 and add it to box 2 then 
// //  box2 = document.getElementById('box-2');
// // box2.classList.add('circle'); 
// // //similarly now we can remove the circle from the box 3 as well 
// // box3 = document.getElementById('box-3');
// // box3.classList.remove('circle');
const boxes = document.getElementsByClassName('box')
for (let i=0 ;i<boxes.length;i++){
    boxes[i].classList.add('circle'); 
}
box3.classList.remove('box');

// creating a new element 
// 1st is to get the access
// 2nd is the contents 
// 3rd is appending 


const newpara = document.createElement('p');
newpara.innerText= 'this is our new para';
const cont = document.getElementById('cont');
cont.appendChild(newpara);
newpara.classList.add('box')
newpara.classList.remove('circle')
//event help us to write a certain code that responds to certain situation 
// Events 
// 1. event handlers
// (onclick,onload,onmouseover,onmouseout,onkwypress,onkeydown,onkeyup)
function onclickfunc(){
    console.log("the box has been clicked")
}
const keypressevent = ()=>{
    console.log("the key has been hitted ")
}
// now when we started writting something overthere it'll display the text that the key is hitted 
const onKeyup = ()=>{
    console.log("OnKey Up ")
}

const onKeydown = ()=>{
    console.log("OnKey Down ")
}


//2. Event listeners
// they are different from event handlers as in event handlers the we need to add them on the html page but here we do all work in js file also they starts with on 
const box1 = document.getElementById('box-1');
box1.addEventListener('click',()=>{
    console.log('click has been triggered-1')
})

// now the drawback for the event handlers is that if we add two or more function for the same event then only 1 function will be executed but it's  not the case with the event listeners

box1.addEventListener('click',()=>{
    console.log('click has been triggered-2 ')
})


box1.addEventListener('mousemove',(event)=>{
    console.log('click has been triggered-2 ',event.clientX,event.clientY)
})

// now let's understand the concept of bubbling and captcha 
//in bubbling the innermost has the highest priority and opposite case is with the capcha

// box1.addEventListener('click',(event)=>{
//     console.log('box')
// })

// const cont = document.getElementById('cont');
// cont.addEventListener('click',(event)=>{
//     console.log('container')
// })
// right now if we click on the box we'll be getting the box first and then the container in order to reverse out this thing we need to put it to true so that 
// we'll get container then box  or we can say first priority will then be assigned to the parent tag then the child one 
// let's see the example
box1.addEventListener('click',(event)=>{
    console.log('box')
})

const cont = document.getElementById('cont');
cont.addEventListener('click',(event)=>{
    console.log('container')
},true)
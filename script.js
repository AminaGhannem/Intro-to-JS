document.querySelector("h1").innerHTML="Hello";
document.getElementById("btn").addEventListener("click",function(){
    alert("Hello");
}
);

//change the color of the h1 when clicked  
const element=document.querySelector("h1");
element.addEventListener("click",function(){
    if (element.style.color="purple")
    element.style.color="black";
    else
    element.style.color="purple";
}
);

// document.body.addEventListener("keypress",function(event){
//     alert(event.key);
// }
// );

// funtion to toggle the document title from ACM to JS each 1 sec
setInterval(function(){
    if( document.title=="JS"){
        document.title="ACM";
    }
    else{
        document.title="JS";
    }
},1000);

// //function to change the background color of the body each 1 sec    
// setInterval(function(){
//     if( document.body.style.background=="red"){
//         document.body.style.background="blue";
//     }
//     else{
//         document.body.style.background="red";
//     }
// },1000);

//change the content of the paragraph when the user writes in the input
const input = document.querySelector(".input");
const paragraph = document.querySelector(".p");
input.addEventListener("keyup", function () {
  paragraph.innerText = input.value;
});

// change the color of the li when clicked
const liste=document.querySelectorAll("li");
for(let li of liste){
    li.addEventListener("click",function(){
        li.style.color=li.textContent;
    });
}


// example of append child
const car= document.createElement('option');
car.innerHTML='Ferrari';
document.querySelector('select').appendChild(car);
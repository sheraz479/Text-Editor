// Activity of making text editor
// Using input event

let p =document.querySelector("p");
let input =document.querySelector("input");

input.addEventListener("input" , function(){
    console.log(input.value);
    p.innerText = input.value;
});  
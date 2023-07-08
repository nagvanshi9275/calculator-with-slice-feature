
let screen = document.querySelector(".screen");

let button = document.querySelectorAll(".btn")

let clear = document.querySelector(".clear")

for(let i=0; i<button.length; i++){
    button[i].addEventListener("click", function(){
        
        if(this.innerHTML == "="){
            screen.innerHTML = eval(screen.innerHTML)
            
        }
       
         screen.innerHTML += this.innerHTML.replace("=", "")
        
    })
    
}


 
 function clear1(){
    screen.innerHTML = screen.innerHTML.slice(0, -1)
     
 }
 
 





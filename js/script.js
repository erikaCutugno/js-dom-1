const imageElm = document.querySelector("img")
const btnElm = document.getElementById("btn")
console.log(btnElm.innerHTML == "Accendi")
   
 btnElm.addEventListener("click",function(){
    if(btnElm.innerHTML == "Accendi"){
        imageElm.src = "img/yellow_lamp.png"
        imageElm.alt = "Lampadina accesa"
        btnElm.innerHTML = "Spegni"
    }else {
        imageElm.src = "img/white_lamp.png"
        imageElm.alt = "Lampadina spenta"
        btnElm.innerHTML = "Accendi"
    }
}) 
   
   

   
     
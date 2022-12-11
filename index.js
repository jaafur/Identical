document.querySelector(".control-button span").onclick = function(){
    let yourName = prompt("Enter Your Name")
    if(yourName == null || yourName == ""){
        document.querySelector(".name span").innerHTML = "Unknown"
    }else{
        document.querySelector(".name span").innerHTML = yourName
    }
    document.querySelector(".control-button").remove()
}

let duration = 2000,  
    gameContainer = document.querySelector(".game-container"),
    boxes = Array.from(gameContainer.children),
    orderRange = Array.from(Array(boxes.length).keys());
    console.log(shuffle(orderRange))
boxes.forEach((box,index) => {
    
    box.style.order =  orderRange[index] 
    box.addEventListener('click', function(){
       flip(box)
     })
})


function shuffle(array){
  for (let index = 0; index < array.length; index++) {
    array[index] = Math.floor(Math.random()*array.length);  
  }
  
}
function flip(box){
  box.classList.add("is-flip");
 let flippedBoxes = boxes.filter((flippedBox) => {return flippedBox.classList.contains('is-flip')})
      
  if (flippedBoxes.length === 2) {
     stopCLicking()
     checkBox(flippedBoxes[0],flippedBoxes[1]);
   
  }else{
    
  }
   
}
function stopCLicking() {
    gameContainer.classList.add("no-clicking")
    setTimeout(() => {
        gameContainer.classList.remove("no-clicking")
    }, duration);
  
}
function checkBox(box1,box2) {
    let tries = document.querySelector(".tries span")
    if(box1.dataset.pic === box2.dataset.pic){
        box1.classList.add("same-box")
        box2.classList.add("same-box")
        
        box1.classList.remove("is-flip")
        box2.classList.remove("is-flip")
       
    }else{
        setTimeout(() => {
            box1.classList.remove("is-flip")
            box2.classList.remove("is-flip")
        }, 2000);
    
        
     tries.innerHTML = parseInt(tries.innerHTML) + 1
    }
    
}
console.log( orderRange)

const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const horizantals = document.querySelectorAll(".horizantal")
const horizantal1 = document.querySelector(".horizantal1")
const horizantal2 = document.querySelector(".horizantal2")
const horizantal3 = document.querySelector(".horizantal3")
const circles = document.querySelectorAll(".circle")
const circle1 = document.querySelector(".circle1")
const circle2 = document.querySelector(".circle2")
const circle3 = document.querySelector(".circle3")
const circle4 = document.querySelector(".circle4")

var count = 1;

next.addEventListener("click", () => {
    count++;
    if (count > circles.length){
        count = circles.length;
    }
    update();
})

prev.addEventListener("click", () => {
    count--;
    if (count < 1){
        count = 1;
    }
    update();
})

function update(){
    circles.forEach((circle,i)=>{
        if(i<count){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    });
    horizantals.forEach((horizantal,i)=>{
        if(i<count-1){
            horizantal.classList.add("active");
        }else{
            horizantal.classList.remove("active");
        }
    })
    if (count===1){
        prev.disabled = true;
    }else if(count===circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}




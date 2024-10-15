var is_rotate = 0;

function displayNone(){
    document.querySelector(".a1").style.display = "none";
    document.querySelector(".a2").style.display = "none";
    document.querySelector(".a3").style.display = "none";
    document.querySelector(".a4").style.display = "none";
    document.querySelector(".a5").style.display = "none";
    document.querySelector(".a6").style.display = "none";
    document.getElementById("cross1").style.removeProperty("transform");
    document.getElementById("cross2").style.removeProperty("transform");
    document.getElementById("cross3").style.removeProperty("transform");
    document.getElementById("cross4").style.removeProperty("transform");
    document.getElementById("cross5").style.removeProperty("transform");
    document.getElementById("cross6").style.removeProperty("transform");
    is_rotate = 0;
}

document.querySelector(".q1").addEventListener('click', e=>{
    let x = document.getElementById("cross1").style;
    displayNone();
    if (is_rotate == 0){
        x.transform = "rotate(-45deg)";
        x.transition = "transform 1s ease-in-out 1ms";
        is_rotate = 1;
        document.querySelector(".a1").style.display = "block";
    }
    
    else{
        x.transform = "rotate(0deg)";
        x.transition = "transform 1s ease-in-out 1ms";
        is_rotate = 0;
        document.querySelector(".a1").style.display = "none";

    }

})

document.querySelector(".q2").addEventListener('click', e=>{
    let x = document.getElementById("cross2").style;
    displayNone();
    if (is_rotate == 0){
        x.transform = "rotate(-45deg)";
        x.transition = "transform 1s ease-in-out 1ms";
        is_rotate = 1;
        document.querySelector(".a2").style.display = "block";
    }
    else{
        x.transform = "rotate(0deg)";
        x.transition = "transform 1s ease-in-out 1ms";
        is_rotate = 0;
        document.querySelector(".a2").style.display = "none";
    }

})

document.querySelector(".q3").addEventListener('click', e=>{
    displayNone();
    let x = document.getElementById("cross3").style;
    if (is_rotate == 0){
        x.transform = "rotate(-45deg)";
        x.transition = "transform 1s ease-in-out 1ms";
        is_rotate = 1;
        document.querySelector(".a3").style.display = "block";
    }
    else{
        x.transform = "rotate(0deg)";
        x.transition = "transform 1s ease-in-out 1ms";
        is_rotate = 0;
        document.querySelector(".a3").style.display = "none";
    }

})

document.querySelector(".q4").addEventListener('click', e=>{
    displayNone();
    let x = document.getElementById("cross4").style;
    if (is_rotate == 0){
        x.transform = "rotate(-45deg)";
        x.transition = "transform 1s ease-in-out 1ms";
        is_rotate = 1;
        document.querySelector(".a4").style.display = "block";
    }
    else{
        x.transform = "rotate(0deg)";
        x.transition = "transform 1s ease-in-out 1ms";
        is_rotate = 0;
        document.querySelector(".a4").style.display = "none";

    }

})

document.querySelector(".q5").addEventListener('click', e=>{
    displayNone();
    let x = document.getElementById("cross5").style;
    if (is_rotate == 0){
        x.transform = "rotate(-45deg)";
        x.transition = "transform 1s ease-in-out 1ms";
        is_rotate = 1;
        document.querySelector(".a5").style.display = "block";
    }
    else{
        x.transform = "rotate(0deg)";
        x.transition = "transform 1s ease-in-out 1ms";
        is_rotate = 0;
        document.querySelector(".a5").style.display = "none";

    }

})

document.querySelector(".q6").addEventListener('click', e=>{
    let x = document.getElementById("cross6").style;
    displayNone();
    if (is_rotate == 0){
        x.transform = "rotate(-45deg)";
        x.transition = "transform 1s ease-in-out 1ms";
        is_rotate = 1;
        document.querySelector(".a6").style.display = "block";
    }
    else{
        x.transform = "rotate(0deg)";
        x.transition = "transform 1s ease-in-out 1ms";
        is_rotate = 0;
        document.querySelector(".a6").style.display = "none";

    }

})

let a = document.querySelector(".menu");
let b = document.getElementById("navbar");
let is_r = 0;
a.addEventListener('click', e=>{
    if(is_r == 0){
    a.style.transform = "rotate(90deg)";
    a.style.transition = "transform 1s ease-out 1ms"
    b.style.width = "20vw";
    b.style.opacity = "1";
    b.style.transition = "all 1s ease-out 1ms"
    is_r = 1;
    }
    else{
        a.style.transform = "rotate(0deg)";
        a.style.transition = "transform 1s ease-out 1ms"
        b.style.opacity = "0";
        b.style.width = "0vw";
        b.style.transition = "all 1s ease-out 1ms"
        is_r = 0;
    }

})

function hidemenu(){
    a.style.transform = "rotate(0deg)";
    a.style.transition = "transform 1s ease-out 1ms"
    b.style.opacity = "0";
    b.style.width = "0vw";
    is_r = 0;
}
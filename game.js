//OM



 
function rabbit1(){
    
    var rabbit = document.getElementById("rabbitbutton");
    const maxX = window.innerWidth - rabbit.clientWidth;
    const maxY = window.innerHeight - rabbit.clientHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    rabbit.style.left = x + 'px';
    rabbit.style.top = y + 'px';
}
setInterval(rabbit1, 800);
let isclicked = false;
let score = 0;
let score_value = document.getElementById("scorevalue");

function update_score(){
    let div_score = document.getElementById("scorevalue")
    score=score+10;
    addEventListener('click', div_score.innerHTML = score);
}
rabbit1();
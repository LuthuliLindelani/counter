const IncreaseBtn = document.getElementById("IncreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const counterlabel = document.getElementById("counterlabel");

let count = 0;

IncreaseBtn.onclick = function(){
    count+=1;
    counterlabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count-=1;
    counterlabel.textContent = count; 
}

resetBtn.onclick = function(){
    count=0;
    counterlabel.textContent = count;
}
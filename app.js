let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "yellow", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(started == false){
  console.log("game started");
  started = true;
    };
  levelup();
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

let randidx = Math.floor(Math.random() * 3);
let randcolor = btns[randidx];
let randbtn = document.querySelector(`.${randcolor}`);
gameSeq.push(randcolor);
gameflash(randbtn);


    btnflash();
}

function checkans(idx){


if (userSeq[idx]=== gameSeq[idx]){
    if(userSeq.length === gameSeq.length){
    setTimeout( levelup, 1000);
    }
  
    }else{
        h2.innerHTML= `game over! your score was <b> ${level}</b>  press any key to start.`;
        reset();
    }
}


function btnpress(){
let btn = this;
userflash(btn);

usercolor = btn.getAttribute("id");
userSeq.push(usercolor);

checkans(userSeq.length - 1);
}



let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
btn.addEventListener("click", btnpress);
};


function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}



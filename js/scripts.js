const jackValue = 2;
const queenValue = 3;
const kingValue = 4;
const tenValue = 10;
const aceValue = 11;
let total = 0;
let jackCount = 0;
let queenCount = 0;
let kingCount = 0;
let tenCount = 0;
let aceCount = 0;

const restart = document.querySelector('#restart');
const jack = document.querySelector('#jack');
const queen = document.querySelector('#queen');
const king = document.querySelector('#king');
const ten = document.querySelector('#ten');
const ace = document.querySelector('#ace');
let totalScore = document.querySelector('#totalScore');
restart.addEventListener('click', () => { 
    totalScore.innerHTML = 0;
    total = 0;
    aceCount = 0;
    tenCount = 0;
    jackCount = 0;
    queenCount = 0;
    kingCount = 0;
    totalScore.style.color = '#FACC15';
});
jack.addEventListener('click', () => {
    jackCount++;
    if(jackCount<=4){
        total += jackValue;
        totalScore.innerHTML = total;
    };
    if(total>=60){
        totalScore.style.color = '#16A34A';
    }
});
queen.addEventListener('click', () => {
    queenCount++;
    if(queenCount<=4){
        total += queenValue;
        totalScore.innerHTML = total;
    };
    if(total>=60){
        totalScore.style.color = '#16A34A';
    }
});
king.addEventListener('click', () => {
    kingCount++;
    if(kingCount<=4){
        total += kingValue;
        totalScore.innerHTML = total;
    };
    if(total>=60){
        totalScore.style.color = '#16A34A';
    } 
});
ten.addEventListener('click', () => {
    tenCount++;
    if(tenCount<=4){
        total += tenValue;
        totalScore.innerHTML = total;
    };
    if(total>=60){
        totalScore.style.color = '#16A34A';
    };
});
ace.addEventListener('click', () => {
    aceCount++;
    if(aceCount<=4){
        total += aceValue;
        totalScore.innerHTML = total;
    } 
    if(total>=60){
        totalScore.style.color = '#16A34A';
    }
});


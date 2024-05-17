const resetButton = document.querySelector('#reset');
const playTo = document.querySelector('#playto');

let winScore = 3;
let isGameOver = false; //flag เพื่อบอกว่าเกมนี้จบหรือยัง

let p1 = { //จัดกลุ่มเพื่อ refactor code (clean code)
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#p1Display')
}
let p2 = { 
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#p2Display')
}

p1.button.addEventListener('click', function () {
    updateScore(p1,p2)
})
p2.button.addEventListener('click', function () {
    updateScore(p2,p1)
})

function updateScore(player , opponent) {
    if(!isGameOver){ // = if(isGameOver == false)
        player.score += 1
        if(player.score == winScore){
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disable = true;
            opponent.button.disable = true;
        }
    }
    player.display.textContent = player.score
}

resetButton.addEventListener('click',reset) 

playTo.addEventListener('change' , function () {
    winScore = Number(this.value)
    reset();
})
 
function reset() { // refactor clean code ไม่ควรเขียน logic ที่ซ้ำซ้อน
    isGameOver = false;
    p1.score = 0
    p2.score = 0
    p1Display.textContent = p1.score
    p2Display.textContent = p2.score
    p1Display.classList.remove('loser','winner');
    p2Display.classList.remove('winner','loser');
}
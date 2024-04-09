let msgcontainer = document.querySelector(".msg-container");
let newGame = document.querySelector(".newGame");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msg = document.querySelector(".msg");

let turnO = true;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = function(){
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach(function(box){
    box.addEventListener("click", function(){
        console.log("box was clicked");

        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = function(){
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = function(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = function(winner){
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner =function(){
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
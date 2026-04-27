// 1. js파일에서 접근해야하는 html dom 요소 선언
const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");


const myScore = document.querySelector(".my-score");
const computerScore = document.querySelector(".computer-score");
let scoreMy = 0;
let scoreCom = 0;


const gameResult = document.getElementById("display-result");

const resetBtn = document.getElementById("reset-button");

const darkmodeBtn = document.getElementById("dark-mode");

// 2. 이벤트 설정
rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);

resetBtn.addEventListener("click", gameReset);

darkmodeBtn.addEventListener("click", changemode);

// 3. displayMyChoice 함수 설정
function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

// 4. 랜덤으로 뱉는 컴퓨터
function getComChoice() {
    const randomValue = {
        0 : ["rock", "fa-regular fa-hand-back-fist"],
        1 : ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2 : ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

// 5. 컴퓨터의 선택이 화면에 보이도록 하는 함수
function displayComChoice(result){
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

// 6. start 함수
function start(mychoice){
    let resultArray = getComChoice();
    displayComChoice(resultArray);

    judgeResult(mychoice, resultArray[0]);
    showResult(mychoice, resultArray[0]);
}

// 7. 점수판 함수 
function judgeResult(myChoice, comChoice){
    if ((myChoice == "rock" && comChoice == "scissors")||
       (myChoice == "scissors" && comChoice == "paper")||
       (myChoice == "paper" && comChoice == "rock")){
        scoreMy++;
    } else if (myChoice == comChoice){

    } else{
        scoreCom++;
    }
    myScore.innerText = scoreMy;
    computerScore.innerText = scoreCom;

}

// 8. 결과 텍스트 
function showResult(myChoice, comChoice){
    if ((myChoice == "rock" && comChoice == "scissors")||
       (myChoice == "scissors" && comChoice == "paper")||
       (myChoice == "paper" && comChoice == "rock")){
        gameResult.innerText = "Win!";
    } else if (myChoice == comChoice){
        gameResult.innerText = "draw!";
    } else{
        gameResult.innerText = "Lose!";
    }

}

// 9. 리셋 함수
function gameReset(){
    scoreMy = 0;
    scoreCom = 0;
    myScore.innerText = '0';
    computerScore.innerText = '0';
    gameResult.innerText = "";
}

// 10. 다크모드 전환
function changemode(){
    document.body.classList.toggle("dark");
}




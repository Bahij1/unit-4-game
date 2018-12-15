var toGuess, gemOne, gemTwo, gemThree, gemFour;
var currentNum = 0;
var wins = 0;
var losses = 0;

$(document).ready(function(){
    generateRandomNumbers();
    updateDisplay();

    $("#gemOne").click(function(){
        currentNum += gemOne;
        updateDisplay();
        checkWin();
    });
    $("#gemTwo").click(function(){
        currentNum += gemTwo;
        updateDisplay();
        checkWin();
    });
    $("#gemThree").click(function(){
        currentNum += gemThree;
        updateDisplay();
        checkWin();
    });
    $("#gemFour").click(function(){
        currentNum += gemFour;
        updateDisplay();
        checkWin();
    });
});

function generateRandomNumbers(){
    toGuess = Math.floor(Math.random() * 120) + 19;
    currentNum = 0;
    gemOne = Math.floor(Math.random() * 12) + 1;
    gemTwo = Math.floor(Math.random() * 12) + 1;
    gemThree = Math.floor(Math.random() * 12) + 1;
    gemFour = Math.floor(Math.random() * 12) + 1;
}

function updateDisplay(){
    $("#toGet").text(toGuess);
    $("#currentNum").text(currentNum);
    $("#wins").text(wins);
    $("#losses").text(losses);
}

function checkWin(){
    if(currentNum > toGuess){
        losses++;
        generateRandomNumbers();
        updateDisplay();
    }
    else if(currentNum == toGuess){
        wins++;
        generateRandomNumbers();
        updateDisplay();
    }
}

'use strict';

let foodPg = document.getElementById('foodProg'),
    cleanPg = document.getElementById('cleanProg'),
    happinessPg = document.getElementById('happinessProg'),
    healthPg = document.getElementById('healthProg'),
    socializationPg = document.getElementById('socializationProg'),
    moneyPg = document.getElementById('moneyProg'),

    countFood = Math.ceil(Math.random() * (100 - 50) + 50),
    countClean = Math.ceil(Math.random() * (100 - 50) + 50),
    countHappiness = Math.ceil(Math.random() * (100 - 50) + 50),
    countHealth = Math.ceil(Math.random() * (100 - 50) + 50),
    countSocialization = Math.ceil(Math.random() * (100 - 50) + 50),
    countMoney = Math.ceil(Math.random() * (100 - 50) + 50),
    
    countSec = 0,
    isGameOver = true,
    isGameScore = true;

foodPg.value = countFood;
cleanPg.value = countClean;
happinessPg.value = countHappiness;
healthPg.value = countHealth;
socializationPg.value = countSocialization;
moneyPg.value = countMoney;

document.getElementById('easyLevelBtn').onclick = function() {
    start();
    setInterval(easyDiff, 5000);
    setInterval(duringLife, 1000);
    setInterval(gameOver, 100);
    setInterval(randomHelp, 60000);
}

document.getElementById('hardLevelBtn').onclick = function() {
    start();
    setInterval(hardDiff, 5000);
    setInterval(duringLife, 1000);
    setInterval(gameOver, 100);
    setInterval(randomHelp, 60000);
}

document.getElementById('ninjaLevelBtn').onclick = function() {
    start();
    setInterval(ninjaDiff, 5000);
    setInterval(duringLife, 1000);
    setInterval(gameOver, 100);
    setInterval(randomHelp, 60000);
}

function start() {
    document.querySelector('.start').hidden = true;

    let actions = document.querySelector('.actions'),
        style = actions.style;
    actions.classList.add('actions-on');
    if(isGameOver == false) {
        actions.classList.remove('actions-on');
    }
}

document.getElementById('eatBtn').onclick = function() {
    countClean -= 20;
    cleanPg.value = countClean;

    if(countFood <= 70) { 
        countFood += 30;
        foodPg.value = countFood;
    } else {
        countFood = 100
        foodPg.value = countFood;
    }
}

document.getElementById('washBtn').onclick = function() {
    countHappiness -= 20;
    happinessPg.value = countHappiness;

    if(countClean <= 60){ 
        countClean += 40;
        cleanPg.value = countClean;
    } else {
        countClean = 100
        cleanPg.value = countClean;
    }
}

document.getElementById('runBtn').onclick = function() {
    countFood -= 10;
    foodPg.value = countFood;

    if(countHappiness <= 85){ 
        countHappiness += 15;
        happinessPg.value = countHappiness;
    } else {
        countHappiness = 100
        happinessPg.value = countHappiness;
    }
}

document.getElementById('doctorBtn').onclick = function() {
    countMoney -= 20;
    moneyPg.value = countMoney;
    
    if(countHealth <= 70){ 
        countHealth += 30;
        healthPg.value = countHealth;
    } else {
        countHealth = 100
        healthPg.value = countHealth;
    }
}

document.getElementById('barBtn').onclick = function() {
    countMoney -= 20;
    countHealth -= 10;
    moneyPg.value = countMoney;
    healthPg.value = countHealth;

    if(countFood <= 90 && countSocialization <= 60){ 
        countSocialization += 40;
        countFood += 10;
        socializationPg.value = countSocialization;
        foodPg.value = countFood;

    } else if(countFood > 90 && countSocialization > 60) {
        countFood = 100
        countSocialization = 100;
        socializationPg.value = countSocialization;
        foodPg.value = countFood;

    } else if(countFood <= 90 && countSocialization > 60) {
        countFood += 10;
        countSocialization = 100;
        foodPg.value = countFood;
        socializationPg.value = countSocialization;

    } else if(countFood > 90 && countSocialization <= 60) {
        countFood = 100
        countSocialization += 40;
        socializationPg.value = countSocialization;
        foodPg.value = countFood;
    }
}

document.getElementById('workBtn').onclick = function() {
        countSocialization -= 20;
        countFood -= 10;
        countHealth -= 10;
        healthPg.value = countHealth;
        socializationPg.value = countSocialization;
        foodPg.value = countFood;
    
    if(countMoney <= 50){ 
        countMoney += 50;
        moneyPg.value = countMoney;
    } else {
        countMoney = 100
        moneyPg.value = countMoney;
    }
}

document.getElementById('buyBtn').onclick = function() {
    countMoney -= 20;
    moneyPg.value = countMoney;

    if(countFood <= 80){ 
        countFood += 20;
        foodPg.value = countFood;
    } else {
        countFood = 100
        foodPg.value = countFood;
    }
}

document.getElementById('bussinessBtn').onclick = function() {
    countHealth -= 100;
    countMoney = 100;
    countHappiness = 100;
    healthPg.value = countHealth;
    moneyPg.value = countMoney;
    happinessPg.value = countHappiness;

    if(countSocialization <= 80){ 
        countMoney += 20;
        socializationPg.value = countSocialization;
    } else {
        countMoney = 100
        socializationPg.value = countSocialization;
    }
}

function easyDiff() {
    countFood -= 3;
    countClean -= 3;
    countHappiness -= 3;
    countHealth -= 3;
    countSocialization -= 3;
    countMoney -= 3;

    foodPg.value = countFood;
    happinessPg.value = countHappiness;
    cleanPg.value = countClean;
    healthPg.value = countHealth;
    socializationPg.value = countSocialization;
    moneyPg.value = countMoney;
}

function hardDiff() {
    countFood -= 5;
    countClean -= 5;
    countHappiness -= 5;
    countHealth -= 5;
    countSocialization -= 5;
    countMoney -= 5;

    foodPg.value = countFood;
    happinessPg.value = countHappiness;
    cleanPg.value = countClean;
    healthPg.value = countHealth;
    socializationPg.value = countSocialization;
    moneyPg.value = countMoney;
}

function ninjaDiff() {
    countFood -= 7;
    countClean -= 7;
    countHappiness -= 7;
    countHealth -= 7;
    countSocialization -= 7;
    countMoney -= 7;

    foodPg.value = countFood;
    happinessPg.value = countHappiness;
    cleanPg.value = countClean;
    healthPg.value = countHealth;
    socializationPg.value = countSocialization;
    moneyPg.value = countMoney;
}

function duringLife() {
    if(isGameScore){
        countSec += 1;

        if(foodPg.value <= 0 || cleanPg.value <= 0 || happinessPg.value <= 0 || 
            healthPg.value <= 0 || socializationPg.value <= 0 || moneyPg.value<= 0 ) {
            isGameScore = false;
        }
    }
}
function gameOver(){
    if(isGameOver){
        if(foodPg.value <= 0 || cleanPg.value <= 0 || happinessPg.value <= 0 ||
             healthPg.value <= 0 || socializationPg.value <= 0 || moneyPg.value<= 0 ) {
            alert('You have been lived for ' + countSec + ' seconds')
            document.querySelector('.actions').hidden = true;
            document.querySelector('.start').hidden = false;
            isGameOver = false;
        }
    }
}
function randomHelp(){
    let a = Math.ceil(Math.random() * (6 - 0) + 0);

    switch (a) {
        case 1:
            countFood += Math.ceil(Math.random() * (50 - 10) + 10);
            foodPg.value = countFood;
            break;
        case 2:
            countClean += Math.ceil(Math.random() * (50 - 10) + 10);
            cleanPg.value = countClean;
            break;
        case 3:
            countHappiness += Math.ceil(Math.random() * (50 - 10) + 10);
            happinessPg.value = countHappiness;
            break;
        case 4:
            countHealth += Math.ceil(Math.random() * (50 - 10) + 10);
            healthPg.value = countHealth;
            break;
        case 5:
            countSocialization += Math.ceil(Math.random() * (50 - 10) + 10);
            socializationPg.value = countSocialization;
            break;
        case 6:
            countMoney += Math.ceil(Math.random() * (50 - 10) + 10);
            moneyPg.value = countMoney;
            break;
        default:
          alert( "Нет таких значений" );
      }
}
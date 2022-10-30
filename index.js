let count1 = 0
let count2 = 0

score1 = document.getElementById("count1")
score2 = document.getElementById("count2")

function add1_home(){
    count1 = count1 + 1
    score1.textContent = count1
}

function add1_guest(){
    count2 = count2 + 1
    score2.textContent = count2
}

function add2_home(){
    count1 = count1 + 2
    score1.textContent = count1
}

function add2_guest(){
    count2 = count2 + 2
    score2.textContent = count2
}

function add3_home(){
    count1 = count1 + 3
    score1.textContent = count1
}

function add3_guest(){
    count2 = count2 + 3
    score2.textContent = count2
}

function reset(){
    score1.textContent = 0
    score2.textContent = 0
}


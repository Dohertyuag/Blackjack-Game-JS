let sum = 0
let cards = []
let isAlive = false
let gotBlackjack = false

let player = {
    name: "Brad",
    chips: 100
}

function showButton(){
    document.querySelector(".hidden").className = "show"
}
function hideButton(){
    document.querySelector(".show").className = "hidden"
}

document.getElementById("player").textContent = player.name + ": $" + player.chips


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard > 10){
        return 10
    }
    else if(randomCard === 1){
        return 11
    }
    else{
        return randomCard
    }
}

function renderGame(){
    document.getElementById('sum').textContent = "Sum : " + sum
    
    document.getElementById("cards").textContent = "Cards : "
    for(let i=0; i<cards.length; i++){
        document.getElementById("cards").textContent += cards[i] + " "
    }

    if(sum <= 20){
        document.getElementById("message").innerHTML = "Do you want to draw a new card from the deck?"
        showButton()
    }
    else if(sum === 21){
        document.getElementById("message").innerHTML = "Congrats! You got blackjack."
        gotBlackjack = true
        isAlive = false
        hideButton()
    }
    else{
        document.getElementById("message").innerHTML = "You have lost!"
        isAlive = false
        hideButton()
    }
}

function newCard(){
    if(isAlive === true && gotBlackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}


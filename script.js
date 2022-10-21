const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');


const SELECTIONS = [
    {
        name:'rock',
        emoji:'✊',
        beats:'scissors'
    },
    {
        name:'paper',
        emoji:'✋',
        beats:'rock'
    },
    {
        name:'scissors',
        emoji:'✌️',
        beats:'paper'
    }
]

selectionButtons.forEach(selectionButtons =>{
    selectionButtons.addEventListener('click', e =>{
        const selectionName = selectionButtons.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})


function makeSelection(selection){
    const computerSelection = randomSelection()
    const areYouWinner = whoIsWinner(selection, computerSelection)
    const isComputerWinner = whoIsWinner(computerSelection, selection)
    
    addSelectionResult(computerSelection, isComputerWinner)
    addSelectionResult(selection, areYouWinner)

    if(areYouWinner) incrementScore(yourScoreSpan);
    if(isComputerWinner) incrementScore(computerScoreSpan);
}


function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) +1
}


function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
  }

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

function whoIsWinner(choice, oppenentChoice){
    return choice.beats === oppenentChoice.name
}
'use strict'

{
    const miLegyenAzEbed = arr => {
        let nr = Math.floor(Math.random() * (arr.length) + 0)
        $('#answerField h2').innerHTML = arr[nr]
        $('#answerField h2').style.textTransform = 'capitalize'
    }
    
    $('#button').addEventListener('click', () => miLegyenAzEbed(food)) 
}
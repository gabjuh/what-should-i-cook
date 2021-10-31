'use strict'

{
    const miLegyenAzEbed = arr => {
        let nr = Math.floor(Math.random() * (arr.length) + 0)
        $('#answerField').innerHTML = arr[nr]
    }
    
    $('#button').addEventListener('click', () => miLegyenAzEbed(food)) 
}
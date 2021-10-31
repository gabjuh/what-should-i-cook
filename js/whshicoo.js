'use strict'

{
    // const miLegyenAzEbed = arr => {
    //     let nr = Math.floor(Math.random() * (arr.length) + 0)
    //     $('#answerField h2').innerHTML = arr[nr]
    //     $('#answerField h2').style.textTransform = 'capitalize'
    // }
    
    // $('#button').addEventListener('click', () => miLegyenAzEbed(food)) 

    const name = $('#imgField h1')
    const img = $('#img')
    const ingredients = $('#ingred')
    const preparation = $('#prep')
    const button = $('#webLinkButton')

    const miLegyenAzEbed = arrObj => {
        // create a random number

        hideQuestionmark()
        showElement('#buttonFound')

        let nr = Math.floor(Math.random() * (arrObj.length) + 0)
    
        name.innerHTML = arrObj[nr].name
        name.style.textTransform = 'capitalize'

        if (arrObj[nr].img !== '') {
            img.style.display = 'block'
            img.style.opacity = 1
            img.src = arrObj[nr].img
            
        } else {
            img.style.opacity = 0
            img.src = ''
        }
            
        if (arrObj[nr].ingredients !== '') {
            ingredients.innerHTML = `<h2 class="mb-3">Hozzávalók</h2> ${arrObj[nr].ingredients}`
        } else {
            ingredients.innerHTML = ''
        }

        if (arrObj[nr].preparation !== '') {
            preparation.innerHTML = `<h2 class="mb-3">Elkészítés</h2> ${arrObj[nr].preparation}`
        } else {
            preparation.innerHTML = ''
        }
        
        button.src = arrObj[nr].link
    }

    $('#button').addEventListener('click', () => miLegyenAzEbed(foodObj)) 

    const hideQuestionmark = () => $('.noImg').style.display = 'none'

    const showElement = el => $(el).style.display = 'block'

}
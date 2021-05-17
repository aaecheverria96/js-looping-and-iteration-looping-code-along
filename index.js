function writeCards(array, eventName) { 
   let thankYouCards = []
    for (let i = 0; i < array.length; i++) { 
       thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    } 
    return thankYouCards
} 

function countDown(num) { 
    while (num >= 0) { 
        console.log(num) 
        num-- 
    }
}
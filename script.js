let apiQuotes = [];

//show new quote
function newQuote(){
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quote from api
async function getQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try{
       const response = await fetch(apiUrl);
       apiQuotes= await fetch(apiUrl);
       apiQuotes = await response.json();
       new Quote();

    }catch (error){
       // catch error here
    }
}
const quoteContainer = document.getElementById('quote-container');
const quoteText= document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote'); 
const loader =document.getElementById('loader');

let apiQuotes = [];

//show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden= true;    
}

//hide loading
function complete(){
    quoteContainer.hidden= false; 
    loader.hidden = true;
       
}

//show new quote
function newQuote(){
    loading();
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if author field blank and replace it unkinown
    if(!quote.author){
        author.innerText="unknown";
    }else{
        authorText.innerText=quote.author;
    }
    // check quote length to determine styling
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    
    quoteText.textContent=quote.text;
    // show loader
    complete();
    //console.log(quote);
}

// Get Quote from api
async function getQuotes(){
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try{
       const response = await fetch(apiUrl);
       apiQuotes= await fetch(apiUrl);
       apiQuotes = await response.json();
      // console.log(apiQuotes[12]);
      //callback function
       newQuote();

    }catch (error){
       // catch error here
    }
    //Tweet Quote
    function tweetQuote(){
        const twitterURL= `https://twitter.com/intent/tweet?text=
        ${quoteText.textContent}-${authorText.textContent}`;
        window.open(twitterURL, '_blank');
    }
    //Event listner
    newQuoteBtn.addEventListener('click', newQuote);   
    twitterBtn.addEventListener('click', tweetQuote)
}
// on load
getQuotes();

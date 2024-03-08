var quotecont=document.getElementById("quote-cont");
var quoteText=document.getElementById("quote");
var authorText=document.getElementById("author");
var twitterbtn=document.getElementById("twitter");
var newQuotebtn=document.getElementById("new-quote");


let apiQuotes = [];

//show ne qoute

function newQuote(){
    // pick  a ramdom code from quotes
    const newQuotelogic=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    if(!newQuotelogic.author){
        authorText.textContent = "unkown";

    }else{
        authorText.textContent = newQuotelogic.author;
    }
    if(newQuotelogic.text.length>120){
        quoteText.classList.add('long-quote');

    }else{
        quoteText.classList.remove('long-quote');
    }
    
    quoteText.textContent= newQuotelogic.text;

}
// Get Qutoes from api
async function GetQuotes(){
    const apiUrl='https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response=await fetch(apiUrl);
        apiQuotes = await response.json();
        
        // console.log(apiQuotes[12]);
        newQuote();
    }
    catch(error){

        // error

    }
}

function twitterintegration(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
newQuotebtn.addEventListener('click',newQuote);
twitterbtn.addEventListener('click',twitterintegration);
GetQuotes();
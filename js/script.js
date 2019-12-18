/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//quotes array of objects
const quotes = [
  {
    quote: 'Build what you want to see in the world.',
    source: 'Jack Dorsey',
    source_title: 'Founder of Twitter & Square',
    year: '2012',
    citation: 'Foundation Podcast',
    quote_type: '#tech'
  },
  {
    quote: 'The journey is apart of the experience - an expression of the seriousness of ones intent. One doesn’t take the A train to Mecca.',
    source: 'Anthony Bourdain',
    source_title: 'Travel Documentarian, Chef, & Author',
    year: 'Unknown',
    citation: 'Unknown',
    quote_type: '#travel'
  },
  {
    quote: 'My greatest skill has been to want but little.',
    source: 'Henry David Thoreau',
    source_title: 'Poet & Journalist',
    year: '1854',
    citation: 'Walden',
    quote_type: '#minimalist'
  },
  {
    quote: 'As we look ahead into the next century, leaders will be those who empower others.',
    source: 'Bill Gates',
    source_title: 'Founder of Microsft & Philathropist',
    year: 'Unknown',
    citation: 'Unknown',
    quote_type: '#tech'
  },
  {
    quote: 'My passion has been to build an enduring company where people were motivated to make great products. Everything else was secondary.',
    source: 'Steve Jobs',
    source_title: 'Founder of Apple',
    year: 'Unknown',
    citation: 'Steve Jobs Biography by Walter Isaacson',
    quote_type: '#tech'
  },
  {
    quote: 'MY WHY HAS TO BE GREATOR THAN THE KNOCKDOWN.',
    source: 'Ryan Carson',
    source_title: 'Founder of Treehouse',
    year: '2019',
    citation: 'Instagram @ryancarson',
    quote_type: '#tech'
  }
];

//colors array
const randomColorList = [
  '#0080ff', 
  '#8000ff', 
  '#400080', 
  '#800080', 
  '#008080', 
  '#800040'
];

//quote will change every 12 seconds
let timer = setInterval(printQuote, 12000);

//helper function to get random item in an array
const getRandomNumber = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);
  const arrayItem = array[randomNumber];
  return arrayItem;
};

/*** 
 * The function below sets a random background color, decides which html to set dependant on if year or citation or both is unknown,
 * and returns the innerHTML of the html chosen.
 */
function printQuote () {
  const randomQuote = getRandomNumber(quotes);
  const divQuoteBox = document.getElementById("quote-box");
  let html = `<p class="quote"> ${randomQuote.quote} </p><p class="source"> ${randomQuote.source} <span class="source-title"> 
  ${randomQuote.source_title} </span><span class="quote-type"> ${randomQuote.quote_type} </span>`;
  
  document.body.style.backgroundColor = getRandomNumber(randomColorList);
  
  //when the button is clicked the timer resets for better usablity
  clearInterval(timer);
  timer = setInterval(printQuote, 12000);

  if (randomQuote.year != 'Unknown') {
    html += `<span class="year"> ${randomQuote.year} </span>`;
  }

  if (randomQuote.citation != 'Unknown') {
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }

  html += '</p>';
  return  divQuoteBox.innerHTML = html;
}

/***
  Right below was existing code that adds the event listener to the button.
  When the button is clicked, the printQuote function is going to run.
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

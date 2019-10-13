/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * Created a Quotes array with the following properties and their level of requirement.
 * Required in all: quote, source
 * Required in at least 1: citation, year
 * Ones I'm adding myself: source title, quote type
 * Need at least 5 quotes. 
 */

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
    year: 'Uknown',
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

//testing quotes array.

console.log(quotes);


/**I was using the wrong equation and had to ask for help in the end I received a
 * hint and switched to using math.floor instead of math.ceil and subtracting by 1
 * because an array.length starts at 1 and not 0.
 * The below creates a random number and returns it.
 */

function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * (quotes.length - 1));
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

/*** 
 * The function below sets a random background color, decides which html to set dependant on if year or citation or both is unknown,
 * and returns the innerHTML of the html chosen. 
 */

function printQuote () {
  let randomQuote = getRandomQuote();
  let html = '';
  let divQuoteBox = document.getElementById("quote-box");
  const randomColorList = ['red', 'blue', 'green', 'light blue', 'orange', 'purple'];
  function getRandomColor () {
    let randomNumber = Math.floor(Math.random() * (randomColorList.length - 1)); 
    let randomColor = randomColorList[randomNumber];
    return randomColor;
  }
  document.body.style.backgroundColor = getRandomColor();
  if (randomQuote.year != 'Uknown' && randomQuote.citation != 'Unknown') {
      //special html to add citation and year to show
      html = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '<span class="source-title">' + randomQuote.source_title + '</span><span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span><span class="quote-type">' + randomQuote.quote_type + '</span></p>';
    } else if (randomQuote.year === 'Unknown' && randomQuote.citation === 'Unknown') {
        //special html without citation or year
        html = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '<span class="source-title">' + randomQuote.source_title + '</span><span class="quote-type">' + randomQuote.quote_type + '</span></p>';
      } else if (randomQuote.year != 'Uknown') {
        //special html to add year to show
        html = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '<span class="source-title">' + randomQuote.source_title + '</span><span class="year">' + randomQuote.year + '</span><span class="quote-type">' + randomQuote.quote_type + '</span></p>';
        } else if (randomQuote.citation != 'Uknown') {
        //special html to add citation to show
        html = '<p class="quote">' + randomQuote.quote + '</p> <p class="source">' + randomQuote.source + '<span class="source-title">' + randomQuote.source_title +'</span><span class="citation">' + randomQuote.citation +'</span><span class="quote-type">' + randomQuote.quote_type +'</span></p>';
          }
  return  divQuoteBox.innerHTML = html;
}

/***
  Right below was existing code.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

/*** I was originally trying to use a for loop with window.setTimeout() but then a
 * fellow student recommended I use setInterval.
 * The below changes the quote every 12 seconds. 
 */

setInterval('printQuote()', 12000);

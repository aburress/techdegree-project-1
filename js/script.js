function getRandomQuote(arr) {
  // Generates a random number between 0 and the size of the array
  // Returns the array object at the index of the random number
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

function getRandomColor() {
  // Generates a random number between 0 and 255
  // Grabs body selector and updates background color
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  document.getElementById("body").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function printQuote() {
  // Call the getRandomQuote() function and assign returned value to a variable
  // Begin building our HTML string
  // Check that object has 'citation' and 'year' values
  // Complete HTML string
  // Set 'innerHTML' of 'quote-box' div to HTML string
  // Refreshes background color each turn with getRandomColor() function
  let randomQuote = getRandomQuote(quotes);
  let message = "<p class = 'quote'>" + randomQuote.quote + "</p>";
  message += "<p class = 'source'>" + randomQuote.source;
  if (randomQuote.citation) {
    message += "<span class = 'citation'>" + randomQuote.citation + "</span>";
  };
  if (randomQuote.year) {
    message += "<span class = 'year'>" + randomQuote.year + "</span>";
  }
  message += "</p>";
  if (randomQuote.tags) {
    message += "<p class = 'tags'> Taught through " + randomQuote.tags + "</p>";
  }
  let quoteDiv = document.getElementById("quote-box");
  quoteDiv.innerHTML = message;
  getRandomColor();
}

let quotes = [
  {
    quote: "It matters not what someone is born, but what they grow to be!",
    source: "Albus Dumbledore",
    year: 2000,
    citation: "Harry Potter and The Goblet of Fire",
    tags: "inspiration"
  },
  {
    quote: "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
    source: "Albus Dumbledore",
    year: 2007,
    citation: "Harry Potter and the Deathly Hallows",
    tags: "inspiration"
  },
  {
    quote: "But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    source: "Albus Dumbledore",
    year: 1999,
    citation: "Harry Potter and the Prisoner of Azkaban",
    tags: "reflection"
  },
  {
    quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    source: "Albus Dumbledore",
    year: 1998,
    citation: "Harry Potter and the Chamber of Secrets",
    tags: "reflection"
  },
  {
    quote: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it.",
    source: "Albus Dumbledore",
    year: 2007,
    citation: "Harry Potter and the Deathly Hallows",
    tags: "caution"
  }
];

// Refreshes quote every 4 seconds
setInterval(printQuote, 4000);

// Option for button:
// Trigger event listener to call the printQuote() function
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);
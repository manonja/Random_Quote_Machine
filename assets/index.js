var quotes = [
  {
    text: "If you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.",
    author: "Roy T. Bennett"
  },
  {
    text: "It's not the load that breaks you down, it's the way you carry it.",
    author: "Lou Holtz"
  },
  {
    text:"Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
    author:"Thomas Jefferson"
  },
  {
    text:"Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day.",
    author:"Paulo Coelho"
  },
  {
    text:"Of course motivation is not permanent. But then, neither is bathing; but it is something you should do on a regular basis.",
    author:"Zig Ziglar"
  },
  {
    text:"The way to get started is to quit talking and begin doing.",
    author:"Walt Disney"
  },
  {
    text:"The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it.",
    author:"Jordan Belfort"
  },
  {
    text:"It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.",
    author:"Roy T. Bennett"
  },
  {
    text:"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author:"Roy T. Bennett"
  },
  {
    text:"Maturity is when you stop complaining and making excuses, and start making changes.",
    author:"Roy T. Bennett"

  }
];

var Img = [
  {
    backgroundImage : "url('photo1_ps.jpg')"
  },
  {
    backgroundImage : "url('photo2_ps.jpg')"
  },
  {
    backgroundImage : "url('photo3_ps.jpg')"
  },
  {
    backgroundImage : "url('photo4_ps.jpg')"
  },
  {
    backgroundImage : "url('photo5_ps.jpg')"
  },
  {
    backgroundImage : "url('photo6_ps.jpg')"
  },
  {
    backgroundImage : "url('photo7_ps.jpg')"
  },
  {
    backgroundImage : "url('photo8_ps.jpg')"
  },
  {
    backgroundImage : "url('photo9_ps.jpg')"
  },
  {
    backgroundImage : "url('photo10_ps.jpg')"
  }
]

// creates a function newQuote to generate a random quote from the array var quotes.
function newQuoteGenerated(){
    getRandomQuote();
    getTwitterUrl();
    getRandomImg();
};

function getRandomQuote(){
    var randomQuote = quotes[Math.floor((Math.random() * (quotes.length)))];
    document.getElementById("newQuoteDisplayed").innerHTML = "<div>" + randomQuote.text + "</div" + "\n" + "<div>" + randomQuote.author + "</div>";
};

function getTwitterUrl(){
    document.getElementById("twitterUrl").href = "https://twitter.com/intent/tweet?text=" + randomQuote.text;
};

function getRandomImg(){
    var randomImg = Img[Math.floor((Math.random() * (Img.length)))];
    document.body.style.backgroundImage = randomImg.backgroundImage;
};

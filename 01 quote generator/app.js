let quote = document.querySelector(".quote")
let author = document.querySelector(".author")
const btn = document.querySelector("#btn-next")

const quotes = [{
    quotes: `"Life isn’t about getting and having, it’s about giving and being."`,
    author: `Kevin Kruse`
},
{
    quotes: `"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."`,
    author: `Robert Frost`
},
{
    quotes: `"Strive not to be a success, but rather to be of value."`,
    author: `Albert Einstein`
},
{
    quotes: `"Strive not to be a success, but rather to be of value."`,
    author: `Napoleon Hill`
},
{
    quotes: `"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed."`,
    author: `Michael Jordan`
},
{
    quotes: `"You miss 100% of the shots you don’t take."`,
    author: `Wayne Gretzky`
},
{
    quotes: `"I attribute my success to this: I never gave or took any excuse."`,
    author: `Florence Nightingale`
},
{
    quotes: `"Definiteness of purpose is the starting point of all achievement."`,
    author: `W. Clement Stone `
},
{
    quotes: `"Every strike brings me closer to the next home run."`,
    author: `Babe Ruth`
},
{
    quotes: `"The most difficult thing is the decision to act, the rest is merely tenacity."`,
    author: `Amelia Earhart `
}
]

const newQuote = () => {
    console.log("it is printing")
    let quoteNum = Math.floor( Math.random() * quotes.length)
    quote.innerText = quotes[quoteNum].quotes
    author.innerText = quotes[quoteNum].author
}

btn.addEventListener('click', newQuote)
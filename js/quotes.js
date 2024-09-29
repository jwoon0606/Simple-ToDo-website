const quotes = [
    {
        quote: "I'm a man on the misson.",
        author: "On The Larceny"
    },
    {
        quote: "Up, lad: when the journey’s over, There’ll be time enough to sleep. ",
        author: "A.E. Houseman"
    },
    {
        quote: "If you don't stand your ground, then all that happens is people push you backwards.",
        author: "Dr. Jordan B. Peterson"
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "This too shall pass.",
        author: "Et hoc transibit"
    },
    {
        quote: "When in doubt, choose change.",
        author: "Lily leung"
    },
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacé"
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Gail Winfrey"
    },
    {
        quote: "No great man ever complains of want of opportunity.",
        author: "Anonymous"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
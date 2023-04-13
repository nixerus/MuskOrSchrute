
const quotes = {
    "elon": [
        "Patience is a virtue, and I'm learning patience. It's a tough lesson.",
        "It's OK to have your eggs in one basket as long as you control what happens to that basket.",
        "Any product that needs a manual to work is broken.",
        "The factory is the machine that builds the machine.",
        "I wouldn't say I have a lack of fear. In fact, I'd like my fear emotion to be less because it's very distracting and fries my nervous system.",
        "America is the spirit of human exploration distilled.",
        "If there was a way I could not eat, so I could work more, I would not eat.",
        "We will coup whoever we want! Deal with it.",
        "Impersonating others is wrong!",
        "Friendship takes work, enmity is effortless.",
        "Politics is war and truth is the first casualty.",
        "Don't want to brag but... I'm the best at humility.",
        "I will not let you down, no matter what it takes."
    ],
    "dwight": [
        "You couldn't handle my undivided attention.",
        "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing.",
        "I really should have a Tweeter account.",
        "It's better to be hurt by someone you know accidentally, than by a stranger on purpose.",
        "Failure is any kind of failure.",
        "I am ready to face any challenges that might be foolish enough to face me.",
        "I come from a long line of fighters.",
        "You only live once? False. You live every day. You only die once.",
        "I am better than you have ever been or ever will.",
        "Sometimes you just fail.",
        "Many ideas were not appreciated in their time.",
        "I will not be participating as there is no evidence that charity works.",
    ]
}

class Quiz {
    constructor() {
        this.quotes = quotes;
        this.currentQuote = "";
        this.generateQuote();
    }

    generateQuote(){
        const musk = (Math.floor(Math.random() * 2) == 0);

        let quote;
        if(musk) {
            quote = this.quotes.elon[Math.floor(Math.random() * this.quotes.elon.length)];
            this.currentQuote = "musk";
        } else {
            quote = this.quotes.dwight[Math.floor(Math.random() * this.quotes.dwight.length)]
            this.currentQuote = "dwight";
        }
        document.getElementById("quote").innerHTML = quote;
    }

    choose(option){
        if(option === this.currentQuote){
            document.getElementById("feedback").innerHTML = "Well done! You guessed right!"
        } else {
            document.getElementById("feedback").innerHTML = "Oopsie! Wrong guess!"
        }
        this.generateQuote();
        setTimeout(function(){
            document.getElementById("feedback").innerHTML = "";
        },2000);
    }
}

setTimeout(function(){
    document.quiz = new Quiz();
},500);
const questions = {
    HTTPquestions = [
    {
        question: "what is http2 good for?", 
        a: "reduced latency", 
        b: "same as http1", 
        c: "Data framing differentiation", 
        d: "other things", 
        correctAnswer: "reduced latency"
    }, {
        question: "what does HTTP stand for?", 
        a: "No meaning", 
        b: "Hyper Text Transaction Protocol", 
        c: "Hyper Text Transfer Protocol", 
        d: "Hallow Transfer Text Protocol", 
        correctAnswer: "Hyper Text Transfer Protocol"
    }
],

    ReactQuestions = [
        {
            question: "What is a common lifecycle method?", 
            a: "ComponentDidMount", 
            b: "ComponentDoesExist", 
            c: "ComponentNeedsUpdate", 
            d: "DerivedStatesFromProps", 
            correctAnswer: "ComponentDidMount"
        }, {
            question: "Why does React need a Root?", 
            a: "No reason", 
            b: "To create a DOM tree with JSX", 
            c: "To work with lifecycle methods", 
            d: "The root is just HTML", 
            correctAnswer: "To create a DOM tree with JSX"
        }
    ],

    JavascriptQuestions = [
        {
            question: "What cannot be hoisted",
            a: "function expressions", 
            b: "function declarations", 
            c: "arrow functions", 
            d: "all functions can be hoisted", 
            correctAnswer: "function expressions"
        }, {
            question: "What is the point of Babel?", 
            a: "To compile JavaScript to Java", 
            b: "To compile JavaScript to binary", 
            c: "To compile JavaScript to an older version so the browser can read it", 
            d: "Babel has nothing to do with JavaScript", 
            correctAnswer: "To compile JavaScript to an older version so the browser can read it"
        }
    ],

    TypeScriptQuestions = [
    
    ]
}

module.exports = questions;
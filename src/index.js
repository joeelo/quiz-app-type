document.addEventListener("DOMContentLoaded", function () {
    var pageContainer = document.querySelector(".page-container");
    var quizCategories = document.querySelector(".quiz-categories");
    var quizContainer = document.querySelector(".quiz-container");
    var themeButton = document.querySelector(".toggle-theme");
    var toggleSpan = document.querySelector("span");
    var body = document.querySelector("body");
    var arrow = document.querySelector(".arrow");
    var triangles = document.querySelectorAll(".triangle");
    var questions;
    var selectedAnswer;
    var points = 0;
    var questionIndex = 0;
    var chooseAnswer = function (event) {
        if (event.target.classList.contains("answer")) {
            var div = event.target;
            addFocus(div);
            selectedAnswer = div.textContent;
        }
    };
    var addFocus = function (div) {
        document.querySelectorAll(".answer").forEach(function (el) {
            el.classList.remove("focused");
        });
        div.classList.add("focused");
    };
    var checkAnswer = function () {
        console.log(selectedAnswer);
        if (selectedAnswer === questions[questionIndex].correctAnswer) {
            points += 10;
            showCorrectPrompt();
        }
        else {
            showWrongPrompt();
        }
        questionIndex++;
        selectedAnswer = "";
    };
    var pickCatgeory = function (event) {
        var category = event.target.textContent;
        switch (category) {
            case "HTTP 2":
                questions = HTTPquestions;
                break;
            case "React":
                questions = ReactQuestions;
                break;
            case "JavaScript":
                questions = JavascriptQuestions;
                break;
        }
        console.log(HTTPquestions);
        populateQuiz();
    };
    var populateQuiz = function () {
        quizCategories.remove();
        quizContainer.style.display = "flex";
        quizContainer.innerHTML += "\n            <div class=\"question-header\"> " + questions[questionIndex].question + "</div>\n            <div class=\"answer\">" + questions[questionIndex].a + "</div>\n            <div class=\"answer\">" + questions[questionIndex].b + "</div>\n            <div class=\"answer\">" + questions[questionIndex].c + "</div>\n            <div class=\"answer\">" + questions[questionIndex].d + "</div>\n            <button class=\"submit-button\"> submit </button>\n        ";
    };
    var nextQuestion = function () {
        quizContainer.innerHTML = "\n            <div class=\"question-header\"> " + questions[questionIndex].question + "</div>\n            <div class=\"answer\">" + questions[questionIndex].a + "</div>\n            <div class=\"answer\">" + questions[questionIndex].b + "</div>\n            <div class=\"answer\">" + questions[questionIndex].c + "</div>\n            <div class=\"answer\">" + questions[questionIndex].d + "</div>\n            <button class=\"submit-button\"> submit </button>\n        ";
    };
    var submitAnswer = function (event) {
        if (event.target.classList.contains("submit-button")) {
            checkAnswer();
        }
    };
    var determineGameFinish = function () {
        if (questionIndex === questions.length) {
            quizContainer.innerHTML = "\n                <div>\n                    <h1> You've got " + points / 10 + " out of " + questions.length + " correct </h1>\n                </div>\n            ";
            console.log("quiz completed");
            return;
        }
    };
    var generateNextQuestion = function (event) {
        determineGameFinish();
        if (event.target.classList.contains("next-question-button")) {
            nextQuestion();
        }
    };
    var showCorrectPrompt = function () {
        quizContainer.innerHTML = "\n            <div> \n                <h1> You are correct!</h1> \n                <button class=\"next-question-button\"> Next question </button>\n            </div>\n        ";
    };
    var showWrongPrompt = function () {
        quizContainer.innerHTML = "\n            <div> \n                <h1> That's not right :( </h1> \n                <h2> The correct answer is actually " + questions[questionIndex].correctAnswer + " </h2>\n                <button class=\"next-question-button\"> Next question </button>\n            </div>\n        ";
    };
    var scrollOnClick = function () {
        console.log("working");
    };
    var toggleTheme = function () {
        if (toggleSpan.innerText === "light") {
            toggleSpan.innerText = "dark";
            body.style.backgroundColor = "#121212";
            body.style.color = "white";
            triangles.forEach(function (tri) {
                tri.style.borderRight = "20px solid white";
                tri.style.borderBottom = "20px solid white";
            });
        }
        else {
            toggleSpan.innerText = "light";
            body.style.backgroundColor = "white";
            body.style.color = "black";
            triangles.forEach(function (tri) {
                tri.style.borderRight = "20px solid black";
                tri.style.borderBottom = "20px solid black";
            });
        }
    };
    quizCategories.addEventListener("click", pickCatgeory);
    quizContainer.addEventListener("click", chooseAnswer);
    quizContainer.addEventListener("click", submitAnswer);
    quizContainer.addEventListener("click", generateNextQuestion);
    themeButton.addEventListener("click", toggleTheme);
    arrow.addEventListener("click", scrollOnClick);
});
var HTTPquestions = [
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
];
var ReactQuestions = [
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
];
var JavascriptQuestions = [
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
];

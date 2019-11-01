document.addEventListener("DOMContentLoaded", function () {
    var pageContainer = document.querySelector(".page-container");
    var quizCategories = document.querySelectorAll(".option");
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
    var pickCatgeory = function (event) {
        if (event.target.classList.contains("option")) {
            console.log(quizCategories);
            var category = event.target.textContent;
            category.trim();
            console.log("why am i null?");
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
        }
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
    var populateQuiz = function () {
        var dynamicQuizCategories = document.querySelector(".quiz-categories");
        dynamicQuizCategories.remove();
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
            quizContainer.innerHTML = "\n                <div>\n                    <h1> You've got " + points / 10 + " out of " + questions.length + " correct </h1>\n                </div>\n                <button class=\"new-quiz-button\"> pick new quiz </button>\n            ";
            return;
        }
    };
    var newQuiz = function (event) {
        if (event.target.classList.contains("new-quiz-button")) {
            quizContainer.innerHTML = "\n                <div class=\"quiz-categories\">\n                    <div class=\"option\">HTTP 2</div>\n                    <div class=\"option\">React</div>\n                    <div class=\"option\">JavaScript</div>\n                    <div class=\"option\">TypeScript</div>\n                    <div class=\"option\">Docker</div>\n                    <div class=\"option\">GraphQL</div>\n                    <div class=\"option\">Algorithms</div>\n                    <div class=\"option\">HTML5 Canvas</div>\n                    <div class=\"option\">Node</div>\n                </div>\n            ";
            points = 0;
            questionIndex = 0;
            selectedAnswer = "";
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
        var pageHeight = window.innerHeight;
        window.scroll({
            behavior: "smooth",
            top: pageHeight
        });
    };
    var toggleTheme = function () {
        if (toggleSpan.innerText === "light") {
            toggleSpan.innerText = "dark";
            body.style.backgroundColor = "#121212";
            body.style.color = "white";
            triangles.forEach(function (tri) {
                tri.classList.remove("black-border");
                tri.classList.add("white-border");
            });
        }
        else {
            toggleSpan.innerText = "light";
            body.style.backgroundColor = "azure";
            body.style.color = "black";
            triangles.forEach(function (tri) {
                tri.classList.add("black-border");
                tri.classList.remove("white-border");
            });
        }
    };
    pageContainer.addEventListener("click", pickCatgeory);
    quizContainer.addEventListener("click", chooseAnswer);
    quizContainer.addEventListener("click", submitAnswer);
    quizContainer.addEventListener("click", generateNextQuestion);
    quizContainer.addEventListener("click", newQuiz);
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

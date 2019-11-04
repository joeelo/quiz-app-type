"use strict";
exports.__esModule = true;
var questions_1 = require("./questions");
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
            var category = event.target.textContent;
            category.trim();
            switch (category) {
                case "HTTP 2":
                    questions = questions_1.QuizQuestions.HTTPquestions;
                    break;
                case "React":
                    questions = questions_1.QuizQuestions.ReactQuestions;
                    break;
                case "JavaScript":
                    questions = questions_1.QuizQuestions.JavascriptQuestions;
                    break;
                case "TypeScript":
                    questions = questions_1.QuizQuestions.TypeScriptQuestions;
                    break;
                case "Docker & Kubernetes":
                    questions = questions_1.QuizQuestions.DKQuestions;
                    break;
                case "GraphQL":
                    questions = questions_1.QuizQuestions.GraphQLQuestions;
                    break;
                case "Algorithms":
                    questions = questions_1.QuizQuestions.AlgorithmQuestions;
                    break;
                case "HTML5 Canvas":
                    questions = questions_1.QuizQuestions.HTML5CanvasQuestions;
                    break;
                case "Node":
                    questions = questions_1.QuizQuestions.NodeQuestions;
                    break;
            }
            populateQuiz();
        }
    };
    var checkAnswer = function () {
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
            quizContainer.innerHTML = "\n                <div>\n                    <h1> You've got " + points / 10 + " out of " + questions.length + " correct </h1>\n                    <button class=\"new-quiz-button\"> pick new quiz </button>\n                </div>\n            ";
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
        var buttons = document.querySelectorAll("button");
        if (toggleSpan.innerText === "light") {
            toggleSpan.innerText = "dark";
            body.style.backgroundColor = "#121212";
            body.style.color = "white";
            buttons.forEach(function (button) { return button.classList.add("dark"); });
            triangles.forEach(function (tri) {
                tri.classList.remove("black-border");
                tri.classList.add("white-border");
            });
        }
        else {
            toggleSpan.innerText = "light";
            body.style.backgroundColor = "azure";
            body.style.color = "black";
            toggleSpan.classList.remove("dark");
            buttons.forEach(function (button) { return button.classList.remove("dark"); });
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

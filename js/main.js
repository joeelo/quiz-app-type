/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var questions_1 = __webpack_require__(/*! ./questions */ "./src/questions.js");
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


/***/ }),

/***/ "./src/questions.js":
/*!**************************!*\
  !*** ./src/questions.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.QuizQuestions = {
    HTTPquestions: [
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
    ReactQuestions: [
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
    JavascriptQuestions: [
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
    TypeScriptQuestions: [
        {
            question: "What are the different data types supported by TypeScript?",
            a: "boolean, number, string, array, enum, any, void",
            b: "boolean, number, string, function, object, any",
            c: "object, any, void",
            d: "void, enum, boolean, function",
            correctAnswer: "boolean, number, string, array, enum, any, void"
        }
    ],
    DKQuestions: [
        {
            question: "Is Docker the same as a VM?",
            a: "Yes, docker is a containerized virtual machine",
            b: "No, because docker doesn't run on desktop",
            c: "Docker is a type of virtual machine",
            d: "No, docker is a containerized system",
            correctAnswer: ""
        }, {
            question: "Is Docker the same as a VM?",
            a: "Yes, docker and a VM are the same thing",
            b: "No, because docker doesn't run on desktop",
            c: "Docker is a type of virtual machine, that runs solely in containers",
            d: "No, docker does not need the same requirements such as an OS to be run",
            correctAnswer: "No, docker does not need the same requirements such as an OS to be run"
        }
    ],
    GraphQLQuestions: [
        {
            question: "What is GraphQL?",
            a: "GraphQL is a query language created by Facebook in 2012 which provides a common interface between the client and the server for data fetching and manipulations",
            b: "GraphQL is a query language created by AirBnB in 2009 which provides a common interface between the client and the server for data fetching and caching",
            c: "GraphQL is RESTFul way of transferring data from servers to the client.",
            d: "GraphQL is a query language to help with authentication.",
            correctAnswer: "GraphQL is a query language created by Facebook in 2012 which provides a common interface between the client and the server for data fetching and manipulations"
        }
    ],
    AlgorithmQuestions: [
        {
            question: "What is the time complexity of a Merge Sort?",
            a: "O(n)",
            b: "O(1)",
            c: "O(nlogn)",
            d: "O(n^2)",
            correctAnswer: "O(nlogn)"
        }
    ],
    HTML5CanvasQuestions: [
        {
            question: "How many times a second is the canvas redrawn?",
            a: "You set the frames",
            b: "30 times per second",
            c: "60 times per second",
            d: "Depends on the browser",
            correctAnswer: "60 times per second"
        }
    ],
    NodeQuestions: [
        {
            question: "Node is written in what language?",
            a: "JavaScript",
            b: "PHP",
            c: "Python",
            d: "Flutter",
            correctAnswer: "JavaScript"
        }
    ]
};


/***/ })

/******/ });
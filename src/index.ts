import {QuizQuestions} from "./questions"

document.addEventListener("DOMContentLoaded", () => {
    const pageContainer: HTMLDivElement = document.querySelector(".page-container");
    const quizCategories: any = document.querySelectorAll(".option")
    const quizContainer: HTMLDivElement = document.querySelector(".quiz-container");
    const themeButton: HTMLButtonElement = document.querySelector(".toggle-theme");
    const toggleSpan: HTMLSpanElement = document.querySelector("span");
    const body: HTMLBodyElement = document.querySelector("body");
    const arrow: HTMLImageElement = document.querySelector(".arrow");
    const triangles: any = document.querySelectorAll(".triangle");
    let questions;
    let selectedAnswer: string;
    let points: number = 0;
    let questionIndex: number = 0;

    const chooseAnswer = (event):void => {
        if (event.target.classList.contains("answer")) {
            const div = event.target as HTMLElement;
            addFocus(div);
            selectedAnswer = div.textContent;
        }
    }

    const addFocus = (div):void => {
        document.querySelectorAll(".answer").forEach(el => {
            el.classList.remove("focused");
        })
        div.classList.add("focused");
    }

    const pickCatgeory = (event): void => {
        if (event.target.classList.contains("option")) {
            const category: string = event.target.textContent;
            category.trim();
            switch(category) {
                case "HTTP 2":
                    questions = QuizQuestions.HTTPquestions; 
                    break;
                case "React": 
                    questions = QuizQuestions.ReactQuestions;
                    break;
                case "JavaScript": 
                    questions = QuizQuestions.JavascriptQuestions;
                    break;
                case "TypeScript": 
                    questions = QuizQuestions.TypeScriptQuestions;
                    break;
                case "Docker & Kubernetes": 
                    questions = QuizQuestions.DKQuestions; 
                    break; 
                case "GraphQL": 
                    questions = QuizQuestions.GraphQLQuestions;
                    break;
                case "Algorithms": 
                    questions = QuizQuestions.AlgorithmQuestions; 
                    break;
                case "HTML5 Canvas": 
                    questions = QuizQuestions.HTML5CanvasQuestions;
                    break;
                case "Node":
                    questions = QuizQuestions.NodeQuestions;
                    break;
            }
            populateQuiz();
        }
    }

    const checkAnswer = ():void => {
        if (selectedAnswer === questions[questionIndex].correctAnswer) {
            points += 10;
            showCorrectPrompt();
        } else {
            showWrongPrompt();
        }
        questionIndex++;
        selectedAnswer = "";
    }

    const populateQuiz = ():void => {
        const dynamicQuizCategories: HTMLDivElement = document.querySelector(".quiz-categories");
        dynamicQuizCategories.remove();
        quizContainer.style.display = "flex";
        quizContainer.innerHTML += `
            <div class="question-header"> ${questions[questionIndex].question}</div>
            <div class="answer">${questions[questionIndex].a}</div>
            <div class="answer">${questions[questionIndex].b}</div>
            <div class="answer">${questions[questionIndex].c}</div>
            <div class="answer">${questions[questionIndex].d}</div>
            <button class="submit-button"> submit </button>
        `
    }

    const nextQuestion = ():void => {
        quizContainer.innerHTML = `
            <div class="question-header"> ${questions[questionIndex].question}</div>
            <div class="answer">${questions[questionIndex].a}</div>
            <div class="answer">${questions[questionIndex].b}</div>
            <div class="answer">${questions[questionIndex].c}</div>
            <div class="answer">${questions[questionIndex].d}</div>
            <button class="submit-button"> submit </button>
        `
    }

    const submitAnswer = (event):void => {
        if (event.target.classList.contains("submit-button")) {
            checkAnswer();
        }
    }

    const determineGameFinish = ():void => {
        if (questionIndex === questions.length) {
            quizContainer.innerHTML = `
                <div>
                    <h1> You've got ${ points / 10 } out of ${questions.length} correct </h1>
                    <button class="new-quiz-button"> pick new quiz </button>
                </div>
            `
        return;
        }
    }

    const newQuiz = (event):void => {
        if (event.target.classList.contains("new-quiz-button")) {
            quizContainer.innerHTML = `
                <div class="quiz-categories">
                    <div class="option">HTTP 2</div>
                    <div class="option">React</div>
                    <div class="option">JavaScript</div>
                    <div class="option">TypeScript</div>
                    <div class="option">Docker</div>
                    <div class="option">GraphQL</div>
                    <div class="option">Algorithms</div>
                    <div class="option">HTML5 Canvas</div>
                    <div class="option">Node</div>
                </div>
            `
            points = 0;
            questionIndex = 0;
            selectedAnswer = "";
        }
    }

    const generateNextQuestion = (event):void => {
        determineGameFinish();
        if (event.target.classList.contains("next-question-button")) {
            nextQuestion();
        }
    }

    const showCorrectPrompt = ():void => {
        quizContainer.innerHTML = `
            <div> 
                <h1> You are correct!</h1> 
                <button class="next-question-button"> Next question </button>
            </div>
        `
    }


    const showWrongPrompt = ():void => {
        quizContainer.innerHTML = `
            <div> 
                <h1> That's not right :( </h1> 
                <h2> The correct answer is actually ${questions[questionIndex].correctAnswer} </h2>
                <button class="next-question-button"> Next question </button>
            </div>
        `
    }

    const scrollOnClick = ():void => {
        const pageHeight = window.innerHeight;
        window.scroll({
            behavior: "smooth", 
            top: pageHeight
        })
    }

    const toggleTheme = ():void => {
        const buttons: any = document.querySelectorAll("button");
        if (toggleSpan.innerText === "light") {
            toggleSpan.innerText = "dark";
            body.style.backgroundColor = "#121212";
            body.style.color = "white";
            buttons.forEach(button => button.classList.add("dark"));
            triangles.forEach(tri => {
                tri.classList.remove("black-border");
                tri.classList.add("white-border")
            });
        } else {
            toggleSpan.innerText = "light"
            body.style.backgroundColor = "azure";
            body.style.color = "black";
            toggleSpan.classList.remove("dark");
            buttons.forEach(button => button.classList.remove("dark"));
            triangles.forEach(tri => {
                tri.classList.add("black-border")
                tri.classList.remove("white-border");
            });
        }
    }

    pageContainer.addEventListener("click", pickCatgeory);
    quizContainer.addEventListener("click", chooseAnswer);
    quizContainer.addEventListener("click", submitAnswer);
    quizContainer.addEventListener("click", generateNextQuestion);
    quizContainer.addEventListener("click", newQuiz);
    themeButton.addEventListener("click", toggleTheme);
    arrow.addEventListener("click", scrollOnClick);
})

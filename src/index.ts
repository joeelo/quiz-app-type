document.addEventListener("DOMContentLoaded", () => {
    const pageContainer: HTMLDivElement = document.querySelector(".page-container");
    const quizCategories: HTMLDivElement = document.querySelector(".quiz-categories");
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

    const checkAnswer = ():void => {
        console.log(selectedAnswer);
        if (selectedAnswer === questions[questionIndex].correctAnswer) {
            points += 10;
            showCorrectPrompt();
        } else {
            showWrongPrompt();
        }
        questionIndex++;
        selectedAnswer = "";
    }

    const pickCatgeory = (event): void => {
        const category: string = event.target.textContent;
        switch(category) {
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

    const populateQuiz = ():void => {
        quizCategories.remove();
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

    const nextQuestion = () => {
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
                </div>
            `
        console.log("quiz completed");
        return;
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
        console.log("working");
    }

    const toggleTheme = ():void => {
        if (toggleSpan.innerText === "light") {
            toggleSpan.innerText = "dark";
            body.style.backgroundColor = "#121212";
            body.style.color = "white";
            triangles.forEach(tri => {
                tri.style.borderRight = "20px solid white"; 
                tri.style.borderBottom = "20px solid white";
            });
        } else {
            toggleSpan.innerText = "light"
            body.style.backgroundColor = "white";
            body.style.color = "black";
            triangles.forEach(tri => {
                tri.style.borderRight = "20px solid black"; 
                tri.style.borderBottom = "20px solid black";
            });
        }
    }

    quizCategories.addEventListener("click", pickCatgeory);
    quizContainer.addEventListener("click", chooseAnswer);
    quizContainer.addEventListener("click", submitAnswer);
    quizContainer.addEventListener("click", generateNextQuestion);
    themeButton.addEventListener("click", toggleTheme);
    arrow.addEventListener("click", scrollOnClick);
})

const HTTPquestions = [
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
]

const ReactQuestions = [
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
]

const JavascriptQuestions = [
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
]
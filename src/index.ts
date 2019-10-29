document.addEventListener("DOMContentLoaded", () => {
    const pageContainer: HTMLDivElement = document.querySelector(".page-container");
    const quizCategories: HTMLDivElement = document.querySelector(".quiz-categories");
    const quizContainer: HTMLDivElement = document.querySelector(".quiz-container");
    const themeButton: HTMLButtonElement = document.querySelector(".toggle-theme");
    const toggleSpan: HTMLSpanElement = document.querySelector("span");
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

    const generateNextQuestion = (event):void => {
        if (event.target.classList.contains("next-question-button")) {
            nextQuestion();
        }
    }

    const showCorrectPrompt = ():void => {
        if (questionIndex !== questions.length - 1) {
            quizContainer.innerHTML = `
                <div> 
                    <h1> You are correct!</h1> 
                    <button class="next-question-button"> Next question </button>
                </div>
            `
        } else {
            quizContainer.innerHTML = `
                <h1>${points}</h1>
            `
        }

    }
    
    const showWrongPrompt = ():void => {
        console.log(selectedAnswer);
        quizContainer.innerHTML = `
            <div> 
                <h1> That's not right :( </h1> 
                <h2> The correct answer is actually ${questions[questionIndex].correctAnswer} </h2>
                <button class="next-question-button"> Next question </button>
            </div>
        `
    }

    const toggleTheme = ():void => {
        if (toggleSpan.innerText === "light") {
            toggleSpan.innerText = "dark";
            pageContainer.style.backgroundColor = "#121212";
            pageContainer.style.color = "white";
        } else {
            toggleSpan.innerText = "light"
            pageContainer.style.backgroundColor = "white";
            pageContainer.style.color = "black";
        }
    }

    quizCategories.addEventListener("click", pickCatgeory);
    quizContainer.addEventListener("click", chooseAnswer);
    quizContainer.addEventListener("click", submitAnswer);
    quizContainer.addEventListener("click", generateNextQuestion);
    themeButton.addEventListener("click", toggleTheme);
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
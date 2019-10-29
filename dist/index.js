const questions = [
    {
        question: "what is http2 good for?",
        a: "reduced latency",
        b: "same as http1",
        c: "Data framing differentiation",
        d: "other things",
        correctAnswer: "a"
    }
];
document.addEventListener("DOMContentLoaded", () => {
    console.log(questions);
    const elHelper = (input) => document.querySelector(`.${input}`);
    let mainForm = document.querySelector(".main-form");
    let inputValue = "this is a value";
    const inputInitialValue = () => {
        const firstInput = elHelper("first-input");
        firstInput.value = inputValue;
        console.log(firstInput);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(elHelper("first-input"));
        console.log("working");
        document.querySelectorAll('input[type=radio]:checked').forEach(item => {
            console.log(item);
        });
    };
    const formContainer = document.querySelector(".form-container");
    if (mainForm) {
        mainForm.addEventListener("submit", submitHandler);
        // $(mainForm).submit(submitHandler) 
    }
    inputInitialValue();
});
//# sourceMappingURL=index.js.map
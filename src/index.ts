document.addEventListener("DOMContentLoaded", () => {

    const elHelper: any = (input) => document.querySelector(`.${input}`);

    let mainForm: HTMLElement = document.querySelector(".main-form");

    let inputValue: string = "this is a value"

    const inputInitialValue = (): void => {
        const firstInput:HTMLInputElement = elHelper("first-input");
        firstInput.value = inputValue;
        console.log(firstInput);
    }

    const submitHandler = (event: any): void => {
        event.preventDefault();
        console.log(elHelper("first-input"));
        console.log("working");
        document.querySelectorAll('input[type=radio]:checked').forEach( item => {
          console.log(item);
        })
    }

    const formContainer: HTMLElement = document.querySelector(".form-container");

    if (mainForm) {
        mainForm.addEventListener("submit", submitHandler);
        // $(mainForm).submit(submitHandler) 
    }
    inputInitialValue();
})
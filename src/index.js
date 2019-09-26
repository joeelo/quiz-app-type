document.addEventListener("DOMContentLoaded", function () {
    var elHelper = function (input) { return document.querySelector("." + input); };
    var mainForm = document.querySelector(".main-form");
    var inputValue = "this is a value";
    var inputInitialValue = function () {
        var firstInput = elHelper("first-input");
        firstInput.value = inputValue;
        console.log(firstInput);
    };
    var submitHandler = function (event) {
        event.preventDefault();
        console.log(elHelper("first-input"));
        console.log("working");
        document.querySelectorAll('input[type=radio]:checked').forEach(function (item) {
            console.log(item);
        });
    };
    var formContainer = document.querySelector(".form-container");
    if (mainForm) {
        mainForm.addEventListener("submit", submitHandler);
        // $(mainForm).submit(submitHandler) 
    }
    inputInitialValue();
});

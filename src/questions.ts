export const QuizQuestions: any = {
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
}
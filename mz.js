var questions = [
    {
        id: 1,
        question: "Who is Muhammad Zulquarnain:",
        options: {
            a: "Frontend Developer",
            b: "Wordpress Developer",
            c: "Artificial Student",
            d: "All of Above",

        },
        answer: "All of Above"
    },
    {
        id: 2,
        question: "What i full form of Mz_dev",
        options: {
            a: "M.Zulquarnain_dew",
            b: "M.Zulquarnain_dev",
            c: "Zulquarnain.dev",
            d: "Zulquarnain_dev",

        },
        answer: "M.zulquarnain_dev"
    },
    {
        id: 3,
        question: "who is the Qaidi no 804:",
        options: {
            a: "Arif Alvi",
            b: "Murshad Imran Khan ❤️",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Murshad Imran khan❤️"
    },
    {
        id: 4,
        question: "The 'function' and  'var' are known as:",
        options: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    }
    ,
    ,
    {
        id: 5,
        question: "How many prayers in a day:",
        options: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        id: 6,
        question: "How many total surah in quran",
        options: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        id: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        options: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
   
]

//set username or user email
var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")
userName.innerHTML = localStorage.getItem("name")
userEmail.innerHTML = localStorage.getItem("email")

var htmlQues = document.getElementById("htmlQues")
var htmlOptions = document.getElementById("htmlOptions")
var indexNum = 0

//counter
var currentCount = document.getElementById("currentCount")
var totalCount = document.getElementById("totalCount")
totalCount.innerHTML = questions.length

function startQuiz(){
    console.log("startQuiz", questions[indexNum].options)
    htmlOptions.innerHTML = questions[indexNum].question

    htmlOptions.innerHTML = ""
    for(var key in questions[indexNum].options){
        // console.log("key", key, questions[indexNum].options[key])
         var option = questions[indexNum].options[key]
        htmlOptions.innerHTML += ` <li> ${option} </li>`
    }
}


function nextQues() {
    if (indexNum < questions.length - 1) {
        indexNum++
        currentCount.innerHTML++
        console.log("nextQues", indexNum)
        startQuiz()
    }
}



var questions = [
    {
        id: 1,
        question: "Who is Muhammad Zulquarnain:",
        options: {
            a: "Frontend Developer",
            b: "Wordpress Developer",
            c: "Artificial Intelligence Student",
            d: "All of Above",

        },
        answer: "All of Above"
    },
    
    {
        id: 2,
        question: "What i full form of Mz_dev:",
        options: {
            a: "M.Zulquarnain_dew",
            b: "M.Zulquarnain_dev",
            c: "Zulquarnain.dev",
            d: "Zulquarnain_dev",

        },
        answer: "M.Zulquarnain_dev"
    },
    {
        id: 3,
        question: "who is the Qaidi no 804:",
        options: {
            a: "Arif Alvi",
            b: "Murshad Imran Khan ❤️",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Murshad Imran Khan ❤️"
    },
    {
        id: 4,
        question: "The 'function' and  'var' are known as:",
        options: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    },
    {
        id: 5,
        question: "How many prayers in a day:",
        options: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        id: 6,
        question: "How many total surah in quran",
        options: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        id: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        options: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
]



// set user name or user email
var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")
userName.innerHTML = localStorage.getItem("name")
userEmail.innerHTML = localStorage.getItem("email")

var htmlQues = document.getElementById("htmlQues")
var htmlOptions = document.getElementById("htmlOptions")
var indexNum = 0

var nextQuesBtn = document.getElementById("nextQuesBtn")
var correctAnsCount = 0
var wrongAnsCount = 0



// counter
var currentCount = document.getElementById("currentCount")
var totalCount = document.getElementById("totalCount")
totalCount.innerHTML = questions.length

var resultContainer = document.getElementsByClassName("resultContainer")[0]
var correctAns = document.getElementById("correctAns")
var wrongAns = document.getElementById("wrongAns")
var resultAns = document.getElementById("result")




function startQuiz() {
    console.log("startQuiz", questions[indexNum].options)
    htmlQues.innerHTML = questions[indexNum].question

    htmlOptions.innerHTML = ""
    for (var key in questions[indexNum].options) {
        // console.log("key", key, questions[indexNum].options[key])
        var option = questions[indexNum].options[key]
        htmlOptions.innerHTML += ` <li onclick = "checkAnswer(this)" >${option}</li>`

    }

    // {
    //     a: "6",
    //     b: "5",
    //     c: "3",
    //     d: "none",

    // }


}

var quizContainer = document.getElementById("quizContainer")

function nextQues() {
    if (indexNum < questions.length - 1) {
        indexNum++
        currentCount.innerHTML++
        console.log("nextQues", indexNum)
        nextQuesBtn.className = "hide"
        startQuiz()
    } else {
        console.log("khatam tata bye bye")
        quizContainer.style.display = "none"
        resultContainer.className = "show"
        correctAns.innerHTML = correctAnsCount
        wrongAns.innerHTML = wrongAnsCount
    }
    // console.log(correctAnsCount, "correctAnsCount")
    // console.log(wrongAnsCount, "wrongAnsCount")
}

 


//function checkAnswer(ele)
function checkAnswer(ele){
     // 1st way
    // console.log("ele", ele.innerHTML)
    //  console.log("check", ele.innerHTML === questions[indexNum].answer)
    // console.log("questions[indexNum]", questions[indexNum].answer)

        var liOptions = htmlOptions.getElementsByTagName("li")
        var isCheck = ele.innerHTML ===questions[indexNum].answer
        if(isCheck){
            console.log("correct")
            ele.className = "correctAns"
            correctAnsCount++
        } else{
            console.log("Incorrect!")
            ele.className = "wrongAns"
            wrongAnsCount++
            for(li of liOptions){
                if(li.innerHTML ===questions[indexNum].answer){
                    li.className = "correctAns"
                }
            }
        }


 // console.log("htmlOptions", htmlOptions.getElementsByTagName("li"))
 for (var li of liOptions) {
    console.log(li)
    li.style.pointerEvents = "none"
    li.style.cursor = "no-drop !important"
}

// show next Ques btn  the selection
nextQuesBtn.className = "show"


}


// function timer(){

// }


function startTimer(duration, displayElement, callback) {
    var timer = duration;
    var minutes, seconds;

    var intervalId= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalId);
            if (callback && typeof callback === 'function') {
                callback();
        }
        }
    }, 1000);
}


var quizTimeInSeconds = 30; // 1 minute timer for the quiz
var display = document.getElementById('timer'); // Assuming there is an element with id 'timer' to display the timer
var quizContainer = document.getElementById("quizContainer")

startTimer(quizTimeInSeconds, display, function() {
    // Callback function to execute when timer runs out
    alert('Time is up!');
       if (alert){
           resultContainer.className = "show"
          resultAns = (correctAnsCount/questions.length)*100
          console.log(resultAns)
          //   console.log(resultContainer)
          //    document.getElementById("result").innerHTML = resultContainer
          
          result.innerHTML = resultAns 
          result.innerHTML = "Your Score is " + resultAns + "%"
        correctAns.innerHTML = correctAnsCount
        wrongAns.innerHTML = wrongAnsCount
         quizContainer.style.display = "none"
        }
       

    }
)
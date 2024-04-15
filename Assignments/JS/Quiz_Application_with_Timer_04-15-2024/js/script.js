const start_btn = document.querySelector(".start_btn");
const info_box  = document.querySelector(".info_box");
const exit_quiz = document.querySelector(".exit_quiz");
const continue_btn  = document.querySelector("#continue_btn");
const quiz_box  = document.querySelector(".quiz_box");
const que_text  = document.querySelector(".que_text");
const option_list = document.querySelector(".option_list");
const timer_sec = document.querySelector(".timer_sec")

let timer = 15;

start_btn.addEventListener("click", function(){
    info_box.classList.add("activeInfo");
    start_btn.style.display = "none";
});

exit_quiz.addEventListener("click", function(){
    info_box.classList.remove("activeInfo");
    start_btn.style.display = "block";
});

continue_btn.addEventListener("click", function(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    loadQuestion(0);
});

function loadQuestion(index){
    let allOptions = questions[index].options;
    que_text.innerHTML = questions[index].question;
    
    for(let i=0; i<allOptions.length; i++){
        option_list.innerHTML +=`<div class="option">
                                    <span>${allOptions[i]}</span>
                                </div>`;
    }
    let timerInterval = setInterval(timerCoint,1000);
}
let timerCoint = function (){
    timer --;
    timer_sec.textContent= timer;
}



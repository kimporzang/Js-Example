// 먼저 사용할 값을 변수에 담아줍니다.
const answerBoxs= document.querySelectorAll(".quiz-box__answerbox")
const numberBox = document.querySelectorAll(".number-box")
const checkIcon = document.querySelectorAll("#check-icon")
const submitButton = document.querySelector(".quiz-box__button")
let myAnswer = null   


const firstBtnClick = answerBoxs[0].addEventListener('click', function () {
    for (let i=0; i<4; i++){
        answerBoxs[i].classList.remove('click');
        numberBox[i].classList.remove('click2');
        checkIcon[i].classList.remove('show');
        }
    answerBoxs[0].classList.add('click');
    numberBox[0].classList.add('click2');
    checkIcon[0].classList.add('show');
})

firstBtnClick
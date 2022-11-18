//사용할 아이템을 변수에 담아준다.
const tabButtons = document.querySelectorAll(".tab-list__button");
const tabContents = document.querySelectorAll(".tab-list__content");

//(n번째)버튼 클릭 시 동작
function tabButtonClick(){
    for (let i=0; i<3; i++){   //반복문을 통해 버튼 클릭 동작을 최소화한다.
        tabButtons[i].addEventListener('click', () => {
            removeClass();
            tabButtons[i].classList.add('click-add');
            tabContents[i].classList.add('show');
        });
    }
}

function removeClass(){       // 클래스를 제거하는 기능인 함수를 만든다.
    for (let i=0; i<3; i++){
        tabButtons[i].classList.remove('click-add');
        tabContents[i].classList.remove('show');
    }
}


tabButtonClick()
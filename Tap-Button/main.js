//사용할 아이템을 변수에 담아준다.
const tabButtons = document.querySelectorAll(".tab-list__button");
const tabContents = document.querySelectorAll(".tab-list__content");

//첫번째 버튼 클릭 시 동작
tabButtons[0].addEventListener('click', () => {
    //기존 버튼 효과 제거
    removeClass()   // 함수명은 동사+명사 형태로 작성한다.
    
    //클릭된 버튼에 효과 추가
    tabButtons[0].classList.add('click-add');
    tabContents[0].classList.add('show');
});

function removeClass(){       // 클래스를 제거하는 기능인 함수를 만든다.
    for (let i=0; i<3; i++){
        tabButtons[i].classList.remove('click-add');
        tabContents[i].classList.remove('show');
    }
}



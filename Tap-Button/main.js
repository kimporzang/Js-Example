//사용할 아이템을 변수에 담아준다.
const tabButtons = document.querySelectorAll(".tab-list__button");
const tabContents = document.querySelectorAll(".tab-list__content");

//첫번째 버튼 클릭 시 동작
tabButtons[0].addEventListener('click', () => {
    //기존 버튼 효과 제거
    tabButtons[1].classList.remove('click-add');
    tabButtons[2].classList.remove('click-add');
    tabContents[1].classList.remove('show');
    tabContents[2].classList.remove('show');
    //클릭된 버튼에 효과 추가
    tabButtons[0].classList.add('click-add');
    tabContents[0].classList.add('show');
});

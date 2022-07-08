let menuSwitch = document.querySelector('.burger__burger');
let menuBackGround = document.querySelector('.burger__menu__wrap');
let menuMobile = document.querySelector('.burger__menu__container');
let menuClose = document.querySelector('.close-mark');

menuSwitch.addEventListener('click', function(){
  menuBackGround.classList.toggle('active');
  menuMobile.classList.toggle('active');
})

menuClose.addEventListener('click', function(){
  menuBackGround.classList.toggle('active');
  menuMobile.classList.toggle('active');
})

menuMobile.addEventListener('click', function (event) {
	if(event.target.tagName === "A") {
    menuBackGround.classList.toggle('active');
    menuMobile.classList.toggle('active');
  }
  })

  menuBackGround.addEventListener('click', e => {
    let target = e.target;
    let menuIsActive = menuMobile.classList.contains('active');

    if (!menuMobile.contains(target) && !menuClose.contains(target) && menuIsActive) {
      menuBackGround.classList.toggle('active');
      menuMobile.classList.toggle('active');
    }
    })

  

console.log('Моя самооценка - 75 баллов: \nВёрстка соответствует макету. Ширина экрана 390px +48; \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15; \nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22')
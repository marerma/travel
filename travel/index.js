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

    const overlay = document.querySelector('.overlay')
    let popUpLinks = document.querySelectorAll('.popup-open');
    let popUp = document.querySelector('.popup');

    function openPopup (a) {
      a.classList.add('open');
    }

    function closePopUp (a) {
      a.classList.remove('open');
    }

    popUpLinks.forEach((el) => {
      el.addEventListener('click', function() {
        openPopup(popUp)
        openPopup(overlay)
      })
    })

    overlay.addEventListener('click', () => {
      closePopUp(popUp)
      closePopUp(overlay)
    })

   
   const signIn = document.querySelector('.sign-button')
   signIn.addEventListener('click', (event) => {
     event.preventDefault()
     let form = document.querySelector('.get-login-data')
     let useremail = form.elements.useremail.value
     let password = form.elements.userpassword.value
     if (useremail && password) { 
      alert(`Your Email: ${useremail} \nYour password: ${password}`)
      } else if (!useremail) {
        password? alert('Enter your Email!') : alert('Enter your data!')
      } else {
        alert('Enter your password!')
    }
  })
  
   

  const socialMediaBtns = document.querySelector('.popup_socialmedia-buttons')
  const header = document.querySelector('.popup__header')
  const linkForgot = document.querySelector('.question-forgot')
  const registerQ = document.querySelector('.account-question')
  const registerLink = document.querySelector('.popup-link')
  const line =  document.querySelector('.popup-line-account')
  registerLink.setAttribute('state', 'active')
  const form = document.querySelector('.get-login-data')
  

  function ChangeLoginToSign () {
  socialMediaBtns.style.display = "none"
  linkForgot.style.display = "none"
  header.textContent = "Create account"
  signIn.textContent = "Sign Up"
  registerQ.textContent = "Already have an account?"
  registerLink.textContent = "Log in"
  line.style.marginTop  = "15px"
  registerLink.state = 'inactive'
  form.style.paddingTop = "0px"
}

function ChangeSignToLogin () {
  socialMediaBtns.style.display = "block"
  linkForgot.style.display = "block"
  header.textContent = "Log in to your account"
  signIn.textContent = "Sign In"
  registerQ.textContent = "Don't have an account?"
  registerLink.textContent = "Register"
  registerLink.state = 'active'
  line.style.marginTop  = "0px"
  form.style.paddingTop = "10px"
}

const registration = document.querySelector('.popup-link')

registration.addEventListener('click', () => {
  if (registerLink.state === 'inactive') {
      ChangeSignToLogin()
  } else { ChangeLoginToSign ()
  }
})


  
  
  

/*console.log('Моя самооценка - 75 баллов: \nВёрстка соответствует макету. Ширина экрана 390px +48; \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15; \nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22')*/
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


/*SLIDER*/
const screenWidth = screen.width
const slider = document.querySelector('.destinations__slider')
const slides = document.querySelectorAll('.slider-image-box')
const dots = document.querySelectorAll('.dots')
const dotOne = document.querySelector('.checker-1')

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const arrows = document.querySelector('.btn-slider')

let position
let n
let m
const positionMoveFull = 860
const positionMoveMiddle = 300
const positionMovePad = 100


function removeDotsClass() {
  for (dot of dots) {
    dot.classList.remove('active')
  }
}

function toLeft () {
  removeDotsClass()
  slider.style.left = position - m + 'px'
  dots[dots.length-1].classList.add('active')
}

function toRight () {
  removeDotsClass()
  slider.style.left = position + m + 'px'
  dots[n].classList.add('active')
}

function toCenter () {
  removeDotsClass()
  slider.style.left = position + 'px'
  dots[n + 1].classList.add('active')
}


if (screenWidth > 1121) {
  n = 0
  position = 0
  m = positionMoveFull
  
slides[n].addEventListener('click', ()=> {toRight()})
slides[n + 1].addEventListener('click', ()=> {toCenter()})
slides[dots.length-1].addEventListener('click', ()=> {toLeft()})
dots[n].addEventListener('click', ()=> {toRight()})
dots[n + 1].addEventListener('click', ()=> {toCenter()})
dots[dots.length-1].addEventListener('click', ()=> {toLeft()})
} 

if (screenWidth > 768 && screenWidth <= 1121 ) {
  n = 0
  position = 0
  m = positionMoveMiddle
  
slides[n].addEventListener('click', ()=> {toRight()})
slides[n + 1].addEventListener('click', ()=> {toCenter()})
slides[dots.length-1].addEventListener('click', ()=> {toLeft()})
dots[n].addEventListener('click', ()=> {toRight()})
dots[n + 1].addEventListener('click', ()=> {toCenter()})
dots[dots.length-1].addEventListener('click', ()=> {toLeft()})
}

if (screenWidth > 391 && screenWidth <= 768 ) {
  n = 0
  position = 0
  m = 100
  
slides[n].addEventListener('click', ()=> {toRight()})
slides[n + 1].addEventListener('click', ()=> {toCenter()})
slides[dots.length-1].addEventListener('click', ()=> {toLeft()})
dots[n].addEventListener('click', ()=> {toRight()})
dots[n + 1].addEventListener('click', ()=> {toCenter()})
dots[dots.length-1].addEventListener('click', ()=> {toLeft()})
}



if (screenWidth <= 391) {

 position = 0
 n = 0
 m = 375
 activeDot(n) 

  next.addEventListener('click', ()=> {
    nextSlide()})
  prev.addEventListener('click', ()=> {
    rightSlide()})
  }
 


function activeDot (a) {
  for (dot of dots) {
   dot.classList.remove('active')
  }
  dots[a].classList.add('active')
}

let index = 0

function nextSlide () {
  arrows.style.opacity = '0'
  if (index == slides.length - 1) {
    index = 0
    position = 0
    slider.style.left = 0
    activeDot(index)    
  } 
  else {
    index++
    activeDot(index)
    slider.style.left = position - m + 'px'
    arrows.style.left -= m + 'px'
    position = position - m 
  }
  setTimeout(function() {
    arrows.style.opacity = '1'
  }, 1000)

  }

  function rightSlide () {
    arrows.style.opacity = '0'
    if (index === 0) {
      index = slides.length - 1
      slider.style.left = -750 + 'px'
      position = - 750 
      activeDot(index)
    }
     else {
      index--
      activeDot(index)
      slider.style.left = position + m + 'px'
      arrows.style.left -= m + 'px'
      position = position + m 
    }
    setTimeout(function() {
      arrows.style.opacity = '1'
    }, 1000)
  
  }
    

    
 

  
  

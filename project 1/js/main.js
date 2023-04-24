const button = document.getElementById('burger-button')
const burgerMenu = document.querySelector(".burger-menu")

let boolean = false
let value = -50
let firstInterval, secondInterval

button.addEventListener("click", function() {
  if(boolean === false){
    boolean = true
    clearInterval(secondInterval)
    firstInterval = setInterval(() => {
      if ( value <= -5 ) {
        value++
        burgerMenu.style.right = `${value}%`
        console.log(value)
      }else{
        clearInterval(firstInterval)
      }
    }, 5);


  }else{

    boolean = false
    clearInterval(firstInterval)
    secondInterval = setInterval(() => {
      if ( value >= -60 ) {
        value--
        burgerMenu.style.right = `${value}%`
        console.log(value)
      }else{
        clearInterval(secondInterval)
      }
    }, 5);
    
  }
})

// swiper


const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    //monitor px >= 320px
    991: {
      slidesPerView: 3,
      spaceBetween: 10
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



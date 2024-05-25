/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*==================== Popup ====================*/
const btnOpenVideo = document.querySelectorAll('.cars__video-content')
const carsPopup = document.getElementById('popup');
//Explore Car buttons
const btnExploreCar = document.querySelectorAll('.cars__button'); //select all Explore car button for operation

function popUp(event){
    const clickedElement = event.target;
    const carsPopup = clickedElement.closest('.cars__container').querySelector('.cars__popup'); // Find the popup within the same container
    carsPopup.classList.add('show-popup');
}

btnOpenVideo.forEach(b => b.addEventListener('click', popUp))
btnExploreCar.forEach(b => b.addEventListener('click', popUp));

const btnCloseVideo = document.querySelectorAll('.cars__popup-close');

btnCloseVideo.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.classList.remove('show-popup');
    });
});


/*==================== Swiper ====================*/
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 0,
});

let swiper2 = new Swiper(".mySwiper2", {
    effect: "fade",
    loop: true,
   
    thumbs: {
      swiper: swiper,
    },
});

/*==================== GSAP Animation ====================*/
const controlImg = document.querySelectorAll('.controls__img')

function ScrollAnimation(){
    gsap.from('.cars__brand', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.cars__model', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.cars__description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.cars__button', {opacity: 0, duration: .5, delay: .5, y: -20})
    gsap.from('.cars__video-content', {opacity: 0, duration: .6, delay: .6, y: -20})

    carsPopup.classList.remove('show-popup');
}

controlImg.forEach(c => c.addEventListener('click', ScrollAnimation))
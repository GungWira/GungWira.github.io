gsap.registerPlugin(ScrollTrigger)
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scrollContainer"),
  smooth: true,
});

// LOADING
const loadingPage = document.querySelector(".loading-page")
const loadingPageText = document.querySelector(".loading-page p")
const loadingPageCover = document.querySelector(".loading-page .cover-white-loading")

document.addEventListener("DOMContentLoaded", ()=>{
  loadingPageText.innerHTML = "MENU BUKBER SIAP!"
  setTimeout(() => {
    loadingPageCover.style.transform = "translateY(0%)"
    setTimeout(() => {
      loadingPage.style.transform = "translateY(-100%)"
      setTimeout(() => {
        setUpContent()
      }, 1000);
    }, 1500);
  }, 1500);
})
// LOADING
// WELCOME-SECTION
const overlay = document.querySelector(".overlay")
const overlayChildren = overlay.children
let welcomeText = false
function setUpContent(){
  overlay.style.opacity = 1
  setTimeout(() => {
    for(let i=0; i<overlayChildren.length; i++){
      overlayChildren[i].classList.add("showOff")
      welcomeText = setInterval(setTextWelcome, 100)
      setTimeout(() => {
        setMinorTextWelcome()
      }, 1000);
      setTimeout(() => {
        overlayChildren[0].style.animationName = "shake-lentera"
        overlayChildren[1].style.animationName = "shake-lentera"
        overlayChildren[2].style.animationName = "rotate-small"
        overlayChildren[3].style.animationName = "rotate-small"
      }, 5500);
    }
  }, 1000);
}

const textWelcome = document.querySelector(".text-welcome-section .cover p.handwriting.split-text") // seleksi target
const splitText = Splitting({target: textWelcome, by: 'words'}) // split target jadi kata
let length = splitText[0].words.length // cari tau panjang data
let count = 0 // set variable awal
function setTextWelcome(){ // fungsi pemanggilan kata
  if(count < length){
    document.querySelectorAll(".text-welcome-section .cover p.handwriting.split-text .word")[count].style.opacity = 1
    document.querySelectorAll(".text-welcome-section .cover p.handwriting.split-text .word")[count].style.transform = "translateY(0)"
    count += 1
  }else{
    clearIntervalWelcome() // jika sudah semua kata terload, lakukan fungsi ini
  }
}
function clearIntervalWelcome(){ // clear interval agar tidak terjadi looping infinity
  clearInterval(welcomeText)
}
const allTextMinorWelcome = document.querySelectorAll(".cover p.minor")
const buttonWelcome = document.querySelector(".text-welcome-section button")
function setMinorTextWelcome(){
  allTextMinorWelcome.forEach(minor =>{
    minor.style.transform = "translateY(0)"
    minor.style.opacity = 1
  })
  buttonWelcome.style.opacity = 1
}
// INTRODUCE
ScrollTrigger.create({
  trigger:".introduce-section",
  start:"top bottom",
  onEnter: () => setTextIntroduce()
})
function setTextIntroduce(){
  console.log()
  document.querySelector(".introduce-section .container .heading p.handwriting").style.transform = "translateY(0)"
}
gsap.to(".introduce-section .container .heading .line-setting .line", {
  scrollTrigger:{
    trigger:".introduce-section",
    start:"top bottom",
  },
  width: "100%"
})
// INTRODUCE
// TEMPAT DAN WAKTU
ScrollTrigger.create({
  trigger:".detail-section",
  start:"top bottom",
  onEnter: () => setTextDetail()
})
function setTextDetail(){
  console.log()
  document.querySelector(".detail-section .container .heading p.handwriting").style.transform = "translateY(0)"
}
gsap.to(".detail-section .container .heading .line-setting .line", {
  scrollTrigger:{
    trigger:".detail-section",
    start:"top bottom",
  },
  width: "100%"
})
// TEMPAT DAN WAKTU
// HADIST
ScrollTrigger.create({
  trigger:".hadist-section",
  start:"top bottom",
  onEnter: () => setTextHadist()
})
function setTextHadist(){
  console.log()
  document.querySelector(".hadist-section .container .heading p.handwriting").style.transform = "translateY(0)"
}
gsap.to(".hadist-section .container .heading .line-setting .line", {
  scrollTrigger:{
    trigger:".hadist-section",
    start:"top bottom",
  },
  width: "100%"
})
// HADIST
// COUNTDOWN
ScrollTrigger.create({
  trigger:".countdown-section",
  start:"top bottom",
  onEnter: () => setTextCountdown()
})
function setTextCountdown(){
  console.log()
  document.querySelector(".countdown-section .container .heading p.handwriting").style.transform = "translateY(0)"
}
// COUNTDOWN
// RSVP
ScrollTrigger.create({
  trigger:".rsvp-section",
  start:"top bottom",
  onEnter: () => setTextHadist()
})
function setTextHadist(){
  console.log()
  document.querySelector(".rsvp-section .container .heading p.handwriting").style.transform = "translateY(0)"
}
gsap.to(".rsvp-section .container .heading .line-setting .line", {
  scrollTrigger:{
    trigger:".rsvp-section",
    start:"top bottom",
  },
  width: "100%"
})
// RSVP
// CLOSSING
const clossingTexts = document.querySelectorAll(".clossing .text-clossing-section .cover p")
const closingImg = document.querySelector(".clossing .cirle-cover")
ScrollTrigger.create({
  trigger:".clossing",
  start:"top bottom",
  onEnter: () => setTextClossing()
})
function setTextClossing(){
  clossingTexts.forEach(text=>{
    text.style.transform = "translateY(0)"
    text.style.opacity = 1
  })
  closingImg.children[0].style.transform = "translateX(0)"
  closingImg.children[1].style.transform = "translateX(0)"
}
// CLOSSING
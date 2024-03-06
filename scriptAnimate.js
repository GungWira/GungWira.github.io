gsap.registerPlugin(ScrollTrigger)
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scrollContainer"),
  smooth: true,
});

// WELCOME
const imgBackgroundNow = document.querySelector(".backgroundNow")
const imgBackgroundNext = document.querySelector(".backgroundNext")
const backgrounds = ["Background.png", "background-cp.png", "background_bng.png", "background-cp.png"]

function changeBackground(){
  const backgroundLenght = backgrounds.length
  let count = 0
  setInterval(() => {
    // ganti background
    if(count == backgroundLenght){
      count = 0
    }
    imgBackgroundNext.src = "img/"+backgrounds[count+1 == backgroundLenght ? 0 : count+1 ]
    imgBackgroundNow.style.opacity = 0
    setTimeout(() => {
      imgBackgroundNow.src = "img/"+backgrounds[count]
      imgBackgroundNow.style.opacity = 1
    }, 2000);
    count++
  }, 8000);
}
changeBackground()
// WELCOME


// INTRODUCE
const textIntroduce = document.querySelector(".introduce-split-text") // seleksi target
const splitText = Splitting({target: textIntroduce, by: 'words'}) // split target jadi kata
let length = splitText[0].words.length // cari tau panjang data
let count = 0 // set variable awal
let introduceText = false
ScrollTrigger.create({
  trigger: ".cover-head-introduce-text",
  start: "top bottom",
  onEnter: () => introduceText = setInterval(setTextIntroduce, 100), // lakukan pemanggilan sampai akhir kata
})
function setTextIntroduce(){ // fungsi pemanggilan kata
  if(count < length){
    document.querySelectorAll(".introduce-split-text .word")[count].style.opacity = 1
    document.querySelectorAll(".introduce-split-text .word")[count].style.transform = "translateY(0)"
    count += 1
  }else{
    clearIntervalIntroduce() // jika sudah semua kata terload, lakukan fungsi ini
  }
}
function clearIntervalIntroduce(){ // clear interval agar tidak terjadi looping infinity
  clearInterval(introduceText)
}
// INTRODUCE
// BNG
gsap.to(".groom .image-elips .star-1",{
  scrollTrigger:{
    trigger: ".groom .image-main",
    scrub: 1,
    start: "top center",
    end: "bottom center"
  },
  x: -10, 
  y: 50,
  rotation: 45
})
gsap.to(".groom .image-elips .star-2",{
  scrollTrigger:{
    trigger: ".groom .image-main",
    scrub: 1,
    start: "top center",
    end: "bottom center"
  },
  x: 10, 
  y: -30,
  rotation: 90
})
gsap.to(".bride .image-elips .star-1",{
  scrollTrigger:{
    trigger: ".bride .image-main",
    scrub: 1,
    start: "top center",
    end: "bottom center"
  },
  x: -10, 
  y: 50,
  rotation: 45
})
gsap.to(".bride .image-elips .star-2",{
  scrollTrigger:{
    trigger: ".bride .image-main",
    scrub: 1,
    start: "top center",
    end: "bottom center"
  },
  x: 10, 
  y: -30,
  rotation: 90
})
// GROOM SIDE
const textBngGroom = document.querySelector(".groom .bng-detail p.newyork") // seleksi target
const splitTextBngGroom = Splitting({target: textBngGroom, by: 'words'}) // split target jadi kata
let lengthTxtBngGroom = splitTextBngGroom[0].words.length // cari tau panjang data
let countGroom = 0 // set variable awal
let bngTextGroom = false

ScrollTrigger.create({
  trigger: ".groom .bngimage .image-main",
  start: "top center",
  onEnter: () => bngTextGroom = setInterval(setTextBngGroom, 100), // lakukan pemanggilan sampai akhir kata
})

function setTextBngGroom(){ // fungsi pemanggilan kata
  normalTextGroom()
  if(countGroom < lengthTxtBngGroom){
    document.querySelectorAll(".groom .bng-detail p.newyork .word")[countGroom].style.opacity = 1
    document.querySelectorAll(".groom .bng-detail p.newyork .word")[countGroom].style.transform = "translateY(0)"
    countGroom += 1
  }else{
    clearIntervalBngGroom() // jika sudah semua kata terload, lakukan fungsi ini
  }
}
function normalTextGroom(){
  document.querySelectorAll(".groom .cover-text p.normal-text").forEach(text=>{
    text.style.transform = "translateY(0)"
  })
}
function clearIntervalBngGroom(){ // clear interval agar tidak terjadi looping infinity
  clearInterval(bngTextGroom)
}
// BRIDE SIDE
const textBngBride = document.querySelector(".bride .bng-detail p.newyork") // seleksi target
const splitTextBngBride = Splitting({target: textBngBride, by: 'words'}) // split target jadi kata
let lengthTxtBngBride = splitTextBngBride[0].words.length // cari tau panjang data
let countBride = 0 // set variable awal
let bngTextBride = false

ScrollTrigger.create({
  trigger: ".bride .bngimage .image-main",
  start: "top center",
  onEnter: () => bngTextBride = setInterval(setTextBngBride, 100), // lakukan pemanggilan sampai akhir kata
})

function setTextBngBride(){ // fungsi pemanggilan kata
  normalTextBride()
  if(countBride < lengthTxtBngBride){
    document.querySelectorAll(".bride .bng-detail p.newyork .word")[countBride].style.opacity = 1
    document.querySelectorAll(".bride .bng-detail p.newyork .word")[countBride].style.transform = "translateY(0)"
    countBride += 1
  }else{
    clearIntervalBngBride() // jika sudah semua kata terload, lakukan fungsi ini
  }
}
function normalTextBride(){
  document.querySelectorAll(".bride .cover-text p.normal-text").forEach(text=>{
    text.style.transform = "translateY(0)"
  })
}
function clearIntervalBngBride(){ // clear interval agar tidak terjadi looping infinity
  clearInterval(bngTextBride)
}
// BNG
// BLESSING GIFT
gsap.to(".line-star .line", {
  scrollTrigger:{
    trigger: ".trigger-line",
    start: "top center",
    end: "top center",
  },
  width: "100%",
})
gsap.to(".line-star img", {
  scrollTrigger:{
    trigger: ".trigger-line",
    start: "top center",
    end: "top center",
  },
  opacity:1,
})
// BLESSING GIFT






let conatinerMoveImg  = document.querySelector('.conatiner__moveimg')
let conatinerMoveImgOne  = document.querySelector('.conatiner__move--imgone')
let conatinerBox = document.querySelector('.conatiner__box')
let containerCard = document.querySelector('.container__card')

conatinerMoveImg.addEventListener('click', () => {
	conatinerBox.classList.add('display-open')
	containerCard.classList.remove('display-open')
})

conatinerMoveImgOne.addEventListener('click', () => {
	containerCard.classList.add('display-open')
	conatinerBox.classList.remove('display-open')
})
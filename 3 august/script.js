const paragraph = document.querySelector('.paragraph')
const button =document.querySelector('#button')

console.log(paragraph,button)
//let currenValue = 0
//button.addEventListener('click',function() {
   // let currenValue = paragraph.textContent
    currenValue++
    paragraph.textContent = currenValue
//})

//Napisat programmu, kotoraya sozdaen 2 knopki i veshaet na nih sobotiya
//Pri najatii  na pervuu vvoditsya v console "minus",pri najatii na vtoruu "plus"

const buttonPlus =document.querySelector('.button-plus')
const buttonMinus =document.querySelector('.button-minus')
console.log(buttonMinus,buttonPlus)
buttonPlus.addEventListener('click',function(){
console.log('+')
})
buttonMinus.addEventListener('click',function(){
    console.log('-')
})

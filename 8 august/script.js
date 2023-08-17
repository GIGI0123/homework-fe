const button = document.querySelector('.button')
console.log(button)
button.innerText = 'World'
const newh2 = document.createElement('h2')
document.body.append(newh2)
newh2.innerText = 'Hello my World'
button.addEventListener('click',function(){
console.log('Hello')
})

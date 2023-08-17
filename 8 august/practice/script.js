const allItems = document.querySelectorAll('.item')

 for(let i = 0; i < allItems.length; i++) {
    allItems[i].addEventListener('click', function() {
        allItems[i].classList.add('active')
    })
 }

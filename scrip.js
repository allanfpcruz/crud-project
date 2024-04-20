const insertButton = document.querySelector('#button')
const inserArea = document.querySelector('.insert-area')

function showInsertArea() {
  inserArea.classList.toggle('none')
}

insertButton.addEventListener('click', (e) => {
  e.preventDefault()
  showInsertArea()
})
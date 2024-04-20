const insertButton = document.querySelector('#insert-button')
const insertArea = document.querySelector('.insert-area')
const confirmButton = document.querySelector('#confirm-button')
const formArea = document.querySelector('#form-area')
const inputName = document.querySelector('#nome')
const inputFuncao = document.querySelector('#funcao')
const inputSalario = document.querySelector('#salario')
const tableBody = document.querySelector('#t-body')
const tableButton = document.querySelectorAll('.table-button')

//funções
function toggleInsertArea() {
  insertArea.classList.toggle('none')
}

function setValues() {
  let values = getValues()

  const tableRow = document.createElement('tr')
  tableBody.appendChild(tableRow)

  const tableDataName = document.createElement('td')
  tableDataName.innerHTML = values[0]
  tableRow.appendChild(tableDataName)

  const tableDataFunction = document.createElement('td')
  tableDataFunction.innerHTML = values[1]
  tableRow.appendChild(tableDataFunction)

  const tableDataSalario = document.createElement('td')
  tableDataSalario.innerHTML = values[2]
  tableRow.appendChild(tableDataSalario)

  const tableEditButton = document.createElement('td')
  tableEditButton.setAttribute('class', 'table-button')
  tableRow.appendChild(tableEditButton)

  const editIcon = document.createElement('i')
  editIcon.setAttribute('class', 'fa-solid fa-pen-to-square')
  tableEditButton.appendChild(editIcon)

  const tableDeletButton = document.createElement('td')
  tableDeletButton.setAttribute('class', 'table-button')
  tableRow.appendChild(tableDeletButton)

  const deletIcon = document.createElement('i')
  deletIcon.setAttribute('class', 'fa-solid fa-trash')
  tableDeletButton.appendChild(deletIcon)
}

function resetInputs() {
  inputName.value = ''
  inputFuncao.value = ''
  inputSalario.value = ''
}

function getValues() {
  let nome = inputName.value.charAt(0).toUpperCase() + inputName.value.slice(1)
  let funcao = inputFuncao.value.charAt(0).toUpperCase() + inputFuncao.value.slice(1)

  let salario 

  if(inputSalario.value == '') {
    salario = `R$0,00`
  } else {
    salario = `R$${inputSalario.value},00`
  }

  let valuesList = [nome, funcao, salario]
  console.log(valuesList)

  return valuesList
}

function editDatas(targetEl) {
  let targetRow = targetEl.closest('tr')
  return targetRow
}

//eventos
insertButton.addEventListener('click', (e) => {
  e.preventDefault()
  toggleInsertArea()
  formArea.style.opacity = 0.5
})

confirmButton.addEventListener('click', (e) => {
  e.preventDefault()
  toggleInsertArea()
  resetInputs()
  if(confirmButton.classList.contains('editing')) {
    editDatas()
    alert('ok')
  } else {
    alert('ok')
    setValues()
  }
})

document.addEventListener('click', (e) => {
  let targetEl = e.target
  //editar
  if(targetEl.classList.contains('fa-pen-to-square')) {
    confirmButton.classList.add('editing')
    toggleInsertArea()
    editDatas(targetEl)
  }

  //excluir
  if(targetEl.classList.contains('fa-trash')) {

  }
})
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
  tableDataName.setAttribute('class', 'table-data')
  tableRow.appendChild(tableDataName)

  const tableDataFunction = document.createElement('td')
  tableDataFunction.innerHTML = values[1]
  tableDataFunction.setAttribute('class', 'table-data')
  tableRow.appendChild(tableDataFunction)

  const tableDataSalario = document.createElement('td')
  tableDataSalario.innerHTML = values[2]
  tableDataSalario.setAttribute('class', 'table-data')
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

function editDatas(tableDatas) {
  confirmButton.addEventListener('click', (e) => {
    e.preventDefault()
    if(confirmButton.classList.contains('editing')) {
      let values = getValues()
      let i = 0
      console.log(tableDatas)
      tableDatas.forEach(tableData => {
        tableData.innerHTML = values[i]
        i++
      });
      toggleInsertArea()
      formArea.style.opacity = 1
      resetInputs()
      confirmButton.classList.remove('editing')
    }
  })
}

//exclui
function excluir(tableRow) {
  tableRow.remove()
}

//eventos
insertButton.addEventListener('click', (e) => {
  e.preventDefault()
  toggleInsertArea()
  formArea.style.opacity = 0.5
})

confirmButton.addEventListener('click', (e) => {
  if(!confirmButton.classList.contains('editing')) {
    e.preventDefault()
    toggleInsertArea()
    formArea.style.opacity = 1
    setValues()
    resetInputs()
  }
})

document.addEventListener('click', (e) => {
  let targetEl = e.target
  let tableRow = targetEl.closest('tr')
  //editar
  if(targetEl.classList.contains('fa-pen-to-square')) {
    if(!confirmButton.classList.contains('editing')) {
      confirmButton.classList.add('editing')
      let tableDatas = targetEl.closest('tr').querySelectorAll('.table-data')
      console.log(tableDatas)
      editDatas(tableDatas)
      tableDatas = []
      toggleInsertArea()
      formArea.style.opacity = .5
    }
  }

  //excluir
  if(targetEl.classList.contains('fa-trash')) {
    excluir(tableRow)
  }
})

//ERRO, o parâmetro enviado para a função editDatas não é o mesmo recebido, assim, a função altera os valores enviados em outra tr, sem ser a que foi selecionada pelo event 'click'
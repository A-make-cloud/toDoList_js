const container = document.getElementById('container');
const input_item = document.getElementById('add_item');
const displayItem = document.querySelector('.display_item');
const btn_add = document.getElementById('btn_add');

btn_add.addEventListener('click', addList)

function addList() {
    let newItem = document.createElement('p')
    let name = document.createElement('p')
    newItem.appendChild(name)
    name.textContent += input_item.value

    newItem.classList.add('display_item')
    displayItem.style.display = 'block'

    newItem.textContent = input_item.value
    input_item.value = ''
    container.appendChild(newItem)

    newItem.addEventListener('click', bgChange)
    newItem.addEventListener('dblclick', itemCancel)

    function bgChange() {
        newItem.style.backgroundColor = 'red'
        newItem.style.textDecoration = 'line-through'

    }
    function itemCancel() {
        newItem.style.display = 'none'
    }

}







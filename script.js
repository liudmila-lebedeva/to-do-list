let addBtn = document.querySelector('#add-to-do');
let todoField = document.querySelector('#to-do-field');
let input = document.querySelector('#input');

addBtn.onclick = function addToDo(event) {
    let p = document.createElement('p');
    p.innerHTML = input.value;
    p.classList.add('p_style');
    todoField.appendChild(p);   // appendChild method -- to move an element from one element to another

    p.onclick = function crossOutToDo (event) {   // one click = cross out 
        p.style.textDecoration = 'line-through';
    }

    p.ondblclick = function deleteToDo (event) {   // double click = delete
        p.style.textDecoration = 'line-through';
        todoField.removeChild(p)
    }
}
// key ENTER

function clickPress(event) {
    if (event.keyCode == 13) {
        addToDo(event);
        
    }  
}

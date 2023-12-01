//declare variables 
let inputElem = document.querySelector('[data-input]')
addBtn = document.querySelector('[data-add]')
toDolist = document.querySelector('.container')
// add click event
addBtn.addEventListener('click',function () {
    //list created
    let list = document.createElement('li')
    //add styling to the list
    list.classList.add('list-styling')
    list.innerText = inputElem.value
 //connect list to div
 toDolist.appendChild(list)
 inputElem.value = "";
 list.style.textDecoration = 'line-through'
   
})
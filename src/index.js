document.addEventListener("DOMContentLoaded", () => {
    let myForm = document.querySelector('form')
    myForm.addEventListener('submit', (e) => {
      e.preventDefault()
      newToDo = document.getElementById('new-task-description')
      handlToDo(newToDo.value)
      myForm.reset()
    })
    
    // your code here
});
function handlToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' x '
  p.textContent = todo
  p.appendChild(btn)
  debugger;
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}


const userinput = document.querySelector('#userinput');
const addBtn = document.getElementById("add-btn");
const addtodo = document.querySelector('#todo');
const todolist = document.getElementById("todolist")
const shoppinglist = document.getElementById("shoppinglist")
const clearBtn = document.getElementsByClassName('clear-list')[0];
// const delBtn = document.getElementsByClassName("del-btn")

function inputBlank(){
    if (userinput.value == false){
        userinput.classList.remove("animate__headShake")
        void userinput.offsetWidth; //makes the animation repeatable      
        userinput.classList.add("animate__headShake");
        return true
    } else {
        return false
    }
}   

function createNewItem(list){
    let newitem = document.createElement("li");
    newitem.appendChild(document.createTextNode(userinput.value));
    if (list == "todo") {
    let newcheckbox = document.createElement("input");
    newcheckbox.setAttribute("type", "checkbox")
    newcheckbox.classList.add("del-btn")
    newitem.appendChild(newcheckbox) 
    }
    return newitem
}

function addToList(){
    if (inputBlank() == false) {
    if (addtodo.checked==true){
        let newitem = createNewItem("todo")
        todolist.appendChild(newitem)
    } else {
        let newitem = createNewItem("shopping")
        shoppinglist.appendChild(newitem)
    }
    userinput.value = ""
    }
}

function done(event){
    event.target.classList.toggle("done")
}

function deleteItem(event){
    if (event.target.classList == "del-btn") {
            event.target.parentElement.remove()    
}}

addBtn.addEventListener('click', addToList)

userinput.addEventListener('keydown',function(event) {
   if (event.code == "Enter"){
    addToList()
   }
  })

clearBtn.addEventListener('click',function(){
    shoppinglist.replaceChildren()
})

todolist.addEventListener('click',deleteItem)

todolist.addEventListener('click', done)
shoppinglist.addEventListener('click', done)

// tab through
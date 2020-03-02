class ToDos extends Object {
    constructor() {
        super()
        this.todos = []
    }
}

function add(){
    document.getElementById("modal-wrap").style.display = "block"
    mode = "ADD"
}

function save(e){
    if (mode !== "ADD") {
        window.w = e.parentNode.parentNode
        console.log("e", window.w.id, editId)
        saveAfterEdit({ id: editId })
        document.getElementById("modal-wrap").style.display = "none"
        return
    }
    const title = document.getElementById("title").value
    const desc = document.getElementById("desc").value
    console.log(todos)
    const id = Date.now().toString()
    todos.todos.push({
        title,
        desc,  
        id
    })
    console.log(todos)
    document.getElementById("modal-wrap").style.display = "none"
    showCard({ list: document.getElementById("todos"), data: { title, desc, id } })
    saveInStorage()
}

function show() {
    const list = document.getElementById("todos")
    console.log(list)
    todos.todos.map(function(data){
        showCard({ data, list })
    })
}

function showCard({ data, list }) {
    console.log(list)
    const div = document.createElement("div")
    div.className = "card"
    div.id = data.id
    const title = document.createElement("div")
    const desc = document.createElement("div")
    const button = document.createElement("button")
    title.className = "title"
    desc.className = "desc"
    button.onclick = function () {
        edit({ title, desc, id: data.id })
        mode = "EDIT"
        editId = data.id

    }
    button.innerHTML = "edit"
    title.innerHTML = data.title
    desc.innerHTML = data.desc
    div.appendChild(title)
    div.appendChild(desc)
    div.appendChild(button)
    list.appendChild(div)
}

function edit({ title, desc, id }) {
    console.log("sunil")
    document.getElementById("modal-wrap").style.display = "block"
    const title1 = document.getElementById("title")
    const desc1 = document.getElementById("desc")
}

function saveAfterEdit({ id }) {
    const title = document.getElementById("title").value
    const desc = document.getElementById("desc").value
    console.log(id, typeof id ,todos.todos, todos.todos[id])
    let idd = null
    todos.todos.forEach(function(x, index){
        if (x.id === id) {
            console.log(index)
            idd = index
        }
    })
    const parentDiv = document.getElementById(id)
    parentDiv.getElementsByClassName("title")[0].innerHTML = title
    parentDiv.getElementsByClassName("desc")[0].innerHTML = desc
    todos.todos[idd].title = title
    todos.todos[idd].desc = desc
    saveInStorage()
}


function saveInStorage() {
    localStorage.setItem("todo", JSON.stringify(todos.todos))
}

function getFromStorage() {
    const data = JSON.parse(localStorage.getItem("todo")) || []
    todos.todos = data
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const todos = new ToDos()
    getFromStorage()
    let mode = "ADD"
    let editId = null
    show()

});
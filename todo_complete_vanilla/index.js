class ToDos extends Object {
    constructor() {
        super()
        this.todos = []
    }
}

const todos = new ToDos()

function add(){
    document.getElementById("modal-wrap").style.display = "block"
}

function save(){
    const title = document.getElementById("title").value
    const desc = document.getElementById("desc").value
    console.log(todos)
    todos.todos.push({
        title,
        desc,  
        id: Date.now()
    })
    console.log(todos)
    document.getElementById("modal-wrap").style.display = "none"
    show()
}

function show() {
    const list = document.getElementById("todos")
    todos.todos.map(function(data){
        const div = document.createElement("div")
        div.className = "card"
        div.id = data.id
        const title = document.createElement("div")
        const desc = document.createElement("div")
        const button = document.createElement("button")
        button.onclick = function () {
            edit({ title, desc, id: data.id })
        }
        button.innerHTML = "edit"
        title.innerHTML = data.title
        desc.innerHTML = data.desc
        div.appendChild(title)
        div.appendChild(desc)
        div.appendChild(button)
        list.appendChild(div)
    })
}

function edit({ title, desc, id }) {
    console.log("sunil")
    document.getElementById("modal-wrap").style.display = "block"
    const title1 = document.getElementById("title")
    const desc1 = document.getElementById("desc")
    // title.innerHTML = title1
    // desc.innerHTML =  desc1
    saveAfterEdit({ id })
}

function saveAfterEdit({ id }) {
    const title = document.getElementById("title").value
    const desc = document.getElementById("desc").value
    todos.todos[id].title = title
    todos.todos[id].desc = desc
}

show()
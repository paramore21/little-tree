import {container, form, formContainer, submitForm, closeBtn, addItem, deleteItem, hideItem, inputList, editItem, listItem, buttonNodeList} from "./constant.js"

let list = null;
class Node {
    constructor(title, order, parentId) {
        this.id = Math.floor(Math.random() * 1000);
        this.title = title;
        this.order = order;
        this.children = [];
        this.parentId = parentId;
    }

    addNewChild(title){
        const child = new Node(title, -1, this.id)
        this.children.push(child);
    }

    removeChild(id){
        for(let i = 0; i < this.children.length; i++){
            if(this.children[i].id === id){
                this.children.splice(i, 1)
            }
        }
    }

    _getTemplate(textContent){
        const templateNode = document.querySelector(".template").content.querySelector(".container__list").cloneNode(true)
        const button = templateNode.querySelector(".button__text")
        const editBtn = templateNode.querySelector(".edit__button")
        const deleteBtn = templateNode.querySelector(".delete__button")
        const addBtn = templateNode.querySelector(".add__button")
        templateNode.setAttribute('id', `list-${this.id}`)
        editBtn.setAttribute('id', `list-${this.id}`)
        deleteBtn.setAttribute('id', `list-${this.id}`)
        addBtn.setAttribute('id', `list-${this.id}`)
        addBtn.addEventListener("click", openDialog)
        button.textContent = textContent.russian
        return templateNode
    }
}

function getInputValues(){
    let _inputValues = {} // здесь будут лежать значения из инпутов
    inputList.forEach(input => {
        _inputValues[input.name] = input.value
        input.value = ""
    })
    return _inputValues
}

submitForm.addEventListener("click", (e) => {
    e.preventDefault()
    submitFormAction(e)
    const textContent = getInputValues()
    const node = new Node(textContent, "asd", 123)
    const childElement = node._getTemplate(textContent)
    list.appendChild(childElement)
})

addItem.addEventListener("click", (e) => openDialog(e))
// deleteItem.addEventListener("click", this.removeChild)

function openDialog(e){
    list = e.target.parentElement.parentElement

    formContainer.classList.add("addChild__active")
    document.addEventListener("keydown", handleEscClose)
    closeBtn.addEventListener("click", () => {
        formContainer.classList.remove("addChild__active")
    })
    overlayClick()
}

function handleEscClose(e){
    if(e.key === "Escape"){
        closeDialog()
    }
}

function overlayClick(){
    formContainer.addEventListener("click", (evt) => {
        if(evt.target === evt.currentTarget) closeDialog()
    })}

function closeDialog(){
    document.removeEventListener("keydown", handleEscClose)
    formContainer.classList.remove("addChild__active")
}


function submitFormAction(evt){
    if(evt){
        closeDialog()
    }
}

function hideElements(e){
    const childList = e.target.parentElement.parentNode.querySelector(".container__list")
    console.log(childList)
    childList.classList.toggle('hide')
}

hideItem.addEventListener("click", hideElements)

// openDialog()
closeDialog()

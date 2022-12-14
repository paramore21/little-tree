export const container = document.querySelector(".container")
export const formContainer = document.querySelector(".addChild")
export const list = container.querySelector(".container__list")
export const listItem = container.querySelector(".container__list-item")
export const deleteItem = listItem.querySelector(".delete__button")
export const editItem = listItem.querySelector(".edit__button")
export const addItem = listItem.querySelector(".add__button")
export const hideItem = listItem.querySelector(".hide__button")

export const node = document.querySelector(".container__template")
export const buttonNodeList = node.querySelector(".button__text")

export const listNode = document.querySelector(".list-item__template")
export const buttonNode = listNode.querySelector(".button__text")

export const closeBtn = formContainer.querySelector(".close")
export const submitForm = document.querySelector(".submitForm")
export const form = document.querySelector(".formContainer")
export const inputList = form.querySelectorAll(".formContainer__input")

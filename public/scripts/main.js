import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")
/** Quando o botão delete for clicado o modal **/
const deleteButton = document.querySelectorAll(".actions a.delete")

//adicionar evento nos elementos.
checkButtons.forEach(button => {
    //adicionar a esculta
    button.addEventListener("click", handleClick)
})


deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    //Não alterar o link da URL
    event.preventDefault()

    const roomId = document.querySelector("#room-id").dataset.id
    const slug = check ? "check" : "delete"
    const questionID = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionID}/${slug}`)

    

    const text = check ? "Marcar como lida" : "Excluir"

    modalTitle.innerHTML= `${text} está pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} está pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()   ;
}
export default function Modal(){
    
    const cancelButton = document.querySelector('.button.cancel')
    const modalWrapper =document.querySelector('.modal-wrapper')
    
    cancelButton.addEventListener("click", close)

    function open(){
        
        //Funcionalidade de atribuir a classe active para modal
        modalWrapper.classList.add("active")
    }
    function close(){
        //Funcionalidade de remover a classe active para modal
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}
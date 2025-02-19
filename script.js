const app = document.getElementById("app")

const formAction = () => {
    const form = document.getElementById('form')
    form.onsubmit = (event) => {
        event.preventDefault()
        const email = form.elements.email.value
        const phone = form.elements.phone.value
        console.log(email, phone)
    }
} 
const startApp = () => {
    const content = `
        <form id="form">
            <input type="email" name="email" placeholder="E-mail" />
            <input type="text" name="phone" placeholder="Telefone" />
            <button>Confirmar</button>
        </form>
        `
    
    app.innerHTML = content

    formAction()
}
startApp()
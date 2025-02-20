const app = document.getElementById("app")

// array, vetor
const users = [
    {
        email: 'test@test.com',
        phone: '9999999999999',
        ref: 100,
        refBy: null
    },
    {
        email: 'tust@tust.com',
        phone: '9999999999999',
        ref: 200,
        refBy: 100
    }
]

const getUsers = (userData) => {
    return users.find((user) => {
        return user.email == userData.email
    })
}

const getTotalSubscribe = (userData) => {
    const subs =  users.filter((user) => {
        return user.refBy == userData.ref
    })
    return subs.length
}

const showInvite = (userData) => {
    app.innerHTML = `
        <input type="text" id="link" value="https://evento.com/${userData.ref}" disabled>
    <div id="stats">
        <h4>88</h4>
        <p>Inscrições feitas!</p>
    </div> `
}

const formAction = () => {
    const form = document.getElementById('form')
    form.onsubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const userData = {
            email: formData.get('email'),
            phone: formData.get('phone'),
        }

        const user = getUsers(userData)
        if (user) {
            alert('Usuário já cadastrado')
        } else {
            alert('Usuário cadastrado com sucesso')
        }
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
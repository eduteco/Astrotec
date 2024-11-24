async function register() {
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
     const password = document.querySelector("#password").value
    const passwordConfirmation = document.querySelector("#password-confirmation").value
    
    //Os # são os nomes q ele deu pro id do input do formulario dentro do cadastro.html
    //Ele fala no 2:56 do video 3

    if(name === "" || email === "" || password === "" || passwordConfirmation === "") {
        alert("Preencha todos os campos")
        return
        //Testando 6:32

    }

    if(password!== passwordConfirmation) {
        alert("As senhas nao conferem. Digite as senhas novamente!")
        document.querySelector("#password").value = ""
        document.querySelector("#passwordConfirmation").value = ""
        return
        //Testando 6:32
    }

    const user = {
        name,
        email,
        password
    }

    await fetch("https://3000-eduteco-astrotec-jwfy9se3gtn.ws-us116.gitpod.io/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({user})
    }).then(response => response.json())
    
    alert(response.message)
    if(response.userExists){
        window.location.reload()
        return
    }

    window.location.href = "../../public/A-Login/login.html"

}


const button = document.querySelector("form button")
button.addEventListener("click", (event) => {
    event.preventDefault()
    register()
})


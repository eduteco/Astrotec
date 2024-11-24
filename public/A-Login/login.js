const { application, response } = require("express")

async function login() {
    const email = documnet.querySelector("#email").value
    const password = documnet.querySelector("#password").value

    if(email === "" || password === "") {
        alert("preencha todos os campos!")
        return
    }

    const user = {
        email,
        password
    }

    const response = await fetch("https://3000-eduteco-astrotec-jwfy9se3gtn.ws-us116.gitpod.io/api/register", {
        method: "POST",
        headers: {
            "Content-Typer": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())
    
    if(response.ok){
        console.log(response.token)
        localStorage.setItem("token", response.token)
        window.location.href= ""
    }

}

const button = document.querySelector("form button")
button.addEventListener("click", (event) => {
    event.preventDefault()
    login()

})
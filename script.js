function verifyToken(){
    const token = localStorage.getItem("token")

    if(!token) {
        window.location = "./pages/login/login.html"
        return
        //conecta com o login.html
    }
}


verifyToken()
  //verificar se o token e valido
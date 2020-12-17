const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const registerBtn = document.querySelector("label.register");

registerBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

function submitLogin() {
    return alert(`Selamat berbelanja di Cat Food Store!`)
}

function submitRegister() {
    return alert(`Selamat bergabung dan berbelanja di Cat Food Store!`)
}
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
    const user_email = document.getElementById("email_login").value.split("@")[0];
    return alert(`Selamat berbelanja di Cat Food Store, ${user_email}!`)
}

function submitRegister() {
    const user_email = document.getElementById("email_regist").value.split("@")[0];
    return alert(`Selamat bergabung dan berbelanja di Cat Food Store, ${user_email}!`)
}
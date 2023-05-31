let loginForm = document.getElementById("loginForm");
console.log(loginForm)

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value == "" || password.value == "") {
        alert("Ensure you input a value in both fields!");
    } else {
        // perform operation with form input

        window.location.href = "mainPage.html";
    }
});

function handleClick() {
    window.location.href = "signup.html"
}
function goBack() {
    window.location.href = "index.html"
}


let loginForm = document.getElementById("loginForm");
console.log(loginForm)

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value == "" || password.value == "") {
        alert("Ensure you input a value in both fields!");
    } else {

        // changed

        const user = getUser();
        const firstName = user.firstname;
        const lastName = user.lastname;

        let items = [firstName, lastName, email.value]
        localStorage.setItem('data', JSON.stringify(items))

        window.location.href = "mainPage.html";
    }
});

function handleClick() {
    window.location.href = "signup.html"
}
function goBack() {
    window.location.href = "index.html"
}


async function getUser() {
    const response = await fetch("apiUrl");
    const user = await response.json();
    return user;
}

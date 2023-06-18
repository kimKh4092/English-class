let singupForm = document.getElementById("Form");
console.log(singupForm)

singupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName")
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value == "" || password.value == "" || firstName.value == "" || lastName.value == "") {
        alert("Ensure you input a value in all fields!");
    } else {


        fetch("apiUrl", {
            method: "POST",
            body: JSON.stringify({
                firstname: firstName.value,
                lastname: lastName.value,
                email: email.value,
                password: password.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        // changed
        let items = [firstName.value, lastName.value, email.value]
        localStorage.setItem('data', JSON.stringify(items))


        window.location.href = "mainPage.html";

    }

});


function handleClick() {
    window.location.href = "login.html"
}

function goBack() {
    window.location.href = "index.html"
}
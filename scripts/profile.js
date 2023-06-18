const data = JSON.parse(localStorage.getItem('data'))
console.log(data);

fillUser(data);
fillUserInfo(data);
fillEditeForm(data);


function fillEditeForm(data) {
    const firstname = document.getElementById("firstName");
    const lastname = document.getElementById("lastName");
    const email = document.getElementById("email");
    email.value = data[2]
    lastname.value = data[1];
    firstname.value = data[0];

}

function fillUserInfo(data) {

    const fullname = document.getElementById("fullName1");
    const node1 = document.createTextNode(data[0])
    const node2 = document.createTextNode(data[1])
    const node3 = document.createTextNode(" ")

    fullname.appendChild(node2);
    fullname.appendChild(node3);
    fullname.appendChild(node1);

    const username = document.getElementById("username1");
    const email = document.getElementById("email1");
    const node = document.createTextNode(data[2]);
    const node0 = document.createTextNode(data[2]);
    email.appendChild(node0);
    username.appendChild(node);

}


function fillUser(data) {
    const fullname = document.getElementById("fullName");
    const node1 = document.createTextNode(data[0])
    const node2 = document.createTextNode(data[1])
    const node3 = document.createTextNode(" ")

    fullname.appendChild(node2);
    fullname.appendChild(node3);
    fullname.appendChild(node1);

    const email = document.getElementById("username");
    const node = document.createTextNode(data[2])
    email.appendChild(node);

}

function handleClick1(id) {
    const element = document.getElementById(id);
    element.classList.add("clicked")

    if (id === "info") {
        const element1 = document.getElementById("safety");
        element1.classList.remove("clicked");

        const element2 = document.getElementById("logout");
        element2.classList.remove("clicked");


        const user = document.getElementById("userInfo");
        user.classList.remove("hide")
    }
    if (id === "safety") {
        const element1 = document.getElementById("info");
        element1.classList.remove("clicked");

        const element2 = document.getElementById("logout");
        element2.classList.remove("clicked");

        const security = document.getElementById("security");
        security.classList.remove("hide");

        const user = document.getElementById("userInfo");
        user.classList.add("hide")

        const edite = document.getElementById("edite");
        edite.classList.add("hide")
    }
    if (id === "logout") {
        const element1 = document.getElementById("info");
        element1.classList.remove("clicked");

        const element2 = document.getElementById("safety");
        element2.classList.remove("clicked");

        localStorage.clear()
        window.location.href = "index.html"
    }
}

function handleClick2() {
    const element = document.getElementById("edite");
    element.classList.remove("hide")

    const element1 = document.getElementById("userInfo");
    element1.classList.add("hide")

}


let editeForm = document.getElementById("Form");

editeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('info edited')

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName")
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");

    if (email.value == "" || firstName.value == "" || lastName.value == "") {
        alert("Ensure you input a value in all fields!");
    }
    else {

        //put request to edite user
        fetch("apiUrl", {
            method: "PUT",
            body: JSON.stringify({
                firstname: firstName.value,
                lastname: lastName.value,
                email: email.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

});


let securityForm = document.getElementById("security");

securityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('password edited');

    let oldPass = document.getElementById("oldPass");
    let newPass = document.getElementById("newPass");
    let repeated = document.getElementById("repeat")

    //check if the entered oldPass is correct

    if (repeated.value !== newPass.value) {
        alert("passwords don't match");
    }
    else {
        //put request to edite password i guess
        fetch("apiUrl", {
            method: "PUT",
            body: JSON.stringify({
                newPass: newPass.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

});
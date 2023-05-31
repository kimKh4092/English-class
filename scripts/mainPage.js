
const courses = [
    {
        "name": "دوره گرامر",
        "language": "انگلیسی",
        "course_lenght": "سه ماه",
        "course_capacity": 50,
        "is_special": false,
        "level": "مقدماتی",
        "level_number": 1,
        "start_date": "خرداد 1402",
        "pic": "./images/uk.png"
    },
    {
        "name": "دوره آیلتس و تافل",
        "language": "انگلیسی",
        "course_lenght": "شش ماه",
        "course_capacity": 60,
        "is_special": true,
        "level": "فشرده",
        "level_number": 7,
        "start_date": "تیر 1402",
        "pic": "./images/uk.png"
    },
    {
        "name": "دوره اسپیکینگ",
        "language": "انگلیسی",
        "course_lenght": "سه ماه",
        "course_capacity": 30,
        "is_special": false,
        "level": "میان رده",
        "level_number": 4,
        "start_date": "مرداد 1402",
        "pic": "./images/uk.png"
    },
    {
        "name": "دوره معمولی ",
        "language": "انگلیسی",
        "course_lenght": "چهار ماه",
        "course_capacity": 45,
        "is_special": false,
        "level": "پیشرفته",
        "level_number": 7,
        "start_date": "مرداد 1402",
        "pic": "./images/uk.png"
    },
    {
        "name": "دوره گرامر",
        "language": "آلمانی",
        "course_lenght": "سه ماه",
        "course_capacity": 50,
        "is_special": false,
        "level": "مقدماتی",
        "level_number": 1,
        "start_date": "خرداد 1402",
        "pic": "./images/germany.png"
    },
    {
        "name": "دوره آیلتس و تافل",
        "language": "آلمانی",
        "course_lenght": "شش ماه",
        "course_capacity": 60,
        "is_special": true,
        "level": "فشرده",
        "level_number": 7,
        "start_date": "تیر 1402",
        "pic": "./images/germany.png"
    },
    {
        "name": "دوره اسپیکینگ",
        "language": "آلمانی",
        "course_lenght": "سه ماه",
        "course_capacity": 30,
        "is_special": false,
        "level": "میان رده",
        "level_number": 4,
        "start_date": "مرداد 1402",
        "pic": "./images/germany.png"
    },
    {
        "name": "دوره معمولی ",
        "language": "آلمانی",
        "course_lenght": "چهار ماه",
        "course_capacity": 45,
        "is_special": false,
        "level": "پیشرفته",
        "level_number": 7,
        "start_date": "مرداد 1402",
        "pic": "./images/germany.png"
    },
    {
        "name": "دوره گرامر",
        "language": "ایتالیایی",
        "course_lenght": "سه ماه",
        "course_capacity": 50,
        "is_special": false,
        "level": "مقدماتی",
        "level_number": 1,
        "start_date": "خرداد 1402",
        "pic": "./images/italy.png"
    },
    {
        "name": "دوره آیلتس و تافل",
        "language": "ایتالیایی",
        "course_lenght": "شش ماه",
        "course_capacity": 60,
        "is_special": true,
        "level": "فشرده",
        "level_number": 7,
        "start_date": "تیر 1402",
        "pic": "./images/italy.png"
    },
    {
        "name": "دوره اسپیکینگ",
        "language": "ایتالیایی",
        "course_lenght": "سه ماه",
        "course_capacity": 30,
        "is_special": false,
        "level": "میان رده",
        "level_number": 4,
        "start_date": "مرداد 1402",
        "pic": "./images/italy.png"
    },
    {
        "name": "دوره معمولی ",
        "language": "ایتالیایی",
        "course_lenght": "چهار ماه",
        "course_capacity": 45,
        "is_special": false,
        "level": "پیشرفته",
        "level_number": 7,
        "start_date": "مرداد 1402",
        "pic": "./images/italy.png"
    }
]






//get data from url
async function getCourses() {
    const response = await fetch("apiUrl");
    const courses = await response.json();
    return courses
}

//const cousrses = getCourses();



courses.map(createElement);

function createElement(course) {
    const index = courses.indexOf(course);

    //course div
    const div = document.createElement("div");
    const element = document.getElementById("courses");
    div.setAttribute('id', `box${index}`);
    if (course.language === "انگلیسی") {
        div.classList.add("boxesEng");
    }
    if (course.language === "ایتالیایی") {
        div.classList.add("boxesItl");
    }
    if (course.language === "آلمانی") {
        div.classList.add("boxesGrm");
    }
    element.appendChild(div);



    //title div
    const titleDiv = document.createElement("div");
    const element1 = document.getElementById(`box${index}`);
    titleDiv.setAttribute('id', `title${index}`);
    titleDiv.classList.add("titleDiv");
    element1.appendChild(titleDiv);

    if (course.is_special) {
        const specialDiv = document.createElement('img');
        const element0 = document.getElementById(`title${index}`);
        specialDiv.setAttribute('src', './images/special.png')
        specialDiv.classList.add('special');
        element0.appendChild(specialDiv);
    }


    //pic
    const pic = document.createElement("img");
    const element2 = document.getElementById(`title${index}`);
    pic.setAttribute('src', course.pic);
    pic.classList.add("flag");
    element2.appendChild(pic);


    //title
    const title = document.createElement("h2");
    const node1 = document.createTextNode(course.name);
    title.appendChild(node1);
    const element3 = document.getElementById(`title${index}`);
    element3.appendChild(title);



    //level
    const level = document.createElement("p");
    const node2 = document.createTextNode(course.level);
    level.appendChild(node2);
    const element4 = document.getElementById(`box${index}`);
    level.classList.add("level");
    element4.appendChild(level);

    //price
    const price = document.createElement("p");
    const node3 = document.createTextNode("course.price");
    price.appendChild(node3);
    const element5 = document.getElementById(`box${index}`);
    price.classList.add("price");
    element5.appendChild(price);

    //button
    const button = document.createElement("button");
    const node4 = document.createTextNode('اطلاعات بیشتر');
    button.appendChild(node4);
    const element6 = document.getElementById(`box${index}`);
    button.classList.add("button");
    button.addEventListener('click', function handleClick(event) {
        window.location.href = "moreInfo.html"
    })
    element6.appendChild(button);

}





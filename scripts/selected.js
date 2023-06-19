const selectedCourses = [
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
        "language": "ایتالیایی",
        "course_lenght": "سه ماه",
        "course_capacity": 30,
        "is_special": false,
        "level": "میان رده",
        "level_number": 4,
        "start_date": "مرداد 1402",
        "pic": "./images/italy.png"
    },
]


selectedCourses.map(createElement);

function createElement(course) {


    // const index = selectedCourses.indexOf(course);

    const courses = document.getElementById("courses");
    const selected = document.createElement("ul");
    selected.classList.add("infoList")
    // selected.setAttribute("id", `selected${index}`)
    courses.appendChild(selected);
    if (course.language === "انگلیسی") {
        selected.classList.add("engList");
    }
    if (course.language === "ایتالیایی") {
        selected.classList.add("itlyList");
    }
    if (course.language === "آلمانی") {
        selected.classList.add("grmList");
    }

    const heads = ['name', 'level', 'language', 'start_date', 'course_lenght'];

    heads.map(create)

    function create(head) {

        const li = document.createElement("li");
        li.classList.add("itemInfo")
        selected.appendChild(li);

        const title = document.createElement("div");
        title.classList.add("titleInfo");
        const text = document.createElement("div");
        text.classList.add("textInfo");
        if (head === "name") {
            text.classList.add("title")
        }

        li.appendChild(title);
        li.appendChild(text);

        if (course.language === "انگلیسی") {
            title.classList.add("engBorder");
            text.classList.add("eng");
        }
        if (course.language === "ایتالیایی") {
            title.classList.add("itlyBorder");
            text.classList.add("itly");
        }
        if (course.language === "آلمانی") {
            title.classList.add("grmBorder");
            text.classList.add("grm");
        }



        if (head === "name") {
            const node1 = document.createTextNode("نام دوره");
            title.appendChild(node1)
        }

        if (head === "level") {
            const node1 = document.createTextNode("سطح");
            title.appendChild(node1)
        }
        if (head === "language") {
            const node1 = document.createTextNode("زبان");
            title.appendChild(node1)
        }
        if (head === "start_date") {
            const node1 = document.createTextNode("زمان شروع");
            title.appendChild(node1)
        }
        if (head === "course_lenght") {
            const node1 = document.createTextNode("طول دوره");
            title.appendChild(node1)
        }

        const node2 = document.createTextNode(course[head]);
        text.appendChild(node2)

    }

}
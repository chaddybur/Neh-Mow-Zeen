let logInBtn = document.querySelector("#login")

logInBtn.addEventListener("click", function(){
    logInBtn.innerHTML =  ""
    let anchor = document.querySelector("#formBox")
    let form = document.createElement("div")
    anchor.appendChild(form)
    let teacherBtn = document.createElement("button")
    teacherBtn.class = "teacherBtn"
    teacherBtn.innerText= "TEACHER"
    form.appendChild(teacherBtn)
    let studentBtn = document.createElement("button")
    studentBtn.class = "studentBtn"
    studentBtn.innerText = "STUDENT"
    form.appendChild(studentBtn)
})
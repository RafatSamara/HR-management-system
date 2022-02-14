'use strict';

let levelArray = ["Junior", "Mid-senior", "Senior"];
let departmentArray = ["Administration", "Marketing", "Development", "Finance"];
let emplyeesArray = [];

let employeeCard = document.getElementById("employeeCard");

function Employee(id, fullName, department, level, image) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0
    this.image = image;

    emplyeesArray.push(this);
    
}

function getLocalStorage() {
    JSON.parse(localStorage.getItem("emplyeesLocalStorage")).map((employee) => {
        new Employee(employee.id, employee.fullName, employee.department, employee.level, employee.image).render();
    });
}


Employee.prototype.calculateSalary = function () {

    let salaryWithoutTax;
    if (this.level == "Senior") {
        salaryWithoutTax = Math.floor(Math.random() * (1500 - 2000 + 1) + 1500)
    } else if (this.level == "Mid-senior") {
        salaryWithoutTax = Math.floor(Math.random() * (1000 - 1500 + 1) + 1000)
    } else if (this.level == "Junior") {
        salaryWithoutTax = Math.floor(Math.random() * (500 - 1000 + 1) + 500)
    }
    return this.salary = salaryWithoutTax - (salaryWithoutTax * 0.075);
}

Employee.prototype.render = function () {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let image = document.createElement("img");
    image.setAttribute("src", this.image);
    image.setAttribute("alt", "https://www.w3schools.com/howto/img_avatar.png");
    image.setAttribute("style", "width:100%");
    card.appendChild(image);

    let container = document.createElement("div");
    container.setAttribute("class", "container");

    let h4 = document.createElement("h4");
    h4.textContent = "Name: " + this.fullName + " - ID: " + this.id;

    let p = document.createElement("p");
    p.textContent = "Department: " + this.department + " - Level: " + this.level;

    container.appendChild(h4);
    container.appendChild(p);

    card.appendChild(container);

    employeeCard.appendChild(card);
}

// let ghaziSamer = new Employee("1000", "Ghazi Samer", departmentArray[0], levelArray[2], "https://www.w3schools.com/howto/img_avatar.png");
// let lanaAli = new Employee("1001", "Lana Ali", departmentArray[3], levelArray[2], "https://www.w3schools.com/howto/img_avatar.png");
// let tamaraAyoub = new Employee("1002", "Tamara Ayoub", departmentArray[1], levelArray[2], "https://www.w3schools.com/howto/img_avatar.png");
// let safiWalid = new Employee("1003", "Safi Walid", departmentArray[0], levelArray[1], "https://www.w3schools.com/howto/img_avatar.png");
// let omarZaid = new Employee("1004", "Omar Zaid", departmentArray[2], levelArray[2], "https://www.w3schools.com/howto/img_avatar.png");
// let ranaSaleh = new Employee("1005", "Rana Saleh", departmentArray[2], levelArray[0], "https://www.w3schools.com/howto/img_avatar.png");
// let hadiAhmad = new Employee("1006", "Hadi Ahmad", departmentArray[3], levelArray[1], "https://www.w3schools.com/howto/img_avatar.png");
// print();


function getUniqueID() {
    return Date.now();
}


let formElement = document.getElementById("form");
formElement.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.imageUrl.value;

    let newEmployee = new Employee(getUniqueID(), fullName, department, level, image);
    newEmployee.calculateSalary();
    newEmployee.render();
    localStorage.setItem("emplyeesLocalStorage", JSON.stringify(emplyeesArray));

}

function print() {

    for (let i = 0; i < emplyeesArray.length; i++) {
        emplyeesArray[i].calculateSalary();
        emplyeesArray[i].render();

    }
}
getLocalStorage() ;
// function add2localStorage(){
//     var retrievedObject = localStorage.getItem('arrayOfObjectlocalStorage');
//     var r = JSON.parse(retrievedObject);
//     for(let i = 0 ; i < r.length ; i++){
//         arrayOfObject.push(r[i]);
//     }
//     localStorage.setItem('arrayOfObjectlocalStorage', JSON.stringify(arrayOfObject));
// }

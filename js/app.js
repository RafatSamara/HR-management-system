'use strict';

let levelArray = ["Junior", "Mid-senior", "Senior"];
let departmentArray = ["Administration", "Marketing", "Development", "Finance"];
let emplyeesArray = [];


function Employee(id, fullName, department, level) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0
    this.image = './assets/${name_id}.png';

    emplyeesArray.push(this);

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
    document.write('<h3> - The Salary of Employee ' + this.fullName + ', whit ' + this.id + ' ID is ' + this.salary + ' JOD</h3>')
}

let ghaziSamer = new Employee("1000", "Ghazi Samer", departmentArray[0], levelArray[2]);
let lanaAli = new Employee("1001", "Lana Ali", departmentArray[3], levelArray[2]);
let tamaraAyoub = new Employee("1002", "Tamara Ayoub", departmentArray[1], levelArray[2]);
let safiWalid = new Employee("1003", "Safi Walid", departmentArray[0], levelArray[1]);
let omarZaid = new Employee("1004", "Omar Zaid", departmentArray[2], levelArray[2]);
let ranaSaleh = new Employee("1005", "Rana Saleh", departmentArray[2], levelArray[0]);
let hadiAhmad = new Employee("1006", "Hadi Ahmad", departmentArray[3], levelArray[1]);

for (let i = 0; i < emplyeesArray.length; i++) {
    emplyeesArray[i].calculateSalary();
    emplyeesArray[i].render();
}


let objectData = JSON.parse(localStorage.getItem("employees"));
let table_render = document.getElementById("table_render");
let table = document.createElement("table");
table_render.appendChild(table);
let departmentsArray = ["Administration", "Marketing", "Development", "Finance"];

function printResults() {

    // Table Header //
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");

    th1.textContent = "Department Name";
    th2.textContent = "Number of employees";
    th3.textContent = "Total Salaries";
    th4.textContent = "Average of Salaries";

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);

    // Table Body //
    for (let i = 0; i < 4; i++) {

        let table_body_tr = document.createElement("tr");
        table.appendChild(table_body_tr);

        let table_body_td1 = document.createElement("td");
        let table_body_td2 = document.createElement("td");
        let table_body_td3 = document.createElement("td");
        let table_body_td4 = document.createElement("td");

        table_body_td1.textContent = departmentsArray[i];
        table_body_td2.textContent = numOfEmployees[i];
        table_body_td3.textContent = sumOfsalariesArray[i];
        table_body_td4.textContent = average[i];

        table_body_tr.appendChild(table_body_td1);
        table_body_tr.appendChild(table_body_td2);
        table_body_tr.appendChild(table_body_td3);
        table_body_tr.appendChild(table_body_td4);
    }

    // Table Footer //
    let footer_tr = document.createElement ("tr");
    table.appendChild(footer_tr);

    let footer_td1 = document.createElement ("td");
    let footer_td2 = document.createElement ("td");
    let footer_td3 = document.createElement ("td");
    let footer_td4 = document.createElement ("td");

    footer_td1.textContent = "Total: ";
    footer_td2.textContent = totalAdministrationSalariesllEmployees();
    footer_td3.textContent = totalAdministrationSalariesllsalariesArray();
    footer_td4.textContent = totalAdministrationSalariesllAverages();

    footer_tr.appendChild (footer_td1);
    footer_tr.appendChild (footer_td2);
    footer_tr.appendChild (footer_td3);
    footer_tr.appendChild (footer_td4);
}


function countEmployees() {
    let numberOfAdministrationEmployees = 0, numberOfMarketingEmployees = 0, numberOfDevelopmentEmployees = 0, numberOfFinanceEmployees = 0;
    for (i = 0; i < objectData.length; i++) {
        switch (objectData[i].department){
            case "Administration": ++numberOfAdministrationEmployees; break;
            case "Marketing": ++numberOfMarketingEmployees; break;
            case "Development": ++numberOfDevelopmentEmployees; break;
            case "Finance": ++numberOfFinanceEmployees; break;
        }
    }
    return [numberOfAdministrationEmployees, numberOfMarketingEmployees, numberOfDevelopmentEmployees, numberOfFinanceEmployees];
}

function salariesArraytotalsalariesArray() {
    let salariesArray = [];
    let totalAdministrationSalaries = 0, totalMarketingSalaries = 0, totalDevelopmentSalaries = 0, totalFinanceSalaries = 0;

    for (i = 0; i < objectData.length; ++i) {
        if (objectData[i].department == "Administration") {
            totalAdministrationSalaries += objectData[i].salary;
        } else if (objectData[i].department == "Marketing") {
            totalMarketingSalaries += objectData[i].salary;
        } else if (objectData[i].department == "Development") {
            totalDevelopmentSalaries += objectData[i].salary;
        } else if (objectData[i].department == "Finance") {
            totalFinanceSalaries += objectData[i].salary;
        }

    }
    salariesArray.push(totalAdministrationSalaries);
    salariesArray.push(totalMarketingSalaries);
    salariesArray.push(totalDevelopmentSalaries);
    salariesArray.push(totalFinanceSalaries);
    return salariesArray;
}

function averageSalary() {
    let averagesalariesArray = [];
    for (let i = 0; i < numOfEmployees.length; ++i) {
        averagesalariesArray.push(sumOfsalariesArray[i] / numOfEmployees[i]);
    }
    return averagesalariesArray;
}


function totalAdministrationSalariesllEmployees (){
    let sum = 0;
    for (let i = 0 ; i<numOfEmployees.length ; ++i){
        sum += numOfEmployees[i];
    }
    return sum;
}

function totalAdministrationSalariesllsalariesArray (){
    let sum = 0;
    for (let i = 0 ; i<sumOfsalariesArray.length ; ++i){
        sum +=sumOfsalariesArray[i];
    }
    return sum;
}

function totalAdministrationSalariesllAverages (){
    let sum = 0;
    for (let i = 0 ; i<average.length ; ++i){
        sum += average[i];
    }
    return sum;
}


let numOfEmployees = countEmployees();
let sumOfsalariesArray = salariesArraytotalsalariesArray();
let average = averageSalary();

printResults();

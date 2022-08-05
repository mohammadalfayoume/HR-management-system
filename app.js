'use strict';
var allEmp = [];
// var employee=[];
var id = 1000;
// var i;

const body = document.getElementsByTagName("body");
const main = document.createElement("main");
main.className=("main");




// for (let i=0;i<7;i++){
// employee[i]=document.createElement("div");
// employee[i].className=("container");
// }
// console.log(employee);



// const container =document.createElement("div");
// console.log(container)
// container.className=("container");

// const container =document.getElementsByClassName("container")
// const picture =document.getElementById("pic")
// const nameAndId =document.getElementById("nameAndId")
// const depAndLvl =document.getElementById("depAndLvl")
// const netSalary =document.getElementById("salary")
// const body = document.getElementsByTagName("body");
// const employee01= document.getElementById("employee-01");
// const employee02= document.getElementById("employee-02");
// const employee03= document.getElementById("employee-03");
// const employee04= document.getElementById("employee-04");
// const employee05= document.getElementById("employee-05");
// const employee06= document.getElementById("employee-06");
// const employee07= document.getElementById("employee-07");

function salary(min, max) {
  return (
    Math.floor(Math.random() * (max - min)) +
    min -
    (Math.floor(Math.random() * (max - min)) + min) * 0.075
  );
}

// This is a constructor contain all properties for employees

function Employee(fullName, department, level, image, salary) {
  this.employeeId = function (counter) {
    counter = id;
    id++;
    return counter;
  };
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.image = image;
  this.salary = salary;
  allEmp.push(this);
}

Employee.prototype.render = function () {



const employee =document.createElement("div");
employee.className=("container");
body[0].appendChild(main);
main.appendChild(employee);
// employee.appendChild(main);
// console.log(main)

//Container contains all element
// const employee =document.createElement("div");
// employee.className=("container");
// body[0].appendChild(employee);
// console.log(employee);

//image element contain image of employee
const pE0 = document.createElement("img");
pE0.src=this.image;
employee.appendChild(pE0);
// main.appendChild(employee);


//paragraph element contain name and id of employee
const pEl = document.createElement("p");
pEl.className=("p1");
pEl.textContent=`Name: ${this.fullName} - ID: ${this.employeeId()}`;
employee.appendChild(pEl);

//paragraph element contain department and level of employee
const pE2 = document.createElement("p");
pE2.className=("p2");
pE2.textContent= `Department: ${this.department} - Level: ${this.level}`;
employee.appendChild(pE2)

//paragraph element contain salary of employee
const pE3 = document.createElement("p");
pE3.className=("p3");
pE3.textContent= `${this.salary}`;
employee.appendChild(pE3);

// to show element in the page
document.body.appendChild(main)

// to size images
pE0.style.width='20%'


//background color for each employee
employee.style.backgroundColor='#008000a6'

// main.style.whiteSpace='break-spaces'
// main.style.display='flex'
// main.style.justifyContent='normal'
// main.style.flexWrap='wrap'


// employee.querySelector("p").appendChild(pEl)
    // employee[i]=document.createElement("div");
    // employee[i].className=("container");
    
  
  // const pE0 = document.createElement("img")
  // pE0.src=this.image;
  // employee[i].appendChild(pE0);
  // document.body.appendChild(pE0)

  // const pEl = document.createElement("p");
  // pEl.textContent=`Name: ${this.fullName} - ID: ${this.employeeId()}`;
  
  // employee[i].appendChild(pE1);
  // document.body.appendChild(pE1)
  // body[0].appendChild(pEl);

  // const pE2 = document.createElement("p");
  // pE2.textContent= `Department: ${this.department} - Level: ${this.level}`;
  // body[0].appendChild(pE2);

  // const pE3 = document.createElement("p");
  // pE3.textContent= `${this.salary}`
  // body[0].appendChild(pE3);

  
  // document.write(`<p>Employee name: ${this.fullName}</p>`);
  // document.write(`<p>Department: ${this.department}</p>`);
  // document.write(`<p>Employee salary: ${this.salary}</p>`);
  // document.write(`<img src=${this.image} alt=${this.fullName}>`);
  // document.write(`<br>`);
};

// Employee.employeeId=function(counter){
//     counter=id
//     id++
//     return counter;
//     }

const employee_01 = new Employee(
  "Ghazi Samer",
  "Administration",
  "Senior",
  "./assets/Ghazi.jpg",
  salary(1500, 2000)
);
const employee_02 = new Employee(
  "Lana Ali",
  "Finance",
  "Senior",
  "./assets/Lana.jpg",
  salary(1500, 2000)
);
const employee_03 = new Employee(
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "./assets/Tamara.jpg",
  salary(1500, 2000)
);
const employee_04 = new Employee(
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "./assets/Safi.jpg",
  salary(1000, 1500)
);
const employee_05 = new Employee(
  "Omar Zaid",
  "Developmentn",
  "Senior",
  "./assets/Omar.jpg",
  salary(1500, 2000)
);
const employee_06 = new Employee(
  "Rana Saleh",
  "Developmentn",
  "Junior",
  "./assets/Rana.jpg",
  salary(500, 1000)
);
const employee_07 = new Employee(
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "./assets/Hadi.jpg",
  salary(1000, 1500)
);

// Show all requirments in HTML page
for (var i = 0; i < allEmp.length; i++) {
  allEmp[i].render();
}

// employee_01.render();
// employee_02.render();
// employee_03.render();
// employee_04.render();
// employee_05.render();
// employee_06.render();
// employee_07.render();

// //Employee-01
// const emp01= {
//     // method to git unique ID for each employee
//     employeeId: function(counter){
//         counter=id
//         id++
//         return counter;
//     },
//     fullName: "Ghazi Samer",
//     department: "Administration",
//     level: "Senior",
//     // method to calculate the net salary after deduction the tax
//     salary: function(min,max,randSal,netSalary) {
//         var min=1500;
//         var max=2000;
//         var randSal=Math.floor(Math.random() * (max - min)) + min;
//         var netSalary =(randSal - 0.075*randSal)
//         return netSalary;
//     }
// };

// console.log("Employee name: ", emp01.fullName);
// console.log("Employee salary: ", emp01.salary());

// //Employee-02
// const emp02= {
//     employeeId: function(counter){
//         counter=id
//         id++
//         return counter;
//     },
//     fullName: "Lana Ali",
//     department: "Finance",
//     level: "Senior",
//     salary: function(min,max,randSal,netSalary) {
//         var min=1500;
//         var max=2000;
//         var randSal=Math.floor(Math.random() * (max - min)) + min;
//         var netSalary =(randSal - 0.075*randSal)
//         return netSalary;
//     }
// };
// console.log("Employee name: ", emp02.fullName);
// console.log("Employee salary: ", emp02.salary());

// //Employee-03
// const emp03= {
//     employeeId: function(counter){
//         counter=id
//         id++
//         return counter;
//     },
//     fullName: "Tamara Ayoub",
//     department: "Marketing",
//     level: "Senior",
//     salary: function(min,max,randSal,netSalary) {
//         var min=1500;
//         var max=2000;
//         var randSal=Math.floor(Math.random() * (max - min)) + min;
//         var netSalary =(randSal - 0.075*randSal)
//         return netSalary;
//     }
// };

// console.log("Employee name: ", emp03.fullName);
// console.log("Employee salary: ", emp03.salary());

// //Employee-04
// const emp04= {
//     employeeId: function(counter){
//         counter=id
//         id++
//         return counter;
//     },
//     fullName: "Safi Walid",
//     department: "Administration",
//     level: "Mid-Senior",
//     salary: function(min,max,randSal,netSalary) {
//         var min=1000;
//         var max=1500;
//         var randSal=Math.floor(Math.random() * (max - min)) + min;
//         var netSalary =(randSal - 0.075*randSal)
//         return netSalary;
//     }
// };

// console.log("Employee name: ", emp04.fullName);
// console.log("Employee salary: ", emp04.salary());

// //Employee-05
// const emp05= {
//     employeeId: function(counter){
//         counter=id
//         id++
//         return counter;
//     },
//     fullName: "Omar Zaid",
//     department: "Developmentn",
//     level: "Senior",
//     salary: function(min,max,randSal,netSalary) {
//         var min=1500;
//         var max=2000;
//         var randSal=Math.floor(Math.random() * (max - min)) + min;
//         var netSalary =(randSal - 0.075*randSal)
//         return netSalary;
//     }
// };

// console.log("Employee name: ", emp05.fullName);
// console.log("Employee salary: ", emp05.salary());

// //Employee-06
// const emp06= {
//     employeeId: function(counter){
//         counter=id
//         id++
//         return counter;
//     },
//     fullName: "Rana Saleh",
//     department: "Developmentn",
//     level: "Junior",
//     salary: function(min,max,randSal,netSalary) {
//         var min=500;
//         var max=1000;
//         var randSal=Math.floor(Math.random() * (max - min)) + min;
//         var netSalary =(randSal - 0.075*randSal)
//         return netSalary;
//     }
// };

// console.log("Employee name: ", emp06.fullName);
// console.log("Employee salary: ", emp06.salary());

// //Employee-07
// const emp07= {
//     employeeId: function(counter){
//         counter=id
//         id++
//         return counter;
//     },
//     fullName: "Hadi Ahmad",
//     department: "Finance",
//     level: "Mid-Senior",
//     salary: function(min,max,randSal,netSalary) {
//         var min=1000;
//         var max=1500;
//         var randSal=Math.floor(Math.random() * (max - min)) + min;
//         var netSalary =(randSal - 0.075*randSal)
//         return netSalary;
//     }
// };

// console.log("Employee name: ", emp07.fullName);
// console.log("Employee salary: ", emp07.salary())};

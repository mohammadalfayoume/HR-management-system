var id = 999;
function salary(min, max) {
  return (
    Math.floor(Math.random() * (max - min)) +
    min -
    (Math.floor(Math.random() * (max - min)) + min) * 0.075
  );
}
var allEmp = [];

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
  document.write(`<p>Employee name: ${this.fullName}</p>`);
  document.write(`<p>Department: ${this.department}</p>`);
  document.write(`<p>Employee salary: ${this.salary}</p>`);
  document.write(`<br>`);
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
  "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-10-1.jpeg",
  salary(1500, 2000)
);
const employee_02 = new Employee(
  "Lana Ali",
  "Finance",
  "Senior",
  "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-10-1.jpeg",
  salary(1500, 2000)
);
const employee_03 = new Employee(
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-10-1.jpeg",
  salary(1500, 2000)
);
const employee_04 = new Employee(
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-10-1.jpeg",
  salary(1000, 1500)
);
const employee_05 = new Employee(
  "Omar Zaid",
  "Developmentn",
  "Senior",
  "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-10-1.jpeg",
  salary(1500, 2000)
);
const employee_06 = new Employee(
  "Rana Saleh",
  "Developmentn",
  "Junior",
  "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-10-1.jpeg",
  salary(500, 1000)
);
const employee_07 = new Employee(
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-10-1.jpeg",
  salary(1000, 1500)
);

// Show all requirments in HTML page
for (let i = 0; i < allEmp.length; i++) {
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

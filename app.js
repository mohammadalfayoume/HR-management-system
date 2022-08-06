'use strict';
var allEmp = [];
var id = 1000;


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

let container =document.createElement('div');
container.className='container';

let main=document.getElementsByTagName('main')
main[0].appendChild(container);

container.className='container'

let numOfEmployees =7;
let numOfEmployeeInEachRow =3;
let numberOfRows=Math.ceil(numOfEmployees/numOfEmployeeInEachRow)

let rows=[];

for (let i=0; i<numberOfRows ;i++){

let row=document.createElement('div');
row.className='row'
rows.push(row)
container.appendChild(row);
}
let counter=0;
for (let i = 0; i <rows.length; i++) {
  for (let j = 0; j <numOfEmployeeInEachRow; j++) {
    let card=document.createElement('div');
    card.className='emp'

    let employee=allEmp[counter]
    if (employee==undefined){
      break;
    }

    let picture=document.createElement('img');
    picture.src=employee['image']
    picture.width=250

    let name= employee['fullName']
    let emploId= employee.employeeId()
    let p1=document.createElement('p');
    p1.textContent='Name: '+name+' - ID: '+emploId

    let depart =employee['department']
    let lvl =employee['level']
    let p2=document.createElement('p')
    p2.textContent='Department: '+depart+' - Level: '+lvl

    let sal=employee['salary']
    let p3=document.createElement('p')
    p3.textContent=sal

    card.append(picture,p1,p2,p3)

    rows[i].appendChild(card);

  counter++

  }
}




  
// let card=document.getElementsByClassName('employee');


// for (let i = 0; i < allEmp.length; i++) {
//   let picture=document.createElement('img')
//   picture.src=allEmp[i]['image']
//   card[0].appendChild(picture);
//   picture.style.width='250px';

//   let paragraph_01= document.createElement('p')
//   paragraph_01.textContent='Name: '+allEmp[i]['fullName']+ ' - ID: '+allEmp[i].employeeId()
//   paragraph_01.className='p1';
//   card[0].appendChild(paragraph_01)

//   let paragraph_02= document.createElement('p')
//   paragraph_02.textContent='Department: '+allEmp[i]['department']+ ' - Level: '+allEmp[i]['level']
//   paragraph_02.className='p2';
//   card[0].appendChild(paragraph_02)

//   let paragraph_03= document.createElement('p')
//   paragraph_03.textContent=allEmp[i]['salary']
//   paragraph_03.className='p3';
//   card[0].appendChild(paragraph_03)
// }





// Show all requirments in HTML page
// for (var i = 0; i < allEmp.length; i++) {
//   allEmp[i].render();
// }

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

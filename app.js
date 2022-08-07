'use strict';

let allEmployee=[];

// Employees ID
let uniqueId=[]
for (let i = 1000; i < 1007; i++) {
    uniqueId.push(i)
}
// net salary
function salary(min,max) {
    return (
        Math.floor(Math.random() * (max - min)) +
        min -
        (Math.floor(Math.random() * (max - min)) + min) * 0.075
        );
}

function Employee (employeeId,fullName, department, level,image, salary) {
    this.employeeId=employeeId
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.image=image
    this.salary=salary;
    
    allEmployee.push(this)
}

const employee_01 = new Employee(uniqueId[0],'Ghazi Samer','Administration', 'Senior','./assets/Ghazi.jpg',salary(1500,2000));
const employee_02 = new Employee(uniqueId[1],'Lana Ali','Finance', 'Senior','./assets/Lana.jpg' ,salary(1500,2000));
const employee_03 = new Employee(uniqueId[2],'Tamara Ayoub','Marketing', 'Senior','./assets/Tamara.jpg', salary(1500,2000));
const employee_04 = new Employee(uniqueId[3],'Safi Walid','Administration', 'Mid-Senior','./assets/Safi.jpg',salary(1000,1500));
const employee_05 = new Employee(uniqueId[4],'Omar Zaid','Development', 'Senior','./assets/Omar.jpg',salary(1500,2000));
const employee_06 = new Employee(uniqueId[5],'Rana Saleh','Development', 'Junior','./assets/Rana.jpg', salary(500,1000));
const employee_07 = new Employee(uniqueId[6],'Hadi Ahmad','Finance', 'Mid-Senior','./assets/Hadi.jpg',salary(1000,1500));

// console.log(allEmployee)

let main= document.getElementsByTagName('main')
    let container= document.createElement('div');
    container.className='container';
    main[0].appendChild(container)
    console.log(container)

    let numOfEmp =7;
    let numOfEmpInEachRow=3;
    let numOfRows=Math.ceil(numOfEmp/numOfEmpInEachRow)


    let counter=0

    for (let i = 0; i < numOfRows; i++) {
        let row=document.createElement('div');
        row.className='row'
        container.appendChild(row);


        for (let j = 0; j < numOfEmpInEachRow; j++) {
            let employee=document.createElement('div')
            employee.className='employee'
            row.appendChild(employee)

            let card =document.createElement('div')
            card.className='card'
            employee.appendChild(card)

            
            let employeeNum=allEmployee[counter]

            let picture =document.createElement('img')
            picture.src=employeeNum['image']

            let paragraph_01 =document.createElement('p1')
            paragraph_01.textContent=`Name: ${employeeNum['fullName']} - ID: ${employeeNum['employeeId']}`
            
            let paragraph_02 =document.createElement('p2')
            paragraph_02.textContent=`Department: ${employeeNum['department']} - Level: ${employeeNum['level']}`
            
            let paragraph_03 =document.createElement('p3')
            paragraph_03.textContent=employeeNum['salary']

            card.append(picture,paragraph_01,paragraph_02,paragraph_03)
            counter++

            if (i==numOfRows-1){
                break;
            }
  
        }
    }




// var allEmp = [];
// var id = 1000;


// function salary(min, max) {
//   return (
//     Math.floor(Math.random() * (max - min)) +
//     min -
//     (Math.floor(Math.random() * (max - min)) + min) * 0.075
//   );
// }

// // This is a constructor contain all properties for employees
// function Employee(fullName, department, level, image, salary) {
//   this.employeeId = function (counter) {
//     counter = id;
//     id++;
//     return counter;
//   };
//   this.fullName = fullName;
//   this.department = department;
//   this.level = level;
//   this.image = image;
//   this.salary = salary;
//   allEmp.push(this);
// }


// const employee_01 = new Employee(
//   "Ghazi Samer",
//   "Administration",
//   "Senior",
//   "./assets/Ghazi.jpg",
//   salary(1500, 2000)
// );
// const employee_02 = new Employee(
//   "Lana Ali",
//   "Finance",
//   "Senior",
//   "./assets/Lana.jpg",
//   salary(1500, 2000)
// );
// const employee_03 = new Employee(
//   "Tamara Ayoub",
//   "Marketing",
//   "Senior",
//   "./assets/Tamara.jpg",
//   salary(1500, 2000)
// );
// const employee_04 = new Employee(
//   "Safi Walid",
//   "Administration",
//   "Mid-Senior",
//   "./assets/Safi.jpg",
//   salary(1000, 1500)
// );
// const employee_05 = new Employee(
//   "Omar Zaid",
//   "Developmentn",
//   "Senior",
//   "./assets/Omar.jpg",
//   salary(1500, 2000)
// );
// const employee_06 = new Employee(
//   "Rana Saleh",
//   "Developmentn",
//   "Junior",
//   "./assets/Rana.jpg",
//   salary(500, 1000)
// );
// const employee_07 = new Employee(
//   "Hadi Ahmad",
//   "Finance",
//   "Mid-Senior",
//   "./assets/Hadi.jpg",
//   salary(1000, 1500)
// );

// let container =document.createElement('div');
// container.className='container';

// let main=document.getElementsByTagName('main')
// main[0].appendChild(container);

// container.className='container'

// let numOfEmployees =7;
// let numOfEmployeeInEachRow =3;
// let numberOfRows=Math.ceil(numOfEmployees/numOfEmployeeInEachRow)

// let rows=[];

// for (let i=0; i<numberOfRows ;i++){

// let row=document.createElement('div');
// row.className='row'
// rows.push(row)
// container.appendChild(row);
// }
// let counter=0;
// for (let i = 0; i <rows.length; i++) {
//   for (let j = 0; j <numOfEmployeeInEachRow; j++) {
//     let card=document.createElement('div');
//     card.className='emp'

//     let employee=allEmp[counter]
//     if (employee==undefined){
//       break;
//     }


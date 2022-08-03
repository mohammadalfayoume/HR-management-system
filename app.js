// global counter
var id =999;

//Employee-01
const emp01= {
    // method to git unique ID for each employee
    employeeId: function(counter){
        counter=id
        id++
        return counter;
    },
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    // method to calculate the net salary after deduction the tax
    salary: function(min,max,randSal,netSalary) {
        var min=1500;
        var max=2000;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        var netSalary =(randSal - 0.075*randSal)
        return netSalary;
    }
};

console.log("Employee name: ", emp01.fullName);
console.log("Employee salary: ", emp01.salary());    


//Employee-02
const emp02= {
    employeeId: function(counter){
        counter=id
        id++
        return counter;
    },
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    salary: function(min,max,randSal,netSalary) {
        var min=1500;
        var max=2000;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        var netSalary =(randSal - 0.075*randSal)
        return netSalary;
    }
};
console.log("Employee name: ", emp02.fullName);
console.log("Employee salary: ", emp02.salary());

//Employee-03
const emp03= {
    employeeId: function(counter){
        counter=id
        id++
        return counter;
    },
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior",
    salary: function(min,max,randSal,netSalary) {
        var min=1500;
        var max=2000;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        var netSalary =(randSal - 0.075*randSal)
        return netSalary;
    }
};

console.log("Employee name: ", emp03.fullName);
console.log("Employee salary: ", emp03.salary());


//Employee-04
const emp04= {
    employeeId: function(counter){
        counter=id
        id++
        return counter;
    },
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    salary: function(min,max,randSal,netSalary) {
        var min=1000;
        var max=1500;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        var netSalary =(randSal - 0.075*randSal)
        return netSalary;
    }
};

console.log("Employee name: ", emp04.fullName);
console.log("Employee salary: ", emp04.salary());

//Employee-05
const emp05= {
    employeeId: function(counter){
        counter=id
        id++
        return counter;
    },
    fullName: "Omar Zaid",
    department: "Developmentn",
    level: "Senior",
    salary: function(min,max,randSal,netSalary) {
        var min=1500;
        var max=2000;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        var netSalary =(randSal - 0.075*randSal)
        return netSalary;
    }
};

console.log("Employee name: ", emp05.fullName);
console.log("Employee salary: ", emp05.salary());

//Employee-06
const emp06= {
    employeeId: function(counter){
        counter=id
        id++
        return counter;
    },
    fullName: "Rana Saleh",
    department: "Developmentn",
    level: "Junior",
    salary: function(min,max,randSal,netSalary) {
        var min=500;
        var max=1000;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        var netSalary =(randSal - 0.075*randSal)
        return netSalary;
    }
};

console.log("Employee name: ", emp06.fullName);
console.log("Employee salary: ", emp06.salary());

//Employee-07
const emp07= {
    employeeId: function(counter){
        counter=id
        id++
        return counter;
    },
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
    salary: function(min,max,randSal,netSalary) {
        var min=500;
        var max=1000;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        var netSalary =(randSal - 0.075*randSal)
        return netSalary;
    }
};

console.log("Employee name: ", emp07.fullName);
console.log("Employee salary: ", emp07.salary());
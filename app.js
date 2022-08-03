// This function to get an array contains Employee-IDs 
// function empId() {
//     var arr=[];
//     var id=0;
//     for (let i=1000 ;i<1007 ; i++) {
//         arr[id]=i;
//         id++
//     }
//     return arr;
// }
// This variable to invoke each ID from array
// var a= empId()
// console.log(a);

var id =999;

//Employee-01
const emp01= {
    // This method created to get the first employee ID
    // empId: function() {
    //     return a[0];
    // },
    // This method contain the ID
    // employeeId:function(){
    //     return this.empId();
    // },
    employeeId: function(counter){
        counter=id
        id++
        return counter;
    },
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    // method to calculate the random salary between max and min values
    salary: function(min,max,randSal,netSalary) {
        var min=1500;
        var max=2000;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        var netSalary =(randSal - 0.075*randSal)
        return netSalary;
    }
    // The random salary
    // salary : function() {
    //     return this.randomSalary();
    // },
    // // Net salary after deduction 7.5% from random salary
    // netSalary: function() {
    //     return (this.salary() - 0.075*this.salary())
    // }
};
// console.log(emp01.salary())

// print value and it will appear in the console
console.log(emp01.employeeId())
console.log("Employee name: ", emp01.fullName);
console.log("Employee salary: ", emp01.salary());    

// try
// function randomSalary(min,max,randSal) {
//     var min=1500;
//     var max=2000;
//     var randSal=Math.floor(Math.random() * (max - min)) + min;
//     return randSal;
// }

// var salary = randomSalary();
// console.log(salary)
// var netSalary = salary - salary*0.075;
// console.log(netSalary);
// try

// emp01.employeeId= a[0]
// console.log(emp01.employeeId)

//Employee-02
const emp02= {
    // empId: function() {
    //     return a[0];
    // },
    // employeeId:function(){
    //     return this.empId();
    // },
    employeeId: function(counter){
        counter=id
        id++
        return counter;
    },
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    randomSalary: function(min,max,randSal) {
        var min=1500;
        var max=2000;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        return randSal;
    },
    salary : function() {
        return this.randomSalary();
    },

    netSalary: function() {
        return (this.salary() - 0.075*this.salary())
    }
};
console.log(emp02.employeeId())
console.log("Employee name: ", emp02.fullName);
console.log("Employee salary: ", emp02.netSalary());

//Employee-03
const emp03= {
    empId: function() {
        return a[0];
    },
    employeeId:function(){
        return this.empId();
    },
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior",
    randomSalary: function(min,max,randSal) {
        var min=1500;
        var max=2000;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        return randSal;
    },
    salary : function() {
        return this.randomSalary();
    },

    netSalary: function() {
        return (this.salary() - 0.075*this.salary())
    }
};

console.log("Employee name: ", emp03.fullName);
console.log("Employee salary: ", emp03.netSalary());


//Employee-04
const emp04= {
    empId: function() {
        return a[0];
    },
    employeeId:function(){
        return this.empId();
    },
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    randomSalary: function(min,max,randSal) {
        var min=1000;
        var max=1500;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        return randSal;
    },
    salary : function() {
        return this.randomSalary();
    },

    netSalary: function() {
        return (this.salary() - 0.075*this.salary())
    }
};

console.log("Employee name: ", emp04.fullName);
console.log("Employee salary: ", emp04.netSalary());

//Employee-05
const emp05= {
    empId: function() {
        return a[0];
    },
    employeeId:function(){
        return this.empId();
    },
    fullName: "Omar Zaid",
    department: "Developmentn",
    level: "Senior",
    randomSalary: function(min,max,randSal) {
        var min=1500;
        var max=2000;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        return randSal;
    },
    salary : function() {
        return this.randomSalary();
    },

    netSalary: function() {
        return (this.salary() - 0.075*this.salary())
    }
};

console.log("Employee name: ", emp05.fullName);
console.log("Employee salary: ", emp05.netSalary());

//Employee-06
const emp06= {
    empId: function() {
        return a[0];
    },
    employeeId:function(){
        return this.empId();
    },
    fullName: "Rana Saleh",
    department: "Developmentn",
    level: "Junior",
    randomSalary: function(min,max,randSal) {
        var min=500;
        var max=1000;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        return randSal;
    },
    salary : function() {
        return this.randomSalary();
    },

    netSalary: function() {
        return (this.salary() - 0.075*this.salary())
    }
};

console.log("Employee name: ", emp06.fullName);
console.log("Employee salary: ", emp06.netSalary());

//Employee-07
const emp07= {
    empId: function() {
        return a[0];
    },
    employeeId:function(){
        return this.empId();
    },
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
    randomSalary: function(min,max,randSal) {
        var min=1000;
        var max=1500;
        var randSal=Math.floor(Math.random() * (max - min)) + min;
        return randSal;
    },
    salary : function() {
        return this.randomSalary();
    },

    netSalary: function() {
        return (this.salary() - 0.075*this.salary())
    }
};

console.log("Employee name: ", emp07.fullName);
console.log("Employee salary: ", emp07.netSalary());

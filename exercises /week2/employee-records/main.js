var employees = [];

function Employee (fullName, jobTitle, salary) {
    this.fullName = fullName;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function () {
        console.log(employees);
    };
}

var bob = new Employee("Bob Barker", "Instructor", "$50/hour");
var jan = new Employee("Jan Jones", "Secretary", "$8/hour");
var mary = new Employee("Mary Smith", "Accountant", "$40/hour");

mary.status = "part time";
jan.status = "contract";

employees.push(jan, mary, bob);
bob.printEmployeeForm();
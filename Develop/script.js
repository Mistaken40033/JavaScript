// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Adding a button
addEmployeesBtn.textContent = 'Add Employee Roster';


let employees = [];
// adding employees info on array
function addEmployee(firstName,lastName, salary) {
  let employee={
    firstName:firstName,
    lastName: lastName,
    salary:salary
  };
  employee.push(employee);
  
  const addMoreEmployees = true;

  while (addMoreEmployees){
    let firstName = prompt ("Enter employees first name:");
    let lastName = prompt ("Enter employees last name:");
    let salary = parseFloat (prompt("Enter employee's salary:"));
    }
  console.log(employees);
}
// console.log("searchEmployees salary", employees());

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];

  while (confirm ("Add Employee")) {
    const firstName = prompt("First Name");
    const lastName = prompt ("Last Name");
    const salary = prompt ("Salary");
    employees.push({firstName, lastName})
  }
  return;
}

// console.log("getEmployee salary: ", getRandomEmployee());



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  function calculateAverageSalary(employees) {
    const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
    return totalSalary / employees.length;
}
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}
  

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
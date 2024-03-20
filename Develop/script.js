// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// console.log("searchEmployees salary", employees());
// console.log(employees);
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];

  while (confirm ("Add Employee")) {
    const firstName = prompt("First Name");
    const lastName = prompt ("Last Name");
    const salary = prompt ("Salary");
    employees.push({firstName, lastName, salary})
  }
  // addMoreEmployees=(confirm("Add Employee"))
  return employees;
}

// console.log("getEmployee salary: ", getRandomEmployee());


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  //define total running total variable

  // Calculate and display the average salary
  
let totalSalary = 0;
const employeeTable = document.getElementById('employee-table');

// Add up all the salaries
for (let i = 0; i < employeesArray; i++) {
    totalSalary += employeesArray[i].salary;
}

// Calculate the average salary

function logRandomEmployeeName(employees) {
  let randomIndex = Math.floor(Math.random() * employees.length);
  console.log(`Random Employee: ${employees[randomIndex].firstName} ${employees[randomIndex].lastName}`);
}

const averageSalary = totalSalary / employeesArray;

// Display the average salary in the console
// console.log(`Average Salary: $${averageSalary}`);
// employeeTable[getRandomEmployee].employeeName
}

// Select a random employee
function getRandomEmployee(employeesArray) {
  // TODO: Select and display a random employee
  function getRandomEmployee(employeeArray) {
    const randomIndex = console.log(Math.floor(Math.random() * employeeArray.length));
    employeeArray[randomIndex].employeeName
  }

  // Usage
// if (condition) {
//     const randomEmployee = getRandomEmployee(employees);
//     console.log(randomEmployee);
//     function getRandomEmployee(employeeArray) {
//       const randomIndex = Math.floor(Math.random() * employeeArray.length);
//       return employeeArray[randomIndex];
//     }
  
//     console.log(randomEmployee);
//   }
}
  

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
function displayEmployees(employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
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

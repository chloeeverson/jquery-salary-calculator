//test js is sourced
console.log('js');

//array of employees
let staff = []

$(document).ready(readyNow);

function readyNow() {
    //test jquery is sourced
    console.log('JQ');
    //on click of submit button do addemployee function
    $('#submitButton').on('click' , addEmployee);
    $('#employeeOut').on('click', '.delete' , deleteEmployee)
    
}

function deleteEmployee() {
    //test if function being called
    console.log('delete student');

    //remove employee using button
    $(this).closest('tr').remove();
    
}//end deleteEmployee

//function for storing employee info and appending to DOM
function addEmployee() {
    //test if in addEmployee
    console.log('in addEmployee');
    
    //creating employee which stores all of that employees info from input
    let employee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        ID: $('#idInput').val(),
        jobTitle: $('#jobInput').val(),
        annualSalary: $('#salaryInput').val(),
    }

    //put employee in staff array
    staff.push(employee);

    //empty inputs
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#jobInput').val('');
    $('#salaryInput').val('');

    //display employees function
    displayEmployee();
    //calculate total monthly cost
    calculateTotalMonthly();
    
} //end addEmployee

function displayEmployee() {
    //clear everything out first
    $('#employeeOut').empty();
    //loop through array - display items of each object in array
    for (let worker of staff) {
        $('#employeeOut').append(`
            <tr>
                <td>${worker.firstName}</td>
                <td>${worker.lastName}</td>
                <td>${worker.ID}</td>
                <td>${worker.jobTitle}</td>
                <td>$${worker.annualSalary}</td>
                <td>
                    <button class="delete">Delete</button>
                </td>
            </tr>
        `)
    }
       

}//end displayEmployee

function calculateTotalMonthly() {
    //set total cost variable to zero
    let totalCost = 0
    //loop through array and add all annual salary properties
    //set total cost = to total sum of salaries
    for (let i=0; i<staff.length; i++){
        totalCost += Number((staff[i].annualSalary/12));
    }
    //set variable = to totalcost id in html
    let el = $('.totalCostOut')
    //empty input so not concatenating each time total
    el.empty();
    //when over 20000 - make total cost red background
    if (totalCost > 20000){
        el.append(`<span class="redZone">${totalCost}</span>`)
    } else {
        el.append(`<span class="okZone">${totalCost}</span>`)
    }

}//end calculateTotalMonthly
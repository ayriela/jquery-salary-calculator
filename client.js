$(document).ready(onReady);

let currentEmployees=[];
//add base test employee
currentEmployees.push({
    id: '4521',
    salary: '80000'
});

function onReady(){
    console.log('in onReady')
    $('#addNewEmployee').on('click', addEmployee);
    //display starting monthly total
    $('#foot').append('<td colspan="6">Monthly Total: $' + (80000/12).toFixed(2)+'</td>');
    //add event listener for all new deleteButtons 
    $('#employeeTable').on('click', '.deleteButton', deleteRow);
}//end onReady

function addEmployee(){
    console.log('in addEmployee');
    //grab values from  input fields
    let firstName=$('#firstName').val();
    let lastName=$('#lastName').val();
    //future idea make sure employee id hasn't been used before accepted
    let employeeId=$('#employeeId').val();
    let jobTitle=$('#jobTitle').val();
    //make number for future calculations
    let annual=Number($('#annualSalary').val());
    //clear the input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeId').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    //add employee to array
    currentEmployees.push(
        {
            id: employeeId,
            salary: annual
        }
    );
    //format salary to money
    let salary=annual.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    //add new employee to table including new delete button
    let str=`<tr id=${employeeId}><td>${firstName}</td><td>${lastName}</td><td>${employeeId}</td><td>${jobTitle}</td><td style="text-align: right">$${salary}</td><td><button class="deleteButton">Delete</button></td></tr>`
    $('tbody').append(str);
    //update totalMonthly
    totalMonthly(currentEmployees);
}//end addEmployee

function deleteRow(){
    console.log('in delete row');
    //identify which row was clicked
    let target=$(this).closest("tr");
    //get id to target array 
    let deleteId=target.attr('id');
    //remove entry from array 
    let deleteIndex=currentEmployees.map(function(e) { return e.id; }).indexOf(deleteId);
    currentEmployees.splice(deleteIndex,1);
    //remove from the table
    target.remove();
    //retotal salaries
    totalMonthly(currentEmployees);
}//end delete row

function totalMonthly(array){
    console.log('in totalMonthly')
    //copied reduce from stackOverflow with modified names to fit current use 
    //used + to cast the salary to a number since added values input as string
    let totalAnnual=array.reduce((total, current) => total + (+current['salary'] || 0), 0);
    let totalMonth=totalAnnual/12;
    //format total to money (copied regex from stack Overflow)
    let totalMoney=totalMonth.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    //update DOM
    $('#foot').replaceWith('<tr id="foot"><td colspan="6">Monthly Total: $' + totalMoney+ '</td></tr>');
    //if total >20000 add red background
    if (totalMonth>20000){
        $('tfoot').css('background-color', 'red');
    } else {
        $('tfoot').css('background-color', 'white');
    }
}//end totalMonthly
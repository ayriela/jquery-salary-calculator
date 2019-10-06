$(document).ready(onReady);

let monthlyTotal=0;

function onReady(){
    console.log('in onReady')
    $('#addNewEmployee').on('click', addEmployee);
    //display starting monthly total
    $('#totalMonthy').append('<p id=\"monthlyTotal\">'+80000/12+'</p>');
    $('#employeeTable').on('click', '.deleteButton', deleteRow);
}//end onReady

function addEmployee(){
    console.log('in addEmployee');
    //grab values from  input fields
    let firstName=$('#firstName').val();
    let lastName=$('#lastName').val();
    let employeeId=$('#employeeId').val();
    let jobTitle=$('#jobTitle').val();
    let annual=$('#annualSalary').val();

    //incremenet meetupCounter
    //meetupCounter++;

    //NOT DONE! format salary to money
    let salary=annual;

    //add values to table including new delete button
    let str=`<tr><td>${firstName}</td><td>${lastName}</td><td>${employeeId}</td><td>${jobTitle}</td><td>${salary}</td><td><button class="deleteButton">Delete</button></td></tr>`
    $('tbody').append(str);

    //increment counter and send back to p tag
    //$('#currentCount').text(meetupCounter);

}//end addEmployee

function deleteRow(){
    console.log('in delete row');
    //get the delete row
    //for  id base remove which is unnecessary let myRow=$(this).closest("tr").attr("id");
    //remove row based on id $('#'+myRow).remove();
    //remove the row from the click
    $(this).closest("tr").remove();
    //decrement the counter
    meetupCounter --;
    $('#currentCount').text(meetupCounter);

}//end delete row
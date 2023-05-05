$(function () {
    console.log('Screw all yall');
    
    // Add listener for delete buttons.
    $("#tableBody").on("click", ".fire", deleteEmployee);

    // Add listener to add employee.
    $("#submitButton").on("click", addEmployee);
});


function deleteEmployee(event) {
    // Delete item off list.
    $(event.target).closest("tr").remove();
}


function addEmployee() {
    // Add employee to table.
    $("#tableBody").append(`<tr>
    <td>${$("#firstNameInput").val()}</td>
    <td>${$("#lastNameInput").val()}</td>
    <td>${$("#idInput").val()}</td>
    <td>${$("#titleInput").val()}</td>
    <td>${$("#salaryInput").val()}</td>
    <td><button class="fire">Fire</button></td>
    </tr>`);
    console.log("WWOOOOORK");
}

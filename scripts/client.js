// Storing total monthly expenses to be modified before putting on the DOM.
let totalMonthlyExpenses = 0;

$(function () {
    console.log('JS and JQ');

    // Add listener for delete buttons.
    $("#tableBody").on("click", ".fire", deleteEmployee);

    // Add listener to add employee.
    $("#submitButton").on("click", addEmployee);
});


function deleteEmployee(event) {
    // Get monthly salary from employee and remove from the global totalMonthlyExpenses variable.
    totalMonthlyExpenses -= Number($(event.target).closest("tr").data("monthsalary"));

    // Display monthly expenses.
    $("#totalMoneyOut").text(`$${totalMonthlyExpenses.toLocaleString()}`);
    checkExpenses();

    // Delete item off list.
    $(event.target).closest("tr").remove();
}


function addEmployee() {
    // Checking if any input was left empty.
    if(!$("#firstNameInput").val() || !$("#lastNameInput").val() || !$("#idInput").val() || !$("#titleInput") || !$("#salaryInput").val()) {
        alert("Please fill out all the forms properly you dingus!");
        return undefined;
    }

    // Add employee to table.
    $("#tableBody").append(`<tr data-monthsalary="${Math.round($("#salaryInput").val() / 12)}">
    <td>${$("#firstNameInput").val()}</td>
    <td>${$("#lastNameInput").val()}</td>
    <td>${$("#idInput").val()}</td>
    <td>${$("#titleInput").val()}</td>
    <td>$${Number($("#salaryInput").val()).toLocaleString()}</td>
    <td><button class="fire">Fire</button></td>
    </tr>`);

    // Add money to the total monthly expenses.
    totalMonthlyExpenses += Math.round($("#salaryInput").val() / 12);

    // Display on DOM.
    $("#totalMoneyOut").text(`$${totalMonthlyExpenses.toLocaleString()}`);
    checkExpenses();

    // Clear inputs.
    $("#firstNameInput").val('');
    $("#lastNameInput").val('');
    $("#idInput").val('');
    $("#titleInput").val('');
    $("#salaryInput").val('');
}


function checkExpenses() {
    if (totalMonthlyExpenses > 20000){
        // Too much money being spent. Ben Franklin is mad, and the background turns red.
        $("#totalMoneyOut").toggleClass("overBudget", true);
        $("#totalMoneyOut").toggleClass("underBudget", false);
        // Ben is mad, and needs to show it.
        $("#ben").attr("src", "./style/upsetben.jpg");
    } else {
        // Money is under budget, Ben is fine, and the background is normal.
        $("#totalMoneyOut").toggleClass("overBudget", false);
        $("#totalMoneyOUt").toggleClass("underBudget", true);
        // Ben is feeling fine, and must show it.
        $("#ben").attr("src", "./style/happyben.jpg");
    }
}

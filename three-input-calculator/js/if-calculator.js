function calculate() {

    // Variables
    var input1 = parseFloat(document.getElementById("input1").value); // First input field (num)
    var input2 = document.getElementById("input2").value; // Second input field (operator)
    var input3 = parseFloat(document.getElementById("input3").value); // Third input field (num)

    // Calculation logic
    var result;
    if (input2 === "+") {
        result = input1 + input3;
    } else if (input2 === "-") {
        result = input1 - input3;
    } else if (input2 === "*") {
        result = input1 * input3;
    } else if (input2 === "/") {
        result = input1 / input3;
    } else {
        result = "Invalid operator";
    }

    // Result display
    document.getElementById("result").innerHTML = "Result: " + result;

}
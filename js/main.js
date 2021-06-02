function getInputValue() {
    // constant for valid regex email address checking
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Selecting the input element and get its value
    var inputVal = document.getElementById("myInput").value;

    // Displaying the value
    if (inputVal.length == 0) {
        alert("Whoops. It looks like you forgot to add your email");
    } else if (!inputVal.match(validRegex)) {
        alert("Please provide a valid email address");
    }
}

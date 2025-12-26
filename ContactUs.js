function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var country = document.getElementById("country").value;
    var subject = document.getElementById("subject").value;

    if (fname == "" || lname == "" || country == "" || subject == "") {
        alert("All fields must be filled out");
        return false;
    }

    return true;
}

function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response=>response.json())
        .then(data=> {
            document.getElementById("result").innerHTML =
                "<h3>" + data.title + "</h3>" +
                "<p>" + data.body + "</p>";
        })
        .catch(error => {
            console.log(error);
        });
}
function validateForm() {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    if (name===""||email===""||password==="") {
        document.getElementById("message").innerHTML="Please fill all fields.";
        document.getElementById("message").style.color = "red";
        return false;
    }
    document.getElementById("message").innerHTML="Registration Successful!";
    document.getElementById("message").style.color="green";
    return false;
}
function changeColor() {
    document.body.style.backgroundColor = "lightgreen";
}
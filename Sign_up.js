function contacts(){
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if(name == "" || name == null && email == "" || email == null)
    {
      alert("Fields must be filled up");
      return false;
    } 
    else if(message == "" || message == null)
    {
      alert("Fields must be filled up");
    } 
    else if(name == "" || name == null && message == "" || message == null)
    {
      alert("Fields must be filled up");
    }
      
    else if(email == "" || email == null && message == "" || message == null){
      alert("Fields must be filled up");
    }
    else{
    alert("Your message will send right away!");
    }
  }

function validateSignUp(event) {
    event.preventDefault();

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let occupation = document.getElementById('occupation').value;

    if (fname == "" || fname == null) {
        alert("First Name must be filled up");
        return false;
    }
    if (lname == "" || lname == null) {
        alert("Last Name must be filled up");
        return false;
    }
    if (email == "" || email == null) {
        alert("Email must be filled up");
        return false;
    }
    if (password == "" || password == null) {
        alert("Password must be filled up");
        return false;
    }
    if (occupation == "" || occupation == null) {
        alert("Occupation must be filled up");
        return false;
    }


    alert("Sign-up successful!");
    window.location.href = "Log_in.html";
}

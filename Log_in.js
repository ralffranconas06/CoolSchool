function validateLog(){
  event.preventDefault();

  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (username == "example@gmail.com" && password == "123"){
    alert("Successfully Log in!");
    window.location.href = "Homepage.html"
  } 
  else if(username == "example@gmail.com"){
    alert("Incorrect password or username");
    return false;
  }
  else if(password == "123"){
    alert("Incorrect password or username");
    return false;
  }
}
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

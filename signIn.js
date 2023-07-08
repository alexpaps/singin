document.body.style.backgroundColor = "white";

document.getElementById("DoneButton").addEventListener("click", function() {
  let email1 = document.getElementById("Email").value;
  let password1 = document.getElementById("Password").value;
  // let myList = JSON.parse(localStorage.getItem('data')) || [{email:"alexpapadopoulos1011@gmail.com",password:"fineas9988"},{email:"hsbuvsahvs@gmail.com",password:"chzvhcv6348888"}];
  let names = localStorage.getItem("myNames") || "";
  let emails = localStorage.getItem("myEmails") || "";
  let passwords = localStorage.getItem("myPasswords") || "";
  const namesList = names.split(',') || [];
  const emailsList = emails.split(',') || [];
  const passwordsList = passwords.split(',') || [];
  const listLength = emailsList.length;
  let errorNum = 0;
  console.log(names,emails,passwords,namesList,emailsList,passwordsList);

  if (email1 && password1 && listLength > 0) {
    let userData = {
          email:String(email1),
          password:String(password1)
    };

    let i =0;
    while(i < listLength){
        if (emailsList[i] == userData.email && passwordsList[i] == userData.password){
          // Display success message
          alert("Logged in!Hii mr/miss "+namesList[i]);
          window.location.href = "mainPage.html";
          errorNum = 1;
          break;
        }else if(passwordsList[i] != userData.password && emailsList[i] == userData.email){
          errorNum = 2;
          break;
        }
        errorNum = 3;
        i++;
      };

      if(errorNum == 2){
        alert("Incorrect password!");
      }else if(errorNum == 3){
        alert("Not valid account!");
      }
      

      // Clear the input fields
      document.getElementById("Email").value = "";
      document.getElementById("Password").value = "";

  } else {
      alert("Please enter both name and password.");
  }
});

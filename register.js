document.body.style.backgroundColor = "white";

document.getElementById("RegisterButton").addEventListener("click", function() {
  let name = document.getElementById("Name").value;
  let email = document.getElementById("Email").value;
  let password = document.getElementById("Password").value;
  // let myList = JSON.parse(localStorage.getItem('data')) || [];
  let names = localStorage.getItem("myNames") || "";
  let emails = localStorage.getItem("myEmails") || "";
  let passwords = localStorage.getItem("myPasswords") || "";
  const emailList = emails.split(',') || [];
  let sameEmailNumber = 0;

  console.log(password);

  if (name && password) {
    let userData = {
          name: String(name),
          email: String(email),
          password: String(password)
      };

      // Using push() methods
      // myList.push(userData);

      for(let i=0;i < emailList.length;i++){
        if(userData.email == emailList[i]){
          sameEmailNumber = 1;
          break;
        }
      }

      if(sameEmailNumber == 1){

        // Clear the input fields
        document.getElementById("Name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Password").value = "";
        alert('That email has already an account!')

      }else{
        if(emailList.length == 0){
          localStorage.setItem("myNames", userData.name);
          localStorage.setItem("myEmails", userData.email);
          localStorage.setItem("myPasswords", userData.password);
          
          // Clear the input fields
          document.getElementById("Name").value = "";
          document.getElementById("Email").value = "";
          document.getElementById("Password").value = "";
  
          window.location.href = "mainPage.html";
        }else{

        localStorage.setItem("myNames", names+","+userData.name);
        localStorage.setItem("myEmails", emails+","+userData.email);
        localStorage.setItem("myPasswords", passwords+","+userData.password);
        
        // Clear the input fields
        document.getElementById("Name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Password").value = "";

        window.location.href = "mainPage.html";
        }
      }

  } else {
      alert("Please enter all the required information.");
  }
});


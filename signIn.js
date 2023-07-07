document.body.style.backgroundColor = "white";

document.getElementById("DoneButton").addEventListener("click", function() {
  let name = document.getElementById("Name").value;
  let password = document.getElementById("Password").value;
  let myList = JSON.parse(localStorage.getItem('data')) || [];
  
  if (name && password) {
    let userData = {
          name: name,
          password: password
      };

      // // Using push() methods
      // myList.push(userData);

      // // Output the updated list
      // console.log(myList);

      // localStorage.setItem('data', JSON.stringify(myList));

      // Clear the input fields
      document.getElementById("Name").value = "";
      document.getElementById("Password").value = "";
      
      
      // Display success message
      alert("Data saved successfully!");
  } else {
      alert("Please enter both name and password.");
  }
});

document.getElementById("Name").addEventListener("click",function(){
    // Get a reference to the div element
  const divElement = document.getElementById("nameView");

  // Add a class to the element
  divElement.classList.add("myClass");
});

document.getElementById("Password").addEventListener("click",function(){
  // Get a reference to the div element
const divElement = document.getElementById("nameView");

// Add a class to the element
divElement.classList.remove("myClass");
});
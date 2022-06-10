//Creating a function to handle logging in to the database
async function loginFormHandler(event) {
  event.preventDefault();
  //grabbing the user's email address and password from the DOM and setting them to variables
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  //Telling the browser that if the email address and password entries are "true" then to initiate the API fetch logging the user in
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    //Telling the browser to redirect the user to the dashboard page if the email and password inputs are valid
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}
//Creating a function that allows a new user to sign up for our site
async function signupFormHandler(event) {
  event.preventDefault();
  //Setting the user inputted username, email address, and password strings to constant variables
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  //Telling the browser to add the user inputted information to the database after turning it into JSON input
  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    //Telling the browser to redirect the user to the dashboard page
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}
//Calling the log in function once the log in button click event occurs
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
//Calling the sign up function once the email, password, and username information is entered and the submit button is clicked
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

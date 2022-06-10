//Creating a function to handle logging a user out and redirecting them to the home page
async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });
  //telling the browser what to do with the API fetch call
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}
//Calling the function upon the click event of the logout button
document.querySelector("#logout").addEventListener("click", logout);

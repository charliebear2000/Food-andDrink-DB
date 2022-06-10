//Creating a function that will enable the user to delete a post from the database
async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  //Setting the API call to a constant that will be used in the if/else statement telling the browser what to do with that API call
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      post_id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //If/else statement telling the browser what to do with the API fetch
  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}
//Calling the function once the delete post event occurs
document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);

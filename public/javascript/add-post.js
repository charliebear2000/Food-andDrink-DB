//Function that is triggered by the create post button click event

async function newFormHandler(event) {
  event.preventDefault();
  //grabbing the title of the post and the link element's from the DOM
  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;

  //Setting the API call response to a variable to be used in the if/else statement
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_url,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //Telling the browser what to do with the API call response
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}
//Calling the new post function once the submit button is clicked
document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

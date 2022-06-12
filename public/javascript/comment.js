//Creating the function that enables the user to make comments on people's posted recipes
async function commentFormHandler(event) {
  event.preventDefault();
  //Grabbing the text element from the DOM and setting it to a variable
  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  //API fetch call which will pull and display comments made through the POST route
  if (comment_text) {
    //Setting the results of the API call to a variable
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //telling the browser what to do with the information retrieved by the API call. 
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}
//Calling the function every time the submit button is clicked to comment on people's posts
document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);

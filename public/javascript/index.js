// Setting all of the animation parameters to an easily usable variable
var options = {
  opacityIn: [0, 1],
  scaleIn: [0.2, 1],
  scaleOut: 0,
  durationIn: 800,
  durationOut: 600,
  delay: 500,
  easing: "easeInOutExpo",
};
//Initiating the timeline which controls the flow of the animation
//Setting the entry and exit animation of the word "The"
anime
  .timeline({ loop: false })
  .add({
    targets: ".text-animation .one",
    opacity: options.opacityIn,
    scale: options.scaleIn,
    duration: options.durationIn,
  })
  .add({
    targets: ".text-animation .one",
    opacity: 0,
    scale: options.scaleOut,
    easing: options.easing,
    duration: options.durationOut,
    delay: options.delay,
  })
  //Setting the entry and exit animations of the word "Recipe"
  .add({
    targets: ".text-animation .two",
    opacity: options.opacityIn,
    scale: options.scaleIn,
    duration: options.durationIn,
  })
  .add({
    targets: ".text-animation .two",
    opacity: 0,
    scale: options.scaleOut,
    easing: options.easing,
    duration: options.durationOut,
    delay: options.delay,
  })
  //Setting the entry and exit animations of the word "Pantry",
  //Utilizing translateX to get the word to slide off of the screen to the right
  .add({
    targets: ".text-animation .three",
    opacity: options.opacityIn,
    scale: options.scaleIn,
    duration: options.durationIn,
  })
  .add({
    targets: ".text-animation .three",
    opactiy: 0,
    scale: options.scaleOut,
    easing: options.easing,
    duration: options.durationOut,
    delay: options.delay,
  })
  //Setting the entry animation of the descriptive paragraph of our site and
  //intentionally leaving out the scaleOut action so that the paragraph remains on the screen
  .add({
    targets: ".text-animation .four",
    opacity: options.opacityIn,
    scale: options.scaleIn,
    duration: options.durationIn,
  })
  .add({
    targets: ".text-animation .four",
    opactiy: 0,
    easing: options.easing,
    duration: options.durationOut,
    delay: options.delay,
  });

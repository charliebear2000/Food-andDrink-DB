//import animejs
// const anime = require("animejs");

// Wrap every letter in a span

var options = {
  opacityIn: [0, 1],
  scaleIn: [0.2, 1],
  scaleOut: 3,
  durationIn: 800,
  durationOut: 600,
  delay: 500,
  easing: "easeInExpo",
};

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
  .add({
    targets: ".text-animation",
    opacity: 0,
    duration: 500,
    delay: 500,
  });

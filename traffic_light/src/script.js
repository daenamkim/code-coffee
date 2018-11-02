/* YOUR CHALLENGE: Create a working traffic light.

When the user clicks "run sequence", the traffic light should
cycle through the red, yellow, and green colors.

This should look like a real traffic light– colors should not overlap
and each color should stay lit for a small amount of time.

Open the index.html file in your browser to test your code.
You may edit any of the files in this folder to complete this challenge.
Your goal is to make the best working version of a traffic light in the
time allotted (so if you finish early, add additional
functionality and make your code as high quality as you can!)
*/

const IDLE = "";
const RED = "red";
const YELLOW = "yellow";
const GREEN = "green";

const updateState = (state) => {
  switch (state) {
    case IDLE:
      return RED;
    case RED:
      return GREEN;
    case GREEN:
      return YELLOW;
    case YELLOW:
      return RED;
    default:
      return IDLE;
  }
};

const updateLight = (state) => {
  const lights = document.getElementsByTagName("circle");
  [...lights].forEach(light => light.removeAttribute("class"));
  document.getElementById(state).setAttribute("class", state);
};

const runSequence = (...params) => {
  const currentState = updateState(params[0]);
  updateLight(currentState);
  setTimeout(runSequence, 1000, currentState);
}

window.onload = () => {
  const button = document.getElementById("run");
  button.addEventListener("click", () => {
    setTimeout(runSequence, 1000, IDLE);
  });
};

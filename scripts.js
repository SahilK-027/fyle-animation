const lines = document.querySelectorAll(".line");
const lineContainer = document.querySelector(".all-lines");

function isAnimating(element) {
  const styles = window.getComputedStyle(element);
  const animationName = styles.animationName || styles.webkitAnimationName;
  return animationName !== "none";
}

const replayAnimations = () => {
  lines.forEach((line) => {
    const lineAnimation = line.getAnimations()[0];
    if (lineAnimation) {
      lineAnimation.cancel();
      lineAnimation.play();
    }
  });
};

setInterval(() => {
  replayAnimations();
}, 3800);

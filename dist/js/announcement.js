const rewards = document.querySelector(".rewards");
window.addEventListener("scroll", () => {
  if ((window, scrollY >= 100)) {
    rewards.classList.add("announce");
  } else {
    window, scrollY >= 100;
    rewards.classList.remove("announce");
  }
});

const navbar = document.querySelector("#navbar");
const navbtn = document.querySelector(".menu");

navbtn.addEventListener("click", () => {
  const open = navbar.getAttribute("visible");

  if (open == "false") {
    navbar.setAttribute("visible", "true");
    navbtn.setAttribute("aria-expand", "true");
  } else if (open == "true") {
    navbar.setAttribute("visible", "false");
    navbtn.setAttribute("aria-expand", "flase");
  }
});

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
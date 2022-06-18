window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);

  const nav = document.querySelector(".nav");
  const toggle = document.querySelector("#menuToggle input");
  const toggleClass = () => {
    nav.classList.toggle("active");
  };

  toggle.addEventListener("click", toggleClass);
});

const navbar = document.querySelector("#navbar");
const header = document.querySelector("#tophead");
const loginbtn = document.querySelector("login-btn");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  headerHeight < scrollY
    ? navbar.classList.add("navbar-sticky")
    : navbar.classList.remove("navbar-sticky");
});

const logout = document.querySelector(".logout-btn");

logout.addEventListener("click", (ev) => {
  const navItems = document.querySelectorAll(".Topbar_MenuItem");
  navItems[0].setAttribute("href", "");
  navItems[1].setAttribute("href", "");
  navItems[2].setAttribute("href", "");
});

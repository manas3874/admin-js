const credentials = document.querySelectorAll(".LoginPage_InputField");
const submit = document.querySelector(".LoginPage_Button");
submit.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (credentials[0].value == credentials[1].value) {
    const navItems = document.querySelectorAll(".Topbar_MenuItem");
    navItems[0].setAttribute("href", "./orders.html");
    navItems[1].setAttribute("href", "./products.html");
    navItems[2].setAttribute("href", "./index.html");
    window.location.href = "./orders.html";
  } else {
    alert("invalid credentials");
  }
});

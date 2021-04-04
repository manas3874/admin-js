// ! *******************************************************************************************************************

// ! users page
const usersCard = document.querySelector(".UserList_TableRow");
const searchInput = document.querySelector(".UserList_SearchBox");
const searchButton = document.querySelector(".UserList_Button");
searchButton.addEventListener("click", () => {
  searchInput.value = "";
});
// ! Function to render users based on the search terms/string
usersRenderer = (searchString) => {
  $.get(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
    function (data, status) {
      var newHtml;
      usersCard.innerHTML = "";
      data.map((item) => {
        if (
          item.fullName
            .toString()
            .toLowerCase()
            .includes(searchString.toLowerCase())
        ) {
          newHtml = `<tr class="UserList_TableRow"><td class="UserList_SecondaryText">${item.id}</td><td class="UserList_PrimaryText"><img src=${item.profilePic} alt="Profile Pic"></td><td class="UserList_SecondaryText">${item.fullName}</td><td class="UserList_PrimaryText">${item.dob}</td><td class="UserList_SecondaryText__3UV5v">${item.gender}</td><td class="UserList_SecondaryText">${item.currentCity}, ${item.currentCountry}</td></tr>`;
          usersCard.insertAdjacentHTML("beforeend", newHtml);
        }
      });
    }
  );
};
// ! Initial render
usersRenderer("");
window.addEventListener("keyup", (ev) => {
  ev.preventDefault();
  if (ev.keyCode == 13) {
    if (searchInput.value.toString().length > 1) {
      usersRenderer(searchInput.value);
    } else {
      alert("Please input 2 or more characters");
    }
  }
});

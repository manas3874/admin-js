const trWrapper = document.getElementById("trWrapper");

// ! products page
$.get(
  "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
  function (data, status) {
    var newHtml;
    data.map((item) => {
      newHtml = `<tr class="ProductListingPage_TableRow ProductListingPage_ExpiredRow" id="trWrapper"><td class="ProductListingPage_SecondaryText" id="text1">${item.id}</td><td class="ProductListingPage_PrimaryText" id="text2">${item.medicineName}</td><td class="ProductListingPage_SecondaryText" id="text3">${item.medicineBrand}</td><td class="ProductListingPage_PrimaryText" id="text4">${item.expiryDate}</td><td class="ProductListingPage_SecondaryText" id="text5">$${item.unitPrice}</td><td class="ProductListingPage_SecondaryText" id="text6">${item.stock}</td></tr>`;
      trWrapper.insertAdjacentHTML("beforeend", newHtml);
    });
  }
);

// ! orders page
const ordersCard = document.querySelector(".Homepage_TableRow");
const checkboxes = document.querySelectorAll(".Homepage_FilterCheckbox input");
const counter = document.querySelector(".filterCount");
const func = (activeOrderFilters) => {
  $.get(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
    function (data, status) {
      var newHtml;
      var count = 0;

      ordersCard.innerHTML = "";
      data.map((item) => {
        if (item.orderStatus in activeOrderFilters) {
          count++;
          newHtml = `<tr class="Homepage_TableRow"><td class="Homepage_SecondaryText">${item.id}</td><td class="Homepage_PrimaryText">${item.customerName}</td><td class="Homepage_PrimaryText">${item.orderDate}<br /><span class="Homepage_SecondaryText">${item.orderTime}</span></td><td class="Homepage_SecondaryText">$${item.amount}</td><td class="Homepage_PrimaryText">${item.orderStatus}</td></tr>`;
          ordersCard.insertAdjacentHTML("beforeend", newHtml);
          counter.innerHTML = count;
        }
      });
    }
  );
};

var arr = new Array(checkboxes);
arr = arr[0];
var activeOrderFilters = { New: 1, Packed: 1, InTransit: 1, Delivered: 1 };
func(activeOrderFilters);
for (let item of arr) {
  item.addEventListener("change", (ev) => {
    if (ev.currentTarget.checked) {
      if (!(ev.currentTarget.value in activeOrderFilters)) {
        activeOrderFilters[ev.currentTarget.value] = 1;
      }
    } else {
      if (ev.currentTarget.value in activeOrderFilters) {
        delete activeOrderFilters[ev.currentTarget.value];
      }
    }
    func(activeOrderFilters);
  });
}

// $.get(
//   "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
//   function (data, status) {
//     var newHtml;
//     data.map((item) => {
//       newHtml = `<tr class="Homepage_TableRow"><td class="Homepage_SecondaryText">${item.id}</td><td class="Homepage_PrimaryText">${item.customerName}</td><td class="Homepage_PrimaryText">${item.orderDate}<br /><span class="Homepage_SecondaryText">${item.orderTime}</span></td><td class="Homepage_SecondaryText">$${item.amount}</td><td class="Homepage_PrimaryText">${item.orderStatus}</td></tr>`;
//       ordersCard.insertAdjacentHTML("beforeend", newHtml);
//     });
//   }
// );

// ! users page
const usersCard = document.querySelector(".UserList_TableRow");
$.get(
  "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
  function (data, status) {
    var newHtml;
    data.map((item) => {
      newHtml = `<tr class="UserList_TableRow"><td class="UserList_SecondaryText">${item.id}</td><td class="UserList_PrimaryText"><img src=${item.profilePic} alt="Profile Pic"></td><td class="UserList_SecondaryText">${item.fullName}</td><td class="UserList_PrimaryText">${item.dob}</td><td class="UserList_SecondaryText__3UV5v">${item.gender}</td><td class="UserList_SecondaryText">${item.currentCity}, ${item.currentCountry}</td></tr>`;
      usersCard.insertAdjacentHTML("beforeend", newHtml);
    });
  }
);

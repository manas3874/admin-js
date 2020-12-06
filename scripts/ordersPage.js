// ! *******************************************************************************************************************

// ! orders page
const ordersCard = document.querySelector(".Homepage_TableRow");
const checkboxes = document.querySelectorAll(".Homepage_FilterCheckbox input");
const orderCounter = document.querySelector(".filterCount");
const ordersRenderer = (activeOrderFilters) => {
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
          orderCounter.innerHTML = count;
        }
      });
    }
  );
};

var arr = new Array(checkboxes);
arr = arr[0];
var activeOrderFilters = { New: 1, Packed: 1, InTransit: 1, Delivered: 1 };
ordersRenderer(activeOrderFilters);
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

    if (!Object.keys(activeOrderFilters).length) {
      orderCounter.innerHTML = "0";
    }
    ordersRenderer(activeOrderFilters);
  });
}

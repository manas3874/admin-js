// ! *******************************************************************************************************************

// ! products page
const trWrapper = document.getElementById("trWrapper");
const productFilterCheckboxes = document.querySelectorAll(
  ".ProductListingPage_FilterCheckbox input"
);
const productCounter = document.querySelector(".productFilterCount");
var activeProductFilters = { Expired: 1, LowStock: 1 };
var arrayOfMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const productsRenderer = (activeProductFilters) => {
  $.get(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
    function (data, status) {
      var newHtml;
      var counter = 0;

      trWrapper.innerHTML = "";
      data.map((item) => {
        // ! only lowstock checked
        if (
          "LowStock" in activeProductFilters &&
          item.stock < 100 &&
          !("Expired" in activeProductFilters)
        ) {
          counter++;
          newHtml = `<tr class="ProductListingPage_TableRow ProductListingPage_ExpiredRow" id="trWrapper"><td class="ProductListingPage_SecondaryText" id="text1">${item.id}</td><td class="ProductListingPage_PrimaryText" id="text2">${item.medicineName}</td><td class="ProductListingPage_SecondaryText" id="text3">${item.medicineBrand}</td><td class="ProductListingPage_PrimaryText" id="text4">${item.expiryDate}</td><td class="ProductListingPage_SecondaryText" id="text5">$${item.unitPrice}</td><td class="ProductListingPage_SecondaryText" id="text6">${item.stock}</td></tr>`;
          trWrapper.insertAdjacentHTML("beforeend", newHtml);
          productCounter.innerHTML = counter;
        } else if (
          // ! only expired checked
          !("LowStock" in activeProductFilters) &&
          "Expired" in activeProductFilters
        ) {
          var dateArr = item.expiryDate.split("-");
          var now = new Date();
          var nowArr = now.toDateString().split(" ");
          // console.log(dateArr, nowArr);
          if (nowArr[3] > dateArr[2]) {
            counter++;
            newHtml = `<tr class="ProductListingPage_TableRow ProductListingPage_ExpiredRow" id="trWrapper"><td class="ProductListingPage_SecondaryText" id="text1">${item.id}</td><td class="ProductListingPage_PrimaryText" id="text2">${item.medicineName}</td><td class="ProductListingPage_SecondaryText" id="text3">${item.medicineBrand}</td><td class="ProductListingPage_PrimaryText" id="text4">${item.expiryDate}</td><td class="ProductListingPage_SecondaryText" id="text5">$${item.unitPrice}</td><td class="ProductListingPage_SecondaryText" id="text6">${item.stock}</td></tr>`;
            trWrapper.insertAdjacentHTML("beforeend", newHtml);
            productCounter.innerHTML = counter;
          } else if (nowArr[3] == dateArr[2]) {
            if (
              arrayOfMonths.indexOf(nowArr[1]) >
              arrayOfMonths.indexOf(dateArr[1])
            ) {
              counter++;
              newHtml = `<tr class="ProductListingPage_TableRow ProductListingPage_ExpiredRow" id="trWrapper"><td class="ProductListingPage_SecondaryText" id="text1">${item.id}</td><td class="ProductListingPage_PrimaryText" id="text2">${item.medicineName}</td><td class="ProductListingPage_SecondaryText" id="text3">${item.medicineBrand}</td><td class="ProductListingPage_PrimaryText" id="text4">${item.expiryDate}</td><td class="ProductListingPage_SecondaryText" id="text5">$${item.unitPrice}</td><td class="ProductListingPage_SecondaryText" id="text6">${item.stock}</td></tr>`;
              trWrapper.insertAdjacentHTML("beforeend", newHtml);
              productCounter.innerHTML = counter;
            }
          } else if (
            nowArr[3] == dateArr[2] &&
            arrayOfMonths.indexOf(nowArr[1]) ==
              arrayOfMonths.indexOf(dateArr[1])
          ) {
            if (nowArr[2] > dateArr[0]) {
              counter++;
              newHtml = `<tr class="ProductListingPage_TableRow ProductListingPage_ExpiredRow" id="trWrapper"><td class="ProductListingPage_SecondaryText" id="text1">${item.id}</td><td class="ProductListingPage_PrimaryText" id="text2">${item.medicineName}</td><td class="ProductListingPage_SecondaryText" id="text3">${item.medicineBrand}</td><td class="ProductListingPage_PrimaryText" id="text4">${item.expiryDate}</td><td class="ProductListingPage_SecondaryText" id="text5">$${item.unitPrice}</td><td class="ProductListingPage_SecondaryText" id="text6">${item.stock}</td></tr>`;
              trWrapper.insertAdjacentHTML("beforeend", newHtml);
              productCounter.innerHTML = counter;
            }
          }
        } else if (
          // ! both checked
          "Expired" in activeProductFilters &&
          "LowStock" in activeProductFilters
        ) {
          var dateArr = item.expiryDate.split("-");
          var now = new Date();
          var nowArr = now.toDateString().split(" ");
          // console.log(dateArr, nowArr);
          if (nowArr[3] > dateArr[2]) {
            if (item.stock < 100) {
              counter++;
              newHtml = `<tr class="ProductListingPage_TableRow ProductListingPage_ExpiredRow" id="trWrapper"><td class="ProductListingPage_SecondaryText" id="text1">${item.id}</td><td class="ProductListingPage_PrimaryText" id="text2">${item.medicineName}</td><td class="ProductListingPage_SecondaryText" id="text3">${item.medicineBrand}</td><td class="ProductListingPage_PrimaryText" id="text4">${item.expiryDate}</td><td class="ProductListingPage_SecondaryText" id="text5">$${item.unitPrice}</td><td class="ProductListingPage_SecondaryText" id="text6">${item.stock}</td></tr>`;
              trWrapper.insertAdjacentHTML("beforeend", newHtml);
              productCounter.innerHTML = counter;
            }
          } else if (nowArr[3] == dateArr[2]) {
            if (
              arrayOfMonths.indexOf(nowArr[1]) >
              arrayOfMonths.indexOf(dateArr[1])
            ) {
              if (item.stock < 100) {
                counter++;
                newHtml = `<tr class="ProductListingPage_TableRow ProductListingPage_ExpiredRow" id="trWrapper"><td class="ProductListingPage_SecondaryText" id="text1">${item.id}</td><td class="ProductListingPage_PrimaryText" id="text2">${item.medicineName}</td><td class="ProductListingPage_SecondaryText" id="text3">${item.medicineBrand}</td><td class="ProductListingPage_PrimaryText" id="text4">${item.expiryDate}</td><td class="ProductListingPage_SecondaryText" id="text5">$${item.unitPrice}</td><td class="ProductListingPage_SecondaryText" id="text6">${item.stock}</td></tr>`;
                trWrapper.insertAdjacentHTML("beforeend", newHtml);
                productCounter.innerHTML = counter;
              }
            }
          } else if (
            nowArr[3] == dateArr[2] &&
            arrayOfMonths.indexOf(nowArr[1]) ==
              arrayOfMonths.indexOf(dateArr[1])
          ) {
            if (nowArr[2] > dateArr[0]) {
              if (item.stock < 100) {
                counter++;
                newHtml = `<tr class="ProductListingPage_TableRow ProductListingPage_ExpiredRow" id="trWrapper"><td class="ProductListingPage_SecondaryText" id="text1">${item.id}</td><td class="ProductListingPage_PrimaryText" id="text2">${item.medicineName}</td><td class="ProductListingPage_SecondaryText" id="text3">${item.medicineBrand}</td><td class="ProductListingPage_PrimaryText" id="text4">${item.expiryDate}</td><td class="ProductListingPage_SecondaryText" id="text5">$${item.unitPrice}</td><td class="ProductListingPage_SecondaryText" id="text6">${item.stock}</td></tr>`;
                trWrapper.insertAdjacentHTML("beforeend", newHtml);
                productCounter.innerHTML = counter;
              }
            }
          }
        } else if (
          // ! both unchecked
          !("Expired" in activeProductFilters) &&
          !("LowStock" in activeProductFilters)
        ) {
          counter++;
          newHtml = `<tr class="ProductListingPage_TableRow ProductListingPage_ExpiredRow" id="trWrapper"><td class="ProductListingPage_SecondaryText" id="text1">${item.id}</td><td class="ProductListingPage_PrimaryText" id="text2">${item.medicineName}</td><td class="ProductListingPage_SecondaryText" id="text3">${item.medicineBrand}</td><td class="ProductListingPage_PrimaryText" id="text4">${item.expiryDate}</td><td class="ProductListingPage_SecondaryText" id="text5">$${item.unitPrice}</td><td class="ProductListingPage_SecondaryText" id="text6">${item.stock}</td></tr>`;
          trWrapper.insertAdjacentHTML("beforeend", newHtml);
          productCounter.innerHTML = counter;
        }
      });
    }
  );
};
productsRenderer(activeProductFilters);
var arr = new Array(productFilterCheckboxes);
arr = arr[0];

for (let item of arr) {
  // console.log(item);
  item.addEventListener("change", (ev) => {
    // console.log(ev.target.checked);
    console.log(ev.checked);
    if (ev.target.checked) {
      if (!(ev.target.value in activeProductFilters)) {
        console.log(ev.value);
        activeProductFilters[ev.target.value] = 1;
      }
    } else {
      if (ev.target.value in activeProductFilters) {
        console.log(ev.value);
        delete activeProductFilters[ev.target.value];
      }
    }

    if (!Object.keys(activeProductFilters).length) {
      productCounter.innerHTML = "0";
    }
    console.log(activeProductFilters);
    productsRenderer(activeProductFilters);
  });
}

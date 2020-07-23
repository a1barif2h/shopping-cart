// FUNCTION FOR QUANTITY INCREMENT
function quantityIncrement(id) {
  const quantity = document.getElementById(id).value;
  const quantityNumber = parseFloat(quantity);
  const totalQuantity = quantityNumber + 1;
  document.getElementById(id).value = totalQuantity;
}
// FUNCTION FOR QUANTITY DECREMENT
function quantityDecrement(id) {
  const quantity = document.getElementById(id).value;
  const quantityNumber = parseFloat(quantity);
  if (quantityNumber > 0) {
    const totalQuantity = quantityNumber - 1;
    document.getElementById(id).value = totalQuantity;
  } else {
    document.getElementById(id).value = 0;
  }
}
// FUNCTION FOR PRICE INCREMENT
function priceIncrement(id, price) {
  const itemPrice = document.getElementById(id).innerText;
  const itemPriceNumber = parseFloat(itemPrice);
  const totalPrice = itemPriceNumber + price;
  return (document.getElementById(id).innerText = totalPrice);
}
// FUNCTION FOR PRICE DECREMENT
function priceDecrement(id, price) {
  const itemPrice = document.getElementById(id).innerText;
  const itemPriceNumber = parseFloat(itemPrice);
  if (itemPriceNumber > 0) {
    const totalPrice = itemPriceNumber - price;
    document.getElementById(id).innerText = totalPrice;
  } else {
    document.getElementById(id).innerText = 0;
  }
}
// FUNCTION FOR SUBTOTAL
function subTotal() {
  const subTotal = document.getElementById("subTotal").innerText;
  let subTotalNumber = parseFloat(subTotal);
  const mobilePrice = document.getElementById("mobilePrice").innerText;
  const mobilePriceNumber = parseFloat(mobilePrice);
  const casePrice = document.getElementById("casePrice").innerText;
  const casePriceNumber = parseFloat(casePrice);
  subTotalNumber = mobilePriceNumber + casePriceNumber;
  document.getElementById("subTotal").innerText = subTotalNumber;
  return subTotalNumber;
}
// FUNCTION FOR TAX AMOUNT
function taxAmount() {
  const tax = document.getElementById("tax").innerText;
  const taxNumber = parseFloat(tax);
  const subTotal = document.getElementById("subTotal").innerText;
  const subTotalNumber = parseFloat(subTotal);
  const totalTax = (subTotalNumber * 15) / 100;
  document.getElementById("tax").innerText = totalTax;
  return totalTax;
}
// FUNCTION FOR TOTAL BILL
function totalBill() {
  const subTotal = document.getElementById("subTotal").innerText;
  const subTotalNumber = parseFloat(subTotal);
  const tax = document.getElementById("tax").innerText;
  const taxNumber = parseFloat(tax);
  const totalBill = document.getElementById("totalBill").innerText;
  let totalBillNumber = parseFloat(totalBill);
  totalBillNumber = subTotalNumber + taxNumber;
  document.getElementById("totalBill").innerText = totalBillNumber;
  return totalBillNumber;
}
// ADDED EVEN HANDLER IN MOBILE MINUS BUTTON
const mobileMinusBtn = document.getElementById("mobileMinusBtn");
mobileMinusBtn.addEventListener("click", function () {
  quantityDecrement("mobileQuantity");
  priceDecrement("mobilePrice", 1219);
  subTotal();
  taxAmount();
  totalBill();
});
// ADDED EVEN HANDLER IN MOBILE PLUS BUTTON
const mobilePlusBtn = document.getElementById("mobilePlusBtn");
mobilePlusBtn.addEventListener("click", function () {
  quantityIncrement("mobileQuantity");
  priceIncrement("mobilePrice", 1219);
  subTotal();
  taxAmount();
  totalBill();
});
// ADDED EVEN HANDLER IN CASEIN MINUS BUTTON
const caseMinusBtn = document.getElementById("caseMinusBtn");
caseMinusBtn.addEventListener("click", function () {
  quantityDecrement("caseQuantity");
  priceDecrement("casePrice", 59);
  subTotal();
  taxAmount();
  totalBill();
});
// ADDED EVEN HANDLER IN MOBILE PLUS BUTTON
const casePlusBtn = document.getElementById("casePlusBtn");
casePlusBtn.addEventListener("click", function () {
  quantityIncrement("caseQuantity");
  priceIncrement("casePrice", 59);
  subTotal();
  taxAmount();
  totalBill();
});

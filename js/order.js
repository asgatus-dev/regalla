// Order Now: JavaScript Method #2 from Module 5.2.
// Reads the order form, builds a mailto: link, and opens the visitor's email app.
// The same file works on all three product pages: each page's form holds its
// own product name and price in data-product and data-price.

const TO_ADDRESS = "orders@examplewebsite142.com";

const form = document.querySelector("#order-form");

function buildMailto() {
  const product = form.dataset.product;
  const price = Number(form.dataset.price);
  const size = document.querySelector("input[name='size']:checked").value;
  const quantity = Number(document.querySelector("#quantity").value);

  const subject = "Order: " + product;
  const body =
    "Hello Regalla, I would like to order:" + "\r\n\r\n" +
    "Product: " + product + "\r\n" +
    "Size: " + size + "\r\n" +
    "Quantity: " + quantity + "\r\n" +
    "Price each: PHP " + price + "\r\n" +
    "Total: PHP " + (price * quantity) + "\r\n\r\n" +
    "Name: " + "\r\n" +
    "Delivery address: " + "\r\n" +
    "Contact number: ";

  return (
    "mailto:" + TO_ADDRESS +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body)
  );
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = buildMailto();
});

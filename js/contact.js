// Contact form: opens the visitor's email app with the message filled in
// (same method as js/order.js, Module 5.2 Method #2)
const CONTACT_ADDRESS = "regallatees@gmail.com";
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#form-email").value.trim();
  const message = document.querySelector("#message").value.trim();

  const subject = "Message from " + name;
  const body = message + "\r\n\r\nFrom: " + name + "\r\nEmail: " + email;

  window.location.href = "mailto:" + CONTACT_ADDRESS +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
});

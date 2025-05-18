document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop default form submission
      alert("Thank you! Your message has been received.");
      form.reset(); // clear form after submission
    });
  }
  
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("card-form");

  const nameInput = document.getElementById("cardholder-name");
  const numberInput = document.getElementById("card-number");
  const expiryInput = document.getElementById("expiry-date");
  const cvcInput = document.getElementById("cvc");
  const errorMessages = document.getElementById("error-messages");

  function validateForm() {
    let errors = [];

    if (nameInput.value.trim() === "") {
      errors.push("Cardholder name is required.");
    }

    const number = numberInput.value.replace(/\s/g, "");
    if (!/^\d{16}$/.test(number)) {
      errors.push("Card number must be 16 digits.");
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryInput.value)) {
      errors.push("Expiry must be in MM/YY format.");
    }

    if (!/^\d{3}$/.test(cvcInput.value)) {
      errors.push("CVC must be 3 digits.");
    }

    errorMessages.innerHTML = errors.join("<br>");
    return errors.length === 0;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      
      window.location.href = "thanku.html";
    }
  });
});

document.querySelector(".right-bar").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
});
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});
document.getElementById("openNewModal").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("myModalNew").style.display = "block";
});
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});
document.getElementById("closeModalNew").addEventListener("click", function () {
  document.getElementById("myModalNew").style.display = "none";
});
document.getElementById("closeModalNew").addEventListener("click", function () {
  document.getElementById("myModalNew").style.display = "none";
});
document
  .getElementById("openSecondModal")
  .addEventListener("click", function () {
    document.getElementById("myModalNew").style.display = "none";
    document.getElementById("myModalSecond").style.display = "block";
  });
document
  .getElementById("closeModalSecond")
  .addEventListener("click", function () {
    document.getElementById("myModalSecond").style.display = "none";
  });

$(document).ready(function () {
  $(".add-to-cart-btn").click(function () {
    var parentContainer = $(this).closest(".card-img-container");
    $(this).hide();
    var quantityText = parentContainer.find(".quantity-text");
    quantityText.text("Qty 1"); // Reset quantity text to 1 when "Add to Cart" is clicked
    parentContainer.find(".quantity").show();
  });
  $(".plus-btn").click(function () {
    var parentContainer = $(this).closest(".card-img-container");
    var quantityText = parentContainer.find(".quantity-text");
    var currentValue = parseInt(quantityText.text().replace("Qty ", "") || 0);
    quantityText.text("Qty " + (currentValue + 1));
  });
  $(".minus-btn").click(function () {
    var parentContainer = $(this).closest(".card-img-container");
    var quantityText = parentContainer.find(".quantity-text");
    var currentValue = parseInt(quantityText.text().replace("Qty ", "") || 0);
    if (currentValue > 1) {
      quantityText.text("Qty " + (currentValue - 1));
    }
  });
});

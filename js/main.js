{
  /* // Get the modal */
}
var modal = document.getElementById("modalImage");

{
  /* // Get the button that opens the modal */
}
var btn = document.getElementById("openModalImageBtn");

{
  /* // Get the <span> element that closes the modal */
}
var span = document.getElementsByClassName("my-close")[0];

{
  /* // When the user clicks the button, open the modal */
}
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

{
  /* <!-- Add your custom modal script here --> */
}
{
  /* // Get the modal */
}
var customModal = document.getElementById("customModal");

// Get the button that opens the modal
var customBtn = document.getElementById("openCustomModalBtn");

{
  /* // Get the <span> element that closes the modal */
}
var customSpan = document.getElementsByClassName("custom-close")[0];

{
  /* // When the user clicks the button, open the modal */
}
customBtn.onclick = function (event) {
  event.preventDefault(); // Prevent the default action
  customModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
customSpan.onclick = function () {
  customModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == customModal) {
    customModal.style.display = "none";
  }
};

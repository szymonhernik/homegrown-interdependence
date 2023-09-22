document.addEventListener("DOMContentLoaded", function () {
  // Function to handle button click events
  function handleButtonClick(e, isVisible) {
    e.preventDefault();
    const tooltip = e.target
      .closest(".tooltip-custom")
      .querySelector(".tooltiptext");
    const tooltipElement = e.target
      .closest(".tooltip-custom")
      .querySelector(".tooltip-element");

    tooltip.style.visibility = isVisible ? "visible" : "hidden";
    tooltipElement.style.background = isVisible ? "$more-bg" : "none";
  }

  // Get the elements with the class "mobile-only"
  const mobileOnlyElements = document.querySelectorAll(".mobile-only");

  // Check if the display property of the first element is set to "block"
  if (window.getComputedStyle(mobileOnlyElements[0]).display === "block") {
    // Get the close and open buttons
    const closeButtons = document.querySelectorAll(
      ".tooltip-custom .mobile-only"
    );
    const openButtons = document.querySelectorAll(".tooltip-element");

    // Add event listeners to close buttons
    closeButtons.forEach((closeButton) => {
      closeButton.addEventListener("click", (e) => {
        console.log("clicked");
        handleButtonClick(e, false);
      });
    });

    // Add event listeners to open buttons
    openButtons.forEach((openButton) => {
      openButton.addEventListener("click", (e) => {
        console.log("clicked again");
        handleButtonClick(e, true);
      });
    });
  }
});

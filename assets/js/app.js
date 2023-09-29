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

// Details code
// Details code
// Details code

const afterElements = document.querySelectorAll(".close-folded-step");

afterElements.forEach((element) => {
  element.addEventListener("click", () => {
    const summaryElement = document.querySelector("details.folding summary");
    summaryElement.click();
  });
});

function filterTerms(category) {
  var terms = document.querySelectorAll(".term");
  var sections = document.querySelectorAll(".alphabet-section");

  terms.forEach(function (term) {
    if (category === "all" || term.classList.contains(category)) {
      term.style.display = "block";
    } else {
      term.style.display = "none";
    }
  });

  sections.forEach(function (section) {
    var visibleTerms = section.querySelectorAll(
      ".term:not([style='display: none;'])"
    );
    if (visibleTerms.length > 0) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".filter-button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      // Add active class to the clicked button
      button.classList.add("active");
      var category = button.getAttribute("data-filter");
      filterTerms(category);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  initTooltipButtons();
  console.log("DOMContentLoaded fired");
  initFoldedSteps();
  initFilterButtons();
});

function initTooltipButtons() {
  // Check if any tooltip elements are present on the page
  if (!document.querySelector(".tooltip-custom")) return;

  const mobileOnlyElements = document.querySelectorAll(".mobile-only");
  if (window.getComputedStyle(mobileOnlyElements[0]).display === "block") {
    document.addEventListener("click", handleTooltipButtonClick);
  }
}

function handleTooltipButtonClick(e) {
  const target = e.target;
  if (target.matches(".tooltip-custom .mobile-only")) {
    handleButtonClick(e, false);
    console.log("clicked");
  } else if (target.matches(".tooltip-element")) {
    handleButtonClick(e, true);
    console.log("clicked again");
  }
}

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

function initFoldedSteps() {
  // Check if any folded step elements are present on the page
  if (!document.querySelector(".close-folded-step")) return;

  document.querySelectorAll(".close-folded-step").forEach((element) => {
    element.addEventListener("click", handleFoldedStepClick);
  });
}

function handleFoldedStepClick() {
  const summaryElement = document.querySelector("details.folding summary");
  summaryElement.click();
}

function initFilterButtons() {
  // Check if any filter button elements are present on the page
  if (!document.querySelector(".filter-button")) return;

  console.log("init");
  const buttons = document.querySelectorAll(".filter-button");
  buttons.forEach((button) => {
    button.addEventListener("click", handleFilterButtonClick);
  });
}

function handleFilterButtonClick(e) {
  const buttons = document.querySelectorAll(".filter-button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  const button = e.target.closest(".filter-button"); // Use closest to ensure the correct element is selected
  if (button) {
    // Check that a button element was found
    button.classList.add("active");
    const category = button.getAttribute("data-filter");
    filterTerms(category);
  }
}

function filterTerms(category) {
  const terms = document.querySelectorAll(".term");
  const sections = document.querySelectorAll(".alphabet-section");

  terms.forEach((term) => {
    term.style.display =
      category === "all" || term.classList.contains(category)
        ? "block"
        : "none";
  });

  sections.forEach((section) => {
    const visibleTerms = section.querySelectorAll(
      ".term:not([style='display: none;'])"
    );
    section.style.display = visibleTerms.length > 0 ? "block" : "none";
  });
}

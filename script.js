const countElements = document.querySelectorAll(".count");

const options = {
  threshold: 0.5, // Adjust this threshold as needed
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const targetValue = parseInt(target.getAttribute("data-target"));
      animateCount(target, targetValue);
      observer.unobserve(target);
    }
  });
}, options);

countElements.forEach((element) => {
  observer.observe(element);
});

function animateCount(element, target) {
  let start = 0;
  const duration = 2000; // Animation duration in milliseconds
  const stepTime = Math.abs(Math.floor(duration / target));

  const interval = setInterval(() => {
    start += 1;
    element.textContent = start;
    if (start >= target) {
      clearInterval(interval);
    }
  }, stepTime);
}

// Get a reference to the button element by its ID
var contactButton = document.getElementById("contactButton");

// Add a click event listener to the button
contactButton.addEventListener("click", function () {
  // Redirect the user to the contact page
  window.location.href = "contact.html";
});
var aboutButton = document.getElementById("aboutButton");

// Add a click event listener to the button
aboutButton.addEventListener("click", function () {
  // Redirect the user to the "about" page
  window.location.href = "about.html";
});

function ser() {
  window.location.href = "services.html";
}

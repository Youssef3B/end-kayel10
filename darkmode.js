document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkmode-toggle");
  const body = document.body;
  const logoHeader = document.getElementById("logo_logo");
  const logoHeaderDark = document.getElementById("logo_logo_dark");
  const logoFooter = document.getElementById("logo_footer");
  const logoFooterDark = document.getElementById("logo_footer_dark");

  // Function to set dark mode
  function setDarkMode(enabled) {
    if (enabled) {
      body.classList.add("dark-theme");
      logoHeader.style.display = "none";
      logoHeaderDark.style.display = "block";
      logoFooter.style.display = "none";
      logoFooterDark.style.display = "block";
      localStorage.setItem("darkMode", "enabled");
      // Switch image source to dark mode
      document.getElementById("man").src = "images/man_dark.png";
    } else {
      body.classList.remove("dark-theme");
      logoHeader.style.display = "block";
      logoHeaderDark.style.display = "none";
      logoFooter.style.display = "block";
      logoFooterDark.style.display = "none";
      localStorage.setItem("darkMode", "disabled");
      // Switch image source to light mode
      document.getElementById("man").src = "images/man_hero.png";
    }
  }

  // Toggle dark mode on button click
  darkModeToggle.addEventListener("click", function () {
    const isDarkModeEnabled = body.classList.contains("dark-theme");
    setDarkMode(!isDarkModeEnabled);
  });

  // Apply dark mode if it's enabled in localStorage
  const isDarkMode = localStorage.getItem("darkMode");
  if (isDarkMode === "enabled") {
    setDarkMode(true);
  }
});

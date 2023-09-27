function navigateToBlogPage(pageNumber) {
  // Construct the URL for the corresponding blog page
  var blogPageURL = "blog" + pageNumber + ".html";

  // Redirect to the blog page
  window.location.href = blogPageURL;
}

function pagehome() {
  // Navigate to index.html
  window.location.href = "index.html";
}
function pageabout() {
  // Navigate to index.html
  window.location.href = "about.html";
}

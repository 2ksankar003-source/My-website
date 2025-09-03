// Show welcome message in browser console
window.onload = function() {
  console.log("Welcome to Sankar's Website 🚀");
};

// Add interactivity to button
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("msgBtn");
  btn.addEventListener("click", function() {
    alert("Hello Sankar! Thanks for visiting my website 🎉");
  });
});

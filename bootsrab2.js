window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});
// Get the target element
const targetElement = document.getElementById("targetElement");

// Create a new Intersection Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add a CSS class or directly manipulate the style to show the element
        targetElement.style.opacity = 1;
      } else {
        // Optionally, you can hide the element when it goes out of view
        targetElement.style.opacity = 0;
      }
    });
  },
  { threshold: 0.5 }
); // Adjust the threshold as needed

// Start observing the target element
observer.observe(targetElement);

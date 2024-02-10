document.addEventListener('DOMContentLoaded', function () {
    var accordionLabel = document.getElementById('accordion-label');
    var accordionContent = document.getElementById('accordion-content');

    accordionLabel.addEventListener('click', function () {
        accordionContent.classList.toggle('visible');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the last modification date
    const lastModifiedText = document.getElementById("last-modified-text");
    lastModifiedText.textContent = document.lastModified;
  
    // Set the current location
    const locationText = document.getElementById("location-text");
    locationText.textContent = window.location.href;
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const tourContainer = document.getElementById("tour-container");
    const startTourButton = document.getElementById("start-tour");

    const tourImages = [
        "images/tour1.jpg", // Image of the first gallery
        "images/tour2.jpg", // Image of the second gallery
        "images/tour3.jpg", // Image of the third gallery
    ];

    startTourButton.addEventListener("click", () => {
        tourContainer.innerHTML = ''; // Clear previous content
        tourImages.forEach((image) => {
            const img = document.createElement("img");
            img.src = image;
            img.alt = "Gallery Image";
            img.className = "tour-image"; // You can style these images in CSS
            tourContainer.appendChild(img);
        });
    });
});

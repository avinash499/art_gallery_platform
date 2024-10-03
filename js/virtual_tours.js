document.addEventListener("DOMContentLoaded", () => {
    const tourContainer = document.getElementById("tour-container");
    const startTourButton = document.getElementById("start-tour");

    const tourImages = [
        "images/tour1.jpg", 
        "images/tour2.jpg", 
        "images/tour3.jpg",
    ];

    startTourButton.addEventListener("click", () => {
        tourContainer.innerHTML = '';
        tourImages.forEach((image) => {
            const img = document.createElement("img");
            img.src = image;
            img.alt = "Gallery Image";
            img.className = "tour-image"; 
            tourContainer.appendChild(img);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const artworkForm = document.getElementById('artworkForm');
    const artworkList = document.getElementById('artwork-list').querySelector('ul');
    const artworksContainer = document.getElementById('artworks-container');

    // Load existing artworks (mock data for demonstration)
    const artworks = [
        { title: "Starry Night", description: "A starry night over the Rhone", image: "images/starry-night.jpg" },
        { title: "Mona Lisa", description: "The portrait of a lady", image: "images/mona-lisa.jpg" },
    ];

    artworks.forEach(artwork => {
        addArtworkToGallery(artwork);
        addArtworkToList(artwork);
    });

    // Handle artwork upload
    if (artworkForm) {
        artworkForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('artworkTitle').value;
            const description = document.getElementById('artworkDescription').value;
            const image = document.getElementById('artworkImage').files[0];

            const reader = new FileReader();
            reader.onloadend = () => {
                const artwork = { title, description, image: reader.result };
                addArtworkToGallery(artwork);
                addArtworkToList(artwork);
            };
            reader.readAsDataURL(image);
        });
    }

    // Function to add artwork to the gallery
    function addArtworkToGallery(artwork) {
        const img = document.createElement('img');
        img.src = artwork.image;
        img.alt = artwork.title;
        img.title = artwork.description;
        artworksContainer.appendChild(img);
    }

    // Function to add artwork to the list in the dashboard
    function addArtworkToList(artwork) {
        const li = document.createElement('li');
        li.textContent = `${artwork.title}: ${artwork.description}`;
        artworkList.appendChild(li);
    }
});
// Existing code...

function addArtworkToGallery(artwork) {
    const img = document.createElement('img');
    img.src = artwork.image;
    img.alt = artwork.title;
    img.title = artwork.description;
    img.addEventListener('click', () => openModal(artwork));
    artworksContainer.appendChild(img);
}

function openModal(artwork) {
    const modal = document.getElementById('artwork-modal');
    const modalImage = document.getElementById('artwork-image');
    const modalTitle = document.getElementById('artwork-title');
    const modalDescription = document.getElementById('artwork-description');
    
    modalImage.src = artwork.image;
    modalTitle.textContent = artwork.title;
    modalDescription.textContent = artwork.description;

    modal.style.display = "block";

    const closeBtn = document.querySelector(".close");
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

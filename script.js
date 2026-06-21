const images = [
    "images/main-screen.png",
    "images/gameplay-screen.png",
    "images/settings.png",
    "images/winner-screen.png",
    "images/statistics-screen.png",

    "images/home.png",
    "images/products.png",
    "images/product_detail.png",
    "images/register.png",
    "images/login.png",
    "images/dashboard.png",
    "images/manage_product.png",
    "images/dark_mode.png"
];

let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentImageIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentImageIndex = currentImageIndex + direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentImageIndex];
}
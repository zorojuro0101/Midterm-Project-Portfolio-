window.addEventListener("scroll", function () {
    let scrollValue = window.scrollY;
    let heroText = document.getElementById("heroText");
    let heroVideo = document.getElementById("heroVideo");
    let gradientOverlay = document.getElementById("gradientOverlay");
    let quoteContainer = document.getElementById("quoteContainer");

    // Zoom effect based on scroll value (scaling and translating up)
    let scaleValue = 1 + scrollValue * 0.0015; // Smooth zoom factor
    let translateValue = Math.min(scrollValue * 0.4, 300); // Move up after zoom
    heroVideo.style.transform = `scale(${scaleValue}) translateY(-${translateValue}px)`;

    // Shrink and move text to top-left on scroll down
    if (scrollValue > 100) {
        heroText.classList.add("shrink-text");
    } 
    // Move text back to center smoothly when scrolling up
    else {
        heroText.classList.remove("shrink-text");
    }

    // Show the quote smoothly after scrolling past the hero section
    if (scrollValue > 500) {
        quoteContainer.classList.add("show-quote");
    } 
    // Hide the quote when scrolling back up
    else {
        quoteContainer.classList.remove("show-quote");
    }

    // Dynamic gradient opacity based on scroll position
    let gradientOpacity = Math.min(scrollValue / 500, 1); // Fade in as you scroll down
    gradientOverlay.style.opacity = gradientOpacity;
});


// Track the currently selected image
let currentSelected = null;
let isGridActive = false;

function showInfo(id, element) {
    const galleryContainer = document.getElementById('galleryContainer');
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const infoContainer = document.getElementById('infoContainer');
    const infoTitle = document.getElementById('infoTitle');
    const infoText = document.getElementById('infoText');

    // Check if the same image is clicked to reset
    if (currentSelected === element) {
        // Reset everything if the same image is clicked again
        element.classList.remove('selected');
        infoContainer.classList.remove('show');
        infoContainer.classList.add('hidden');
        galleryContainer.classList.remove('grid', 'animate-left');
        galleryWrapper.style.backgroundImage = "none"; // Reset background
        currentSelected = null;
    } else {
        // Remove selected class from previously selected image
        if (currentSelected) {
            currentSelected.classList.remove('selected');
        }

        // Highlight the clicked image
        element.classList.add('selected');
        currentSelected = element;

        // Update info based on the selected image
        switch (id) {
            case 1:
                infoTitle.innerText = "Image 1";
                infoText.innerText = "This is a description of Image 1.";
                galleryWrapper.style.backgroundImage = "url('/img/1_1.jpg')";
                break;
            case 2:
                infoTitle.innerText = "Image 2";
                infoText.innerText = "This is a description of Image 2.";
                galleryWrapper.style.backgroundImage = "url('/img/2_1.jpg')";
                break;
            case 3:
                infoTitle.innerText = "Quote in Life";
                infoText.innerText = "\"Lulu poreber para maging daks";
                galleryWrapper.style.backgroundImage = "url('/img/3_1.jpg')";
                break;
            case 4:
                infoTitle.innerText = "Image 4";
                infoText.innerText = "This is a description of Image 4.";
                galleryWrapper.style.backgroundImage = "url('/img/4_1.jpg')";
                break;
            case 5:
                infoTitle.innerText = "Image 5";
                infoText.innerText = "This is a description of Image 5.";
                galleryWrapper.style.backgroundImage = "url('/img/5_1.jpg')";
                break;
        }

        // Show info with animation
        infoContainer.classList.remove('hidden');
        infoContainer.classList.add('show');

        setTimeout(() => {
            galleryContainer.classList.add('grid'); // Fix 1 column layout
            infoContainer.classList.remove('hidden');
            infoContainer.classList.add('show');
        }, 500);
    }
}


// Observe all images and apply fade-in when in view
document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-img');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add fade-in with staggered delay
                    entry.target.classList.add('fade-in');
                } else {
                    // Reset the animation when out of view to allow repeat
                    entry.target.classList.remove('fade-in');
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the image is visible
    );

    // Observe each gallery image
    galleryImages.forEach(img => {
        observer.observe(img);
    });
});


// Set the default selected button to 'personal'
document.addEventListener('DOMContentLoaded', function () {
    const defaultButton = document.querySelector('.info-buttons button');
    if (defaultButton) {
        showContent('personal', defaultButton); // Set 'personal' content as default
    }
});

// Track the currently active button
let currentActiveButton = null;

function showContent(content, element) {
    // Remove 'active' class from the previously clicked button
    if (currentActiveButton) {
        currentActiveButton.classList.remove('active');
    }

    // Add 'active' class to the clicked button
    element.classList.add('active');
    currentActiveButton = element;

    // Update the content based on the clicked button
    switch (content) {
        case 'personal':
            document.getElementById('infoTitle').innerText = "Personal Information";
            document.getElementById('infoText').innerText = "This is your personal information.";
            break;
        case 'skills':
            document.getElementById('infoTitle').innerText = "Skills";
            document.getElementById('infoText').innerText = "These are your skills.";
            break;
        case 'contacts':
            document.getElementById('infoTitle').innerText = "Contacts";
            document.getElementById('infoText').innerText = "Here are your contacts.";
            break;
    }
}
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

// Track the currently active button
let currentActiveButton = null;

function showInfo(id, element) {
    const galleryContainer = document.getElementById('galleryContainer');
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const infoContainer = document.getElementById('infoContainer');
    const infoTitle = document.getElementById('infoTitle');
    const infoText = document.getElementById('infoText');
    const defaultButton = document.querySelector('.info-buttons button:first-child'); // Select the first button

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

        // Highlight the default 'Personal Information' button
        if (currentActiveButton) {
            currentActiveButton.classList.remove('active');
        }
        defaultButton.classList.add('active');
        currentActiveButton = defaultButton;

        // Set the default content as 'personal' with updated background
        showContent('personal', defaultButton, id);

        // Show info with animation
        infoContainer.classList.remove('hidden');
        infoContainer.classList.add('show');

        setTimeout(() => {
            galleryContainer.classList.add('grid'); // Fix 1 column layout
            infoContainer.classList.remove('hidden');
            infoContainer.classList.add('show');
        }, 300);
    }
}


// Track the currently active button

function showContent(content, element, id) {
    const infoTitle = document.getElementById('infoTitle');
    const infoText = document.getElementById('infoText');
    const galleryWrapper = document.querySelector('.gallery-wrapper');

    // Remove 'active' class from previously clicked button
    if (currentActiveButton) {
        currentActiveButton.classList.remove('active');
    }

    // Add 'active' class to the clicked button (if element is not null)
    if (element) {
        element.classList.add('active');
        currentActiveButton = element;
    }

    // Determine the correct background image based on content type and image ID
    let bgImage = "";
    switch (content) {
        case 'personal':
            bgImage = `/img/${id}_1.JPG`;
            break;
        case 'skills':
            bgImage = `/img/${id}_3.JPG`;
            break;
        case 'contacts':
            bgImage = `/img/${id}_2.JPG`;
            break;
    }

    // Update the background image dynamically
    galleryWrapper.style.backgroundImage = `url('${bgImage}')`;

    // Update content based on the image ID and content type
    switch (id.toString()) {
        case '1':
            if (content === 'personal') {
                infoTitle.innerText = "Symon Kiel G. Beato";
                infoText.innerText = "I’m a student who codes, dreams of bug-free programs, and somehow survives by trusting Ctrl+S and blind luck.";
            } else if (content === 'skills') {
                infoTitle.innerText = "";
                infoText.innerText = "📱 Mobile-Specific: Kotlin/Java (Android)\n🖥️ Backend Development\n🧩 Problem-Solving\n💬 Communication\n🧠 Critical Thinking\n💾 Database Management\n⚙️ Languages & Tech: Python, Java, C, Android Studio";
            } else if (content === 'contacts') {
                infoTitle.innerText = "";
                infoText.innerText = "📞 +63 977 7485 798\n📧 symonkiel01@gmail.com\n 📠 0123-1560\n🌍 Github: https://github.com/zorojuro0101\n📍 Brgy. Labuin, Sta. Cruz, Laguna";
            }
            break;

        case '2':
            if (content === 'personal') {
                infoTitle.innerText = "Justine Mark Gahi";
                infoText.innerText = "Jack of all trades with a passion for web development and UI/UX design. A computer-savvy team player focused on mastering impactful solutions.";
            } else if (content === 'skills') {
                infoTitle.innerText = "";
                infoText.innerText = " 🛠 Software Troubleshooting\n🧩 Problem-Solving\n⏳ Time Management\n💻 Programming: Python, JavaScript, C, Java\n🤝 Communiation and Teamwork\n📋 Detail Orientation\n🌐 Web Development: HTML, CSS";
            } else if (content === 'contacts') {
                infoTitle.innerText = "";
                infoText.innerText = "📞 +63 995 6776 157\n📧 justinemarkgahi@gmail.com\n📠 0123-1507\n📘 Facebook: Justine Gahi \n 🌍 GitHub: https://github.com/jeem-31\n📍 Jacinto St. Cavinti Laguna";
            }
            break;

        case '3':
            if (content === 'personal') {
                infoTitle.innerText = "Jake Elizer M. Jaqueca";
                infoText.innerText = "I’m an adaptable team player who learns quickly and adjusts to my teammates' needs. I troubleshoot effectively, optimize solutions, and contribute to a collaborative, growth-focused environment. ";
            } else if (content === 'skills') {
                infoTitle.innerText = "";
                infoText.innerText = "🎯 Adaptability in Learning\n📝 Code Review & Optimization\n🔎 Debugging & Troubleshooting\n👂 Active Listening\n❤️ Empathy & Patience\n🗣️ Effective Communication\n🧠 Problem-Solving\n🤝 Collaboration & Teamwork";
            } else if (content === 'contacts') {
                infoTitle.innerText = "";
                infoText.innerText = "📞 Contact No.: 09083750936\n📧 jakemagbuhosjaqueca@gmail.com\n📠 0123-1691\n🌍 GitHub: Jakie21\n📍 A. Regidor St., Brgy. 3, Santa Cruz, Laguna";
            }
            break;

        case '4':
            if (content === 'personal') {
                infoTitle.innerText = "John Alexander D. Reyes";
                infoText.innerText = "I’m Xander, a dog lover, nature lover, and I’m likely exploring local coffee shops or attempting a new recipe. Life is about finding joy in the little things, and that’s exactly what I aim to do.";
            } else if (content === 'skills') {
                infoTitle.innerText = "";
                infoText.innerText = "✅ Software Troubleshooting\n🧠 Problem-Solving\n💻 Programming: Python, JavaScript, C, Java\n🌐 Web Development: HTML, CSS";
            } else if (content === 'contacts') {
                infoTitle.innerText = "";
                infoText.innerText = "📞 +63 090 5371 9307\n📧 xr142870@gmail.com\n📠 0123-1642\n📘 Facebook: John Alexander Reyes\n🌍 GitHub: Giant1951\n📍 Brgy. San Francisco, Victoria, Laguna";
            }
            break;

        case '5':
            if (content === 'personal') {
                infoTitle.innerText = "Zaldy Ybardolaza II";
                infoText.innerText = "I am an Information Technology student who specializes in sleeping on weekends and juggling all my tasks at the last minute. I enjoy sleeping more than anything, and racing against deadlines within an hour gives me an adrenaline rush.";
            } else if (content === 'skills') {
                infoTitle.innerText = "";
                infoText.innerText = "💻Programming: Python\n📌 Web Development: HTML, CSS\n📊 Database: MySQL\n🎨 UI/UX Tools: Figma, Adobe XD\n🔗 Networking: Routing and Switching";
            } else if (content === 'contacts') {
                infoTitle.innerText = "";
                infoText.innerText = "📩 Email: zaldyybardolazaii.lccao@gmail.com\n🔗 LinkedIn: linkedin.com/in/zaldyybardolaza\n🌍 GitHub / Portfolio: github.com/Ujei21 | ujei.com";
            }
            break;
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

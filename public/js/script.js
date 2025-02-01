document.addEventListener("DOMContentLoaded", function () {
    // Typing text effect
    setTimeout(() => {
        const typingText = document.getElementById("typing-text");
        if (typingText) {
            typingText.textContent =
                "Explore my projects and skills, and let's create something amazing together!";
            typingText.classList.remove("hidden-text");
        }
    }, 2000); // 2s delay after animation

    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section'); // Select all sections
    const links = document.querySelectorAll('.navbar-nav .nav-link'); // Select all nav links

    // Ensure scroll is at the top on page load (fix initial scroll issue)
    window.scrollTo(0, 0);

    // Highlight the active section based on scroll position
    const setActiveLink = () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // Adjusted for better scroll position matching
            const sectionBottom = section.offsetTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });

        // Remove active class from all links and add it to the active one
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    };

    // Typing effect
    const typingElement = document.getElementById("typing");
    const sentence = typingElement.textContent;  // Get the initial sentence
    let currentIndex = 0;  // To keep track of the current word
    let charIndex = 0;     // To keep track of the letter within a word

    // Clear the text before typing
    typingElement.textContent = "";  // Clear existing text

    function typeLetter() {
        console.log("Typing start");

        const currentWord = sentence.split(" ")[currentIndex]; // Get the current word
        if (charIndex < currentWord.length) {
            typingElement.textContent += currentWord[charIndex]; // Add one letter
            charIndex++; // Move to the next letter
            setTimeout(typeLetter, 100); // Delay of 0.1 sec between each letter
        } else if (currentIndex < sentence.split(" ").length - 1) {
            // Move to the next word after finishing the current word
            typingElement.textContent += " ";  // Add a space between words
            currentIndex++;
            charIndex = 0;  // Reset letter index for the next word
            setTimeout(typeLetter, 200); // Continue with the next word
        } else {
            // When all words are typed, restart after clearing the text
            setTimeout(restartTyping, 2000); // Wait 2 seconds before restarting
        }
    }

    function restartTyping() {
        typingElement.textContent = "";  // Clear the text
        currentIndex = 0;  // Reset the word index
        charIndex = 0;     // Reset the letter index
        setTimeout(typeLetter, 100);  // Wait 3 seconds before starting the typing effect again
    }

    setTimeout(typeLetter, 3000);

    // Video modal - Close modal properly
    let videoModal = document.getElementById("videoModal");

    videoModal.addEventListener("hidden.bs.modal", function () {
        document.body.style.overflow = "auto";
    });

    setTimeout(() => {
        document.body.style.overflow = "auto";
    }, 100);

    // Check scroll position and set active link on page load
    setActiveLink();
    window.addEventListener('scroll', setActiveLink);

    // Navbar toggler fix for proper open/close behavior
    let navbarToggler = document.querySelector(".navbar-toggler");
    let navbarCollapse = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", function () {
        let bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.toggle();
    });

    // Close navbar when clicking outside
    document.addEventListener("click", function (event) {
        let isClickInsideNavbar = navbarToggler.contains(event.target) || navbarCollapse.contains(event.target);
        if (!isClickInsideNavbar) {
            let bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        }
    });

    // Close navbar when clicking a nav link (for smooth navigation)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            let bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        });
    });
});

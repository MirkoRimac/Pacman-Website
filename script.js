/*
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("#menu li");
    let selectedItemIndex = 0;

    // Set initial active class
    menuItems[selectedItemIndex].classList.add("active");

    document.addEventListener("keydown", function(event) {
        const key = event.key;

        // Remove active class from current item
        menuItems[selectedItemIndex].classList.remove("active");

        if (key === "ArrowUp" && selectedItemIndex > 0) {
            selectedItemIndex--;
        } else if (key === "ArrowDown" && selectedItemIndex < menuItems.length - 1) {
            selectedItemIndex++;
        }

        // Add active class to new item
        menuItems[selectedItemIndex].classList.add("active");
    });
});
*/

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("#menu li");
    let selectedItemIndex = 0;

    // Set initial active class
    menuItems[selectedItemIndex].classList.add("active");

    document.addEventListener("keydown", function(event) {
        const key = event.key;

        // Remove active class from current item
        menuItems[selectedItemIndex].classList.remove("active");

        if (key === "ArrowUp" && selectedItemIndex > 0) {
            selectedItemIndex--;
        } else if (key === "ArrowDown" && selectedItemIndex < menuItems.length - 1) {
            selectedItemIndex++;
        } else if (key === "Enter") {
            // Handle selection when Enter key is pressed
            // Example: You can trigger an action or navigate to a link
            const selectedLink = menuItems[selectedItemIndex].querySelector("a");
            if (selectedLink) {
                selectedLink.click(); // Clicking the link
            }
            event.preventDefault(); // Prevent the default action
            return;
        }

        // Add active class to new item
        menuItems[selectedItemIndex].classList.add("active");
    });
});

// Scroll to top

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("#menu li a");
    const sections = document.querySelectorAll(".section");
    const scrollTopButton = document.getElementById("scroll-top");

    let selectedItemIndex = 0;

    // Set initial active class
    menuItems[selectedItemIndex].classList.add("active");

    menuItems.forEach((menuItem, index) => {
        menuItem.addEventListener("click", function(event) {
            event.preventDefault();
            scrollToSection(index);
        });
    });

    document.addEventListener("scroll", function() {
        toggleScrollTopButton();
    });

    scrollTopButton.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToTop();
    });

    function scrollToSection(index) {
        const section = sections[index];
        const sectionTop = section.offsetTop;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });

        // Show the scroll top button
        scrollTopButton.style.display = "block";
    }

    function toggleScrollTopButton() {
        if (window.scrollY > 500) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});

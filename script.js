function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}
function closeSidebar() {
    document.getElementById("sidebar").style.left = "-250px";
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save the user's preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formResponse = document.getElementById("formResponse");

    if (name === "" || email === "" || message === "") {
        formResponse.textContent = "Please fill out all fields.";
        formResponse.style.color = "red";
        document.getElementById("contactForm").classList.add("shake");
        setTimeout(() => {
            document.getElementById("contactForm").classList.remove("shake");
        }, 300);
        return;
    }

    // Simulate form submission success
    formResponse.textContent = "Message Sent Successfully!";
    formResponse.style.color = "green";

    // Reset form
    document.getElementById("contactForm").reset();
});
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function animateSkill(id, target) {
    let current = 0;
    const el = document.getElementById(id);
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        el.textContent = `${current}%`;
      }
    }, 20);
  }
  
  window.onload = () => {
    animateSkill('java-percent', 90);
    animateSkill('html-percent', 85);
    animateSkill('css-percent', 85);
    animateSkill('js-percent', 80);
    animateSkill('mysql-percent', 80);
  };
  
// Optional: Add smooth scrolling behavior
const scrollContainer = document.querySelector('.scroll-container');

scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollContainer.scrollBy({
        left: event.deltaY < 0 ? -100 : 100, // Scroll left or right
        behavior: 'smooth' // Smooth scrolling
    });
});
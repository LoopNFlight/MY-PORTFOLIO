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

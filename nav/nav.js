document.addEventListener("DOMContentLoaded", function () {
    fetch("/nav/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;

            const menuToggle = document.getElementById("menuToggle");
            const menuPanel = document.getElementById("menuPanel");
            const submenuToggles = document.querySelectorAll(".submenu-toggle");

            menuToggle.addEventListener("click", function () {
                menuPanel.classList.toggle("active");

                const expanded = menuToggle.getAttribute("aria-expanded") === "true";
                menuToggle.setAttribute("aria-expanded", !expanded);
            });

            submenuToggles.forEach(toggle => {
                toggle.addEventListener("click", function () {
                    const parent = this.parentElement;
                    parent.classList.toggle("open");
                });
            });

            document.addEventListener("click", function (e) {
                if (!e.target.closest(".nav-right")) {
                    menuPanel.classList.remove("active");
                    menuToggle.setAttribute("aria-expanded", "false");
                }
            });
        })
        .catch(error => console.error("Error loading nav:", error));
});
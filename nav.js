/* ========================================
   TOP NAVIGATION
======================================== */

const topbarToggle = document.getElementById("topbarToggle");
const topbarNav = document.getElementById("topbarNav");
const topbarOverlay = document.getElementById("topbarOverlay");

function setNav(open) {
    if (!topbarNav || !topbarToggle) return;

    topbarNav.classList.toggle("open", open);
    if (topbarOverlay) topbarOverlay.classList.toggle("open", open);

    topbarToggle.setAttribute("aria-expanded", String(open));
    topbarToggle.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation"
    );
}

if (topbarToggle) {
    topbarToggle.addEventListener("click", () => {
        setNav(!topbarNav.classList.contains("open"));
    });
}

if (topbarOverlay) {
    topbarOverlay.addEventListener("click", () => setNav(false));
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setNav(false);
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) setNav(false);
});

/* ========================================
   ACTIVE PAGE
======================================== */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".topbar-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});

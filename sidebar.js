/* ========================================
   SIDEBAR NAVIGATION
======================================== */

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarOverlay = document.getElementById("sidebarOverlay");


/* ========================================
   OPEN / CLOSE SIDEBAR
======================================== */

function openSidebar() {

    sidebar.classList.add("open");

    sidebarOverlay.classList.add("open");

}


function closeSidebar() {

    sidebar.classList.remove("open");

    sidebarOverlay.classList.remove("open");

}


/* ========================================
   TOGGLE BUTTON
======================================== */

if (sidebarToggle) {

    sidebarToggle.addEventListener("click", () => {

        const isOpen =
            sidebar.classList.contains("open");

        if (isOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }

    });

}


/* ========================================
   CLICK OUTSIDE
======================================== */

if (sidebarOverlay) {

    sidebarOverlay.addEventListener(
        "click",
        closeSidebar
    );

}


/* ========================================
   CURRENT PAGE
======================================== */

const currentPage =
    window.location.pathname.split("/").pop() ||
    "index.html";


document
    .querySelectorAll(".sidebar-link")
    .forEach(link => {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage === currentPage
        ) {

            link.classList.add("active");

        }

    });

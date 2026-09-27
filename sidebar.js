/* ========================================
   SIDEBAR NAVIGATION
======================================== */

const sidebar =
    document.getElementById("sidebar");

const sidebarToggle =
    document.getElementById("sidebarToggle");

const sidebarOverlay =
    document.getElementById("sidebarOverlay");


/* ========================================
   OPEN MOBILE SIDEBAR
======================================== */

function openSidebar() {

    sidebar.classList.add("open");

    sidebarOverlay.classList.add("open");

}


/* ========================================
   CLOSE MOBILE SIDEBAR
======================================== */

function closeSidebar() {

    sidebar.classList.remove("open");

    sidebarOverlay.classList.remove("open");

}


/* ========================================
   TOGGLE SIDEBAR
======================================== */

if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {

        if (window.innerWidth <= 900) {
            const isOpen = sidebar.classList.contains("open");

            if (isOpen) {
                closeSidebar();
                sidebarToggle.innerHTML = "☰";
                sidebarToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );
            } else {
                openSidebar();
                sidebarToggle.innerHTML = "×";
                sidebarToggle.setAttribute(
                    "aria-label",
                    "Close navigation"
                );
            }

            return;
        }

        const isCollapsed =
            sidebar.classList.toggle("collapsed");

        document.body.classList.toggle(
            "sidebar-collapsed",
            isCollapsed
        );

        sidebarToggle.innerHTML =
            isCollapsed ? "›" : "‹";

        sidebarToggle.setAttribute(
            "aria-label",
            isCollapsed
                ? "Expand navigation"
                : "Collapse navigation"
        );

        sidebarToggle.setAttribute(
            "aria-expanded",
            String(!isCollapsed)
        );
    });
}

/* ========================================
   CLICK OUTSIDE ON MOBILE
======================================== */

if (sidebarOverlay) {

    sidebarOverlay.addEventListener(
        "click",
        closeSidebar
    );

}


/* ========================================
   ACTIVE PAGE
======================================== */

const currentPage =
    window.location.pathname
        .split("/")
        .pop() || "index.html";


document
    .querySelectorAll(".sidebar-link")
    .forEach(link => {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

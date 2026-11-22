/* ========================================
   SCROLLCRAFT
   Scroll-driven storytelling for the home page:
   - pinned hero whose scroll position scrubs the animation
   - staggered reveals as sections enter the viewport
   - gentle parallax and a page progress bar
======================================== */

(function () {
    const root = document.documentElement;
    const hero = document.getElementById("scHero");
    if (!hero) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    root.classList.add("sc-ready");

    /* Page progress bar */
    const bar = document.createElement("div");
    bar.className = "sc-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);

    /* Hero words appear one by one as you scroll */
    const words = hero.querySelectorAll(".sc-word");
    const thresholds = [0.12, 0.38, 0.62];

    /* Reveal targets (no HTML changes needed) */
    const groups = [
        [".dashboard-card", 0],
        [".player-month", 0],
        [".homepage-section-heading", 0],
        [".homepage-event", 1],
        [".explore-card", 0],
        [".site-footer", 0]
    ];

    groups.forEach(([selector, alternate]) => {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.setAttribute("data-reveal", "");
            el.style.setProperty("--sc-d", (i % 3) * 110 + "ms");
            if (alternate) {
                el.style.setProperty("--sc-x", i % 2 === 0 ? "-40px" : "40px");
            }
        });
    });

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in");
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    /* Parallax icons */
    const parallax = [];
    document
        .querySelectorAll(".player-month-icon, .homepage-heading-icon")
        .forEach((el, i) => {
            el.setAttribute("data-parallax", "");
            parallax.push({ el, speed: 0.06 + (i % 2) * 0.03 });
        });

    let ticking = false;

    function update() {
        ticking = false;

        const y = window.scrollY;
        const max = Math.max(1, root.scrollHeight - window.innerHeight);
        root.style.setProperty("--sc-page", (y / max).toFixed(4));

        if (reduced) {
            return;
        }

        /* Hero progress: 0 at top, 1 when the pinned scene ends */
        const span = Math.max(1, hero.offsetHeight - window.innerHeight);
        const p = Math.min(1, Math.max(0, (y - hero.offsetTop) / span));
        hero.style.setProperty("--sc-p", p.toFixed(4));

        words.forEach((w, i) => w.classList.toggle("on", p >= thresholds[i]));

        const vh = window.innerHeight;
        parallax.forEach(({ el, speed }) => {
            const r = el.parentElement.getBoundingClientRect();
            if (r.bottom < -100 || r.top > vh + 100) return;
            const offset = (r.top + r.height / 2 - vh / 2) * -speed;
            el.style.transform = "translate3d(0," + offset.toFixed(1) + "px,0)";
        });
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }

    if (reduced) {
        words.forEach((w) => w.classList.add("on"));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
})();

/* ==========================================================
   XELVIORA v2.0
   Premium Website Interactions
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Smooth Scrolling
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    /* ==========================================
       Navbar Scroll Effect
    ========================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 60) {

            navbar.style.padding = "14px 36px";
            navbar.style.background = "rgba(5,8,22,0.92)";
            navbar.style.boxShadow = "0 15px 35px rgba(0,0,0,.35)";
            navbar.style.backdropFilter = "blur(24px)";

        } else {

            navbar.style.padding = "18px 40px";
            navbar.style.background = "rgba(255,255,255,.05)";
            navbar.style.boxShadow = "none";
            navbar.style.backdropFilter = "blur(18px)";

        }

    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();

    /* ==========================================
       Hero Animation
    ========================================== */

    const hero = document.querySelector(".hero-content");

    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform = "translateY(40px)";

        requestAnimationFrame(() => {

            hero.style.transition = "all 1s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";

        });

    }

    /* ==========================================
       Reveal Sections
    ========================================== */

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {

        if (!section.classList.contains("hero")) {

            section.classList.add("hidden");
        }

        observer.observe(section);

    });

    /* ==========================================
       Active Navigation
    ========================================== */

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================================
       Card Hover Effect
    ========================================== */

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

});

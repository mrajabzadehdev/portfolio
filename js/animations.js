/* =========================================================
   SCROLL REVEAL SYSTEM
   Mehdi Rajabzadeh Portfolio
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(".reveal");

    if (!revealElements.length) return;


    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -60px 0px"
        }
    );


    revealElements.forEach((element) => {

        observer.observe(element);

    });

});


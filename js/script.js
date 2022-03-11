document.addEventListener('DOMContentLoaded', function() {

    function openMenu() {
        document.getElementById("menu-icon").classList.add("close-menu");
        document.getElementById("menu-icon").classList.remove("open-menu");

        document.getElementById("overlay-nav").style.opacity = "1";
        document.getElementById("overlay-nav").style.pointerEvents = "auto";

        document.getElementById("body").style.overflow = "hidden";
    }

    function closeMenu() {
        document.getElementById("menu-icon").classList.remove("close-menu");
        document.getElementById("menu-icon").classList.add("open-menu");

        document.getElementById("overlay-nav").style.opacity = "0";
        document.getElementById("overlay-nav").style.pointerEvents = "none";

        document.getElementById("body").style.overflow = "auto";
    }

    document.getElementById("menu-icon").addEventListener("click", function (e) {

        if (document.getElementById("menu-icon").classList.contains('open-menu') ) {
            openMenu();
        } else {
            closeMenu();
        }

    });

    window.addEventListener("resize", function(event) {
        closeMenu();
    });

});
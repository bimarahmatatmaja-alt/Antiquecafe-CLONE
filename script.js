
function showPage(page) {

    const home = document.getElementById("home");
    const features = document.getElementById("features");
    const menu = document.getElementById("menu");
    const footer = document.getElementById("contact");

    const newMenuPage = document.getElementById("new-menu-page");
    const pageMenu = document.getElementById("page-menu");

    const newContactPage = document.getElementById("new-contact-page");
    const pageContact = document.getElementById("page-contact");

    [
        home,
        features,
        menu,
        footer,
        newMenuPage,
        pageMenu,
        newContactPage,
        pageContact
    ].forEach(element => {
        if (element) {
            element.style.display = "none";
        }
    });

    // HALAMAN HOME
    if (page === "home") {

        home.style.display = "flex";
        features.style.display = "flex";
        menu.style.display = "flex";
        footer.style.display = "block";

    }

    // HALAMAN OUR MENU
    else if (page === "menu") {

        newMenuPage.style.display = "block";
        pageMenu.style.display = "block";

    }

    // HALAMAN CONTACT
    else if (page === "contact") {

        newContactPage.style.display = "block";

    }

    window.scrollTo(0, 0);
}

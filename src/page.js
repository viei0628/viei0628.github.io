import loadContactPage from "./contact";
import loadHomePage from "./home";
import loadMenuPage from "./menu";

function createHeader() {
    const header = document.createElement('header');
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Highlander's Retreat";
    header.appendChild(restaurantName);
    header.appendChild(createNavBar());
    return header;
}

function createNavBar() {
    const navBar = document.createElement('nav');
    const homeBtn = document.createElement('button');
    homeBtn.textContent = "HOME";

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "CONTACT";

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "MENU";

    homeBtn.addEventListener('click', event => {
        loadHomePage();
    });

    contactBtn.addEventListener('click', event => {
        loadContactPage();
    });

    menuBtn.addEventListener('click', event => {
        loadMenuPage();
    });

    navBar.appendChild(homeBtn);
    navBar.appendChild(contactBtn);
    navBar.appendChild(menuBtn);
    return navBar;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute("id", "main");
    return main;
}

function createWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createMain());
    loadHomePage();
}
export default createWebsite;
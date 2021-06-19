function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add("menu");
    menu.classList.add('col-xs-12');
    menu.classList.add('col-sm-10');
    menu.classList.add('col-md-10');
    menu.classList.add('col-lg-8');
    // const menuItem = document.createElement('div');
    // menuItem.classList.add("card");

    // const menuContent = document.createElement('div');
    // menuContent.classList.add("card-body");
    // menuContent.innerText = "HAGGUS";
    // menuItem.appendChild(menuContent);
    // menu.appendChild(menuItem);
    const menuItem = document.createElement('p');
    menuItem.innerText ="Coming Soon";
    menu.appendChild(menuItem);
    return menu;
}

function loadMenuPage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenuPage;
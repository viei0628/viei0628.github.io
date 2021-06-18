function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add("menu");
    // const menuItem = document.createElement('div');
    // menuItem.classList.add("card");

    // const menuContent = document.createElement('div');
    // menuContent.classList.add("card-body");
    // menuContent.innerText = "HAGGUS";
    // menuItem.appendChild(menuContent);
    // menu.appendChild(menuItem);

    menu.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    `
    return menu;
}

function loadMenuPage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenuPage;
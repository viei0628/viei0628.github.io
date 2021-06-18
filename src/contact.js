function createContactPage() {
    const contactPage = document.createElement('div');
    contactPage.classList.add("contactPage");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone: Just Shout";

    const address = document.createElement("p");
    address.textContent = "Address: Inverness, Scotland";    

    contactPage.appendChild(phoneNumber);
    contactPage.appendChild(address);

    return contactPage;
}

function loadContactPage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContactPage());
}

export default loadContactPage;
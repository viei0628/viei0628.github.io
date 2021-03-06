import Highland from './images/highlands.jpg';

function loadHomePage() {
    const home = document.createElement("div");
    home.classList.add('home');
    home.classList.add('col-xs-12');
    home.classList.add('col-sm-10');
    home.classList.add('col-md-10');
    home.classList.add('col-lg-8');

    const main = document.getElementById('main');
    main.textContent = "";

    // const headline = document.createElement('h1');
    // headline.innerText = "HighLander";
    // home.appendChild(headline);

    //Add image
    // const myImage = new Image();
    // myImage.src = Highland;
    // home.appendChild(myImage);

    //About
    const description = document.createElement('p');
    description.innerText = 
    `
    Come find the highlander within and enjoy our great scottish cuisine. 
    We promise you will have an experience of a lifetime.
    `
    home.appendChild(description);
    main.appendChild(home);
}
export default loadHomePage;
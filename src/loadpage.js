const loadPage = () => {
    const content = document.querySelector('#content');
    // write content inside div 
    content.innerHTML = "content";
    const header = document.createElement("HEADER");
    // append header to content div
    content.appendChild(header);
    // Create logo element
    const logo = document.createElement("a");
    logo.innerHTML = "Hilltop Sushi";
    header.appendChild(logo);
    // create nav element
    const nav = document.createElement("NAV");
    header.appendChild(nav);
    
    const ul = document.createElement("ul");
    // append navul to nav
    nav.appendChild(ul);
    // ul.setAttribute("nav__links");
    ul.className = "nav__links";
    // creating list items 
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = "The Menu";
    li.setAttribute("id", "li");

    const li_two = document.createElement("li");
    ul.appendChild(li_two);
    li_two.innerHTML = "About Us";
    li_two.setAttribute("id", "li_two");
    const li_three = document.createElement("li");
    ul.appendChild(li_three);
    li_three.innerHTML = "Contact";

    

    // creating link 
    const link = document.createElement("a");
    const booktablebtn = document.createElement("button");
    booktablebtn.innerHTML = "Book Table";
    // append link to header
    header.appendChild(link);
    link.appendChild(booktablebtn);

    // Creating Main Page 
    const container = document.createElement("div");
    // append container to content div
    content.appendChild(container);
    // Assigning class
    container.setAttribute("class", "container");

    // creating image
    const landingimg = document.createElement("IMG");
    landingimg.setAttribute("id", "landing-img");
    landingimg.setAttribute("src", "img/sushi.jfif");
    container.appendChild(landingimg);

    // creating button inside img 
    const menubtn = document.createElement("button");
    container.appendChild(menubtn);
    menubtn.setAttribute("class", "btn");
    menubtn.innerHTML = "Book Table";

    // Creating page content div 
    const pagecontent = document.createElement("div");
    content.appendChild(pagecontent);
    pagecontent.setAttribute("class", "pagecontent");

    // creating card 1
    const card = document.createElement("div");
    pagecontent.appendChild(card);
    card.setAttribute("class", "card");

    // createing header
    const cardheader1 = document.createElement("div");
    card.appendChild(cardheader1);
    cardheader1.innerHTML = "Califonia Roll";
    cardheader1.setAttribute("class", "card-header");

    // creating card-main
    const cardmain1 = document.createElement("div");
    card.appendChild(cardmain1);
    cardmain1.setAttribute("class", "card-main");

    const cardimg1 = document.createElement("IMG");
    cardmain1.appendChild(cardimg1);
    cardimg1.setAttribute("src", "./img/califoniaroll.jpg");
    cardimg1.setAttribute("id", "caliroll");

    const cardprice1 = document.createElement("div");
    cardmain1.appendChild(cardprice1);
    cardprice1.innerHTML = "$5.00";
    cardmain1.setAttribute("class", "main-description");

    
    // creating card 2
    const card2 = document.createElement("div");
    pagecontent.appendChild(card2);
    card2.setAttribute("class", "card");

    // createing header
    const cardheader2 = document.createElement("div");
    card2.appendChild(cardheader2);
    cardheader2.innerHTML = "Spicy Tuna";
    cardheader2.setAttribute("class", "card-header");

    // creating card-main
    const cardmain2 = document.createElement("div");
    card2.appendChild(cardmain2);
    cardmain2.setAttribute("class", "card-main");

    const cardimg2 = document.createElement("IMG");
    cardmain2.appendChild(cardimg2);
    cardimg2.setAttribute("src", "./img/spicytuna.jpg");
    cardimg2.setAttribute("id", "spicytuna");

    const cardprice2 = document.createElement("div");
    cardmain2.appendChild(cardprice2);
    cardprice2.innerHTML = "$5.00";
    cardmain2.setAttribute("class", "main-description");

    
    // creating card 3
    const card3 = document.createElement("div");
    pagecontent.appendChild(card3);
    card3.setAttribute("class", "card");

    // createing header
    const cardheader3 = document.createElement("div");
    card3.appendChild(cardheader3);
    cardheader3.innerHTML = "Shrimp Tempura Roll";
    cardheader3.setAttribute("class", "card-header");

    // creating card-main
    const cardmain3 = document.createElement("div");
    card3.appendChild(cardmain3);
    cardmain3.setAttribute("class", "card-main");

    const cardimg3 = document.createElement("IMG");
    cardmain3.appendChild(cardimg3);
    cardimg3.setAttribute("src", "./img/shrimptempura.png");
    cardimg3.setAttribute("id", "spicytuna");

    const cardprice3 = document.createElement("div");
    cardmain3.appendChild(cardprice3);
    cardprice3.innerHTML = "$5.00";
    cardmain3.setAttribute("class", "main-description");
}
export { loadPage };
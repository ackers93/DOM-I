const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street,<br>Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Creating Nav
let navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(
  (currentValue, i) =>
  (currentValue.textContent = Object.values(siteContent.nav)[i])
)

// navLinks[0].textContent = siteContent.nav["nav-item-1"];
// navLinks[1].textContent = siteContent.nav["nav-item-2"];
// navLinks[2].textContent = siteContent.nav["nav-item-3"];
// navLinks[3].textContent = siteContent.nav["nav-item-4"];
// navLinks[4].textContent = siteContent.nav["nav-item-5"];
// navLinks[5].textContent = siteContent.nav["nav-item-6"];



//Creating CTA
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

document.querySelector("h1").innerHTML = siteContent.cta["h1"];
document.querySelector("button").textContent = siteContent.cta["button"];

//Main Content
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent['main-content']['middle-img-src']);

let headingList = document.querySelectorAll('h4');

headingList[0].textContent = siteContent['main-content']['features-h4']
headingList[1].textContent = siteContent['main-content']['about-h4']
headingList[2].textContent = siteContent['main-content']['services-h4']
headingList[3].textContent = siteContent['main-content']['product-h4']
headingList[4].textContent = siteContent['main-content']['vision-h4']

let paragraphList = document.querySelectorAll('p');

paragraphList[0].textContent = siteContent['main-content']['features-content']
paragraphList[1].textContent = siteContent['main-content']['about-content']
paragraphList[2].textContent = siteContent['main-content']['services-content']
paragraphList[3].textContent = siteContent['main-content']['product-content']
paragraphList[4].textContent = siteContent['main-content']['vision-content']

//Contact
headingList[5].textContent = siteContent['contact']['contact-h4']

paragraphList[5].innerHTML = siteContent['contact']['address']
paragraphList[6].textContent = siteContent['contact']['phone']
paragraphList[7].textContent = siteContent['contact']['email']

//Copyright
paragraphList[8].textContent = siteContent['footer']['copyright']


//Adding new item at beginning of navbar.
const newNavLink = document.createElement("a");

newNavLink.textContent = "Light Mode"

const parent = document.querySelector('nav');
parent.prepend(newNavLink);

//Adding new item at the end of navbar.

const newerNavLink = document.createElement('a');

newerNavLink.textContent = "Dark Mode";

const newerParent = document.querySelector('nav');

newerParent.append(newerNavLink);

const navColorChange = document.querySelectorAll('nav a');


//Nav Color Change

navColorChange.forEach(links => {
  links.style.color = 'green';
})

//Implementing a low quality dark Mode.

let lightMode = document.querySelector('nav a:nth-of-type(1)');
lightMode.addEventListener('click', (event) => {
  document.querySelector('body').style.background = 'white';
  document.querySelector('body').style.color = 'black';
})

let darkMode = document.querySelector('nav a:nth-of-type(8)');
darkMode.addEventListener('click', (event) => {
  document.querySelector('body').style.background = 'black';
  document.querySelector('body').style.color = 'white';
})
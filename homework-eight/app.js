const pages = {
  home: `
    <h1>Fresh Cuts Barbershop</h1>
    <div class="hero-image img1"></div>
    <p>Welcome to Fresh Cuts. We’re a local barbershop focused on clean cuts and a relaxed environment. Whether you’re coming in for a quick trim or trying something new, we make sure you leave looking right.</p>
  `,
  about: `
    <h1>About Us</h1>
    <div class="hero-image img2"></div>
    <p>Fresh Cuts is all about consistency and attention to detail. We take our time with every client and focus on getting the cut exactly how you want it. It’s not just about the haircut, it’s about the whole experience.</p>
  `,
  services: `
    <h1>Our Services</h1> 
    <div class="hero-image img3"></div>
    <p>We offer haircuts, fades, beard trims, and line-ups. Every service is done carefully so you get a clean and sharp look. If you’re not sure what style you want, we can help you figure it out.</p>
  `,
  contact: `
    <h1>Contact Us</h1>
    <div class="hero-image img4"></div>
    <p>Stop by the shop or reach out if you have any questions. We’re always open to new clients and walk-ins. Come through and get a fresh cut when you need it.</p>
  `,
};

const app = document.querySelector("#app");
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const page = link.id;

    app.innerHTML = pages[page];

    links.forEach((l) => l.classList.remove("active"));

    link.classList.add("active");
  });
});

app.innerHTML = pages.home;
links[0].classList.add("active");
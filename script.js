/* ===========================================================
   HURGHADA BLUE — Main JS
   - Edit WHATSAPP_NUMBER below to change booking number
   - Edit the trips array to add/remove trips
   =========================================================== */

/* ============ CONFIG (easy to edit) ============ */
const WHATSAPP_NUMBER = "201020845496"; // ← change to your real WhatsApp number (international format, no + or 00)

/* ============ TRIPS DATA ============
   Add, remove or edit trips here.
   category: "sea" | "desert" | "city" | "diving"
*/
const trips = [
  {
    title: "Orange Bay Island",
    category: "sea",
    duration: "6 Hours",
    price: 30,
    image: "images/Orange.jpeg.jpeg",
    description: "Sail to the famous white sand island with crystal turquoise lagoons, snorkeling stops & open buffet lunch."
  },
  {
    title: "Hula Hula Island",
    category: "sea",
    duration: "6 Hours",
    price: 35,
    image: "images/Hula_Hula.jpeg",
    description: "A picturesque island getaway with two snorkeling spots, beach time, lunch & soft drinks included."
  },
  {
    title: "Dolphin House",
    category: "sea",
    duration: "6 Hours",
    price: 40,
    image: "images/Dolphin.jpeg",
    description: "Swim alongside wild dolphins in their natural habitat at the stunning Sha'ab El Erg reef."
  },
  {
    title: "Mahmya Island",
    category: "sea",
    duration: "6 Hours",
    price: 45,
    image: "images/Mahmya.jpeg",
    description: "VIP island experience inside Giftun Marine Park — pristine beach, snorkeling & gourmet seafood lunch."
  },
  {
    title: "Snorkeling Trip",
    category: "sea",
    duration: "6 Hours",
    price: 30,
    image: "images/Snorkeling.jpeg",
    description: "Explore vibrant coral reefs and tropical fish at two of Hurghada's most beautiful snorkeling sites."
  },
  {
    title: "Private Yacht Trip",
    category: "sea",
    duration: "Custom",
    price: 350,
    image: "images/Private_yacht.jpeg",
    description: "Charter a private luxury yacht for your group. Tailor-made route, premium service & catering."
  },
  {
    title: "Horse Riding by the Sea",
    category: "desert",
    duration: "1-2 Hours",
    price: 30,
    image: "images/Horse_riding_by_the_see.jpeg",
    description: "Romantic horseback ride along the Red Sea shore and into the desert — sunset option available."
  },
  {
    title: "Desert Safari Adventure",
    category: "desert",
    duration: "6 Hours",
    price: 25,
    image: "images/Desert_safari.jpeg",
    description: "Jeep safari, camel ride, Bedouin village visit, BBQ dinner and stargazing under desert skies."
  },
  {
    title: "Quad Bike Adventure",
    category: "desert",
    duration: "6 Hours",
    price: 25,
    image: "images/Quad_adventure.jpeg",
    description: "Race across golden desert dunes on a powerful quad bike — adrenaline-packed sunrise or sunset rides."
  },
  {
    title: "Diving Program",
    category: "diving",
    duration: "Full Day",
    price: 50,
    image: "images/Diving.jpeg",
    description: "PADI-certified diving for beginners and pros. Discover the breathtaking underwater world of the Red Sea."
  },
  {
    title: "Submarine & Glass-Bottom Boat",
    category: "sea",
    duration: "4 Hours",
    price: 25,
    image: "images/Glass_boot.jpeg",
    description: "Discover marine life without getting wet. Perfect for families and non-swimmers."
  },
  {
    title: "Hurghada City Tour",
    category: "city",
    duration: "4 Hours",
    price: 30,
    image: "images/Hurghada_toure.jpeg",
    description: "Visit the marina, old city, mosques, traditional bazaars and authentic local restaurants."
  },
  {
    title: "Hurghada Aquarium",
    category: "city",
    duration: "4 Hours",
    price: 20,
    image: "images/Hurghada_Aquarium1.jpeg",
    description: "Walk through tunnels surrounded by sharks, rays, and colorful Red Sea marine species."
  },
  {
    title: "Cairo Day by Flight",
    category: "city",
    duration: "Full Day",
    price: 150,
    image: "images/Cairo1.jpeg",
    description: "Fly to Cairo and visit the Pyramids of Giza, the Sphinx, the Egyptian Museum and Khan El Khalili."
  },
  {
    title: "Utopia Island",
    category: "sea",
    duration: "6 Hours",
    price: 45,
    image: "images/Utopia1.jpeg",
    description: "Hidden paradise with shallow turquoise lagoons, sandbar walks and superb snorkeling reefs."
  }
];

/* ============ RENDER TRIPS ============ */
const tripsGrid = document.getElementById("tripsGrid");
function renderTrips(filter = "all") {
  tripsGrid.innerHTML = "";
  const list = filter === "all" ? trips : trips.filter(t => t.category === filter);
  list.forEach((t, i) => {
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I want to book the ${t.title} trip.`)}`;
    const card = document.createElement("article");
    card.className = "trip-card reveal";
    card.style.transitionDelay = (i * 60) + "ms";
    card.innerHTML = `
      <div class="trip-img">
        <span class="trip-tag">${t.category}</span>
        <span class="trip-duration"><i class="fa-regular fa-clock"></i> ${t.duration}</span>
        <img src="${t.image}" alt="${t.title}" loading="lazy"/>
      </div>
      <div class="trip-body">
        <h3>${t.title}</h3>
        <p>${t.description}</p>
        <div class="trip-foot">
          <div class="trip-price"><small>From</small><strong>$${t.price} <span>/ person</span></strong></div>
          <a class="book-btn" href="${waLink}" target="_blank" rel="noopener">Book Now <i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    `;
    tripsGrid.appendChild(card);
  });
  observeReveals();
}
renderTrips();

/* ============ FILTERS ============ */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderTrips(btn.dataset.filter);
  });
});

/* ============ NAVBAR scroll & mobile menu ============ */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.classList.remove("open");
}));

/* ============ HERO SLIDER ============ */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5500);

/* ============ SCROLL REVEAL ============ */
function observeReveals() {
  const reveals = document.querySelectorAll(".reveal:not(.visible)");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => obs.observe(r));
}
observeReveals();

/* ============ FAQ accordion ============ */
document.querySelectorAll(".faq-item").forEach(item => {
  const q = item.querySelector(".faq-q");
  const a = item.querySelector(".faq-a");
  q.addEventListener("click", () => {
    const open = item.classList.toggle("open");
    a.style.maxHeight = open ? a.scrollHeight + "px" : 0;
  });
});

/* ============ WhatsApp links ============ */
const waBase = `https://wa.me/${WHATSAPP_NUMBER}`;
document.getElementById("floatWa").href = `${waBase}?text=${encodeURIComponent("Hello! I'd like to know more about your Hurghada trips.")}`;
document.getElementById("contactWa").href = waBase;
document.getElementById("contactWa").textContent = "+" + WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{3})(\d+)/, "$1 $2 $3 $4");

/* ============ Contact form → WhatsApp ============ */
function sendContact(form) {
  const [name, trip, message] = form.querySelectorAll("input, textarea");
  const text = `Hello, my name is ${name.value}.%0A${trip.value ? "I'm interested in: " + trip.value + "%0A" : ""}${message.value}`;
  window.open(`${waBase}?text=${text}`, "_blank");
  form.reset();
}

/* ============ Misc ============ */
document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hide"), 500);
});

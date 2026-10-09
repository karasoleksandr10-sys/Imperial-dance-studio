// Додай сюди справжні контакти, коли вони будуть готові.
const CONTACTS = {
  telegram: "https://t.me/yusribnyy",
  viber: "viber://chat?number=%2B380993004344"
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Закрити меню" : "Відкрити меню");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.querySelectorAll("[data-contact]").forEach((link) => {
  const service = link.dataset.contact;
  if (CONTACTS[service]) {
    link.href = CONTACTS[service];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Контакт ще не додано. Відкрий файл script.js і впиши посилання на " + (service === "telegram" ? "Telegram." : "Viber."));
    });
  }
});

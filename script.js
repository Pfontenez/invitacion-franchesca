const EVENT = {
  title: "Primer cumpleaños de Franchesca",
  description: "Te esperamos para celebrar el primer añito de Franchesca.",
  location: "Estación Arco Iris Multieventos, Senguel 6000 esquina Almagro, González Catán, Buenos Aires",
  start: "20260905T160000Z", // 13:00 Argentina (UTC-3)
  end: "20260905T183000Z",   // 15:30 Argentina (UTC-3)
  localDate: "2026-09-05T13:00:00-03:00",
  mapsQuery: "Estación Arco Iris Multieventos, Senguel 6000 esquina Almagro, González Catán",
  whatsappNumber: "5491158553691", // Ejemplo: 5491155555555, sin +, espacios ni guiones
  whatsappMessage: "Hola! Quiero confirmar mi asistencia al primer cumpleaños de Fran el 5 de septiembre."
};

function createCalendarLink() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT.title,
    dates: `${EVENT.start}/${EVENT.end}`,
    details: EVENT.description,
    location: EVENT.location
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function createMapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EVENT.mapsQuery)}`;
}

function createWhatsAppLink() {
  const message = encodeURIComponent(EVENT.whatsappMessage);
  return EVENT.whatsappNumber
    ? `https://wa.me/${EVENT.whatsappNumber}?text=${message}`
    : `https://wa.me/?text=${message}`;
}

function setupLinks() {
  document.querySelector("#calendarButton").href = createCalendarLink();
  document.querySelector("#mapsButton").href = createMapsLink();
  document.querySelector("#mapsButtonSecondary").href = createMapsLink();
  document.querySelector("#whatsappButton").href = createWhatsAppLink();
}

function updateCountdown() {
  const target = new Date(EVENT.localDate).getTime();
  const now = Date.now();
  const difference = Math.max(0, target - now);

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference / 3600000) % 24);
  const minutes = Math.floor((difference / 60000) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.querySelector("#days").textContent = String(days).padStart(2, "0");
  document.querySelector("#hours").textContent = String(hours).padStart(2, "0");
  document.querySelector("#minutes").textContent = String(minutes).padStart(2, "0");
  document.querySelector("#seconds").textContent = String(seconds).padStart(2, "0");
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupSoundButton() {
  const button = document.querySelector("#soundToggle");
  let audioContext;
  let oscillator;
  let gain;
  let playing = false;

  button.addEventListener("click", () => {
    if (!playing) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      oscillator = audioContext.createOscillator();
      gain = audioContext.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = 174;
      gain.gain.value = 0.025;
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start();
      button.textContent = "♫";
      playing = true;
    } else {
      oscillator?.stop();
      audioContext?.close();
      button.textContent = "♪";
      playing = false;
    }
  });
}

setupLinks();
updateCountdown();
setInterval(updateCountdown, 1000);
setupReveal();
setupSoundButton();


const music = document.getElementById("bgMusic");
const startButton = document.getElementById("startButton");

let musicStarted = false;

startButton.addEventListener("click", () => {
    if (!musicStarted) {
        music.play();
        musicStarted = true;
    }
});

const message = encodeURIComponent(
`Hola 😊
Quiero confirmar mi asistencia al primer cumpleaños de Franchesca el 5 de septiembre.

Nombre:
Cantidad de adultos:
Cantidad de niños:`
);

setInterval(()=>{
    const ponyo=document.querySelector(".ponyo");

    ponyo.animate([
        {transform:"translateX(0px) translateY(0px)"},
        {transform:"translateX(10px) translateY(-5px)"},
        {transform:"translateX(0px) translateY(0px)"}
    ],{
        duration:3500,
        easing:"ease-in-out"
    });

},3500);


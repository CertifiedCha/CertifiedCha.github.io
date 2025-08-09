window.addEventListener("DOMContentLoaded", () => {
  // Theme toggle
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  }
  window.toggleTheme = toggleTheme;

  // Typewriter
  const aboutText = "Yo! I'm Darius — a student, builder, and tech enthusiast. I love turning coffee and ideas into working projects.";
  const typeElement = document.getElementById("typewriter");
  let typeIndex = 0;
  let isDeleting = false;

  function loopType() {
    if (!typeElement) return;
    if (!isDeleting) {
      typeElement.innerHTML = aboutText.slice(0, typeIndex) + '<span class="cursor">|</span>';
      typeIndex++;
      if (typeIndex > aboutText.length) {
        isDeleting = true;
        setTimeout(loopType, 2000);
        return;
      }
    } else {
      typeElement.innerHTML = aboutText.slice(0, typeIndex) + '<span class="cursor">|</span>';
      typeIndex--;
      if (typeIndex === 0) isDeleting = false;
    }
    setTimeout(loopType, isDeleting ? 30 : 50);
  }
  loopType();

  // Elements
  const relapseBtn = document.getElementById("relapseBtn");
  const snapOutBtn = document.getElementById("snapOutBtn");
  const relapseCard = document.getElementById("relapseCard");
  const music = document.getElementById("relapseMusic");
  const relapseVideo = document.getElementById("relapseVideo");
  const quoteDisplay = document.getElementById("quoteDisplay");
  const recoveryOverlay = document.getElementById("recoveryOverlay");
  const memoryContainer = document.getElementById("memoryChatContainer");

  // Quotes
  const quotes = [
    '“Miss ko na siya, guys.” — Darius',
    '“Wala na talaga... pero sana meron pa.”',
    '“Ako na lang ulit, pwede?”',
    '“Iniwan mo man ako, di kita iiwan.”',
    '“Binuhos ko lahat... ikaw lang pala hindi seryoso.”',
    '“Ikaw pa rin hanggang ngayon”',
    '“Kailan mo ba ako papalayain?”',
    '“Kaya pala ayaw nang ayusin kasi may iba na...”',
    '“Kung aantayin kita, may pag-asa pa ba?”',
    "“Bakit naman nang-iwan, kung tayo'y magkaibigan lang?”",
    '“Natatakot kang iwanan kita, pero ikaw pa yung nang-iwan.”',
    '“Miss na miss na kita haha”',
    '“Ansaket talaga pre”',
    '“Sana nababasa mo to”',
    '“Bawat luha ko ikaw ang may dahilan”',
    '“Bakit araw-araw pa kitang napapanaginipan?”',
    '“Bawal na ba?”'
  ];

let memoryMessages = [];

fetch('assets/memoryMessages.json')
  .then(response => response.json())
  .then(data => {
    memoryMessages = data;
    console.log("Loaded messages:", memoryMessages);
  })
  .catch(error => console.error("Failed to load memoryMessages:", error));




  let currentIndex = 0;
  let quoteInterval = null;
  let memoryRainInterval = null;

  function showNextQuote() {
    quoteDisplay.classList.remove('fade-in');
    void quoteDisplay.offsetWidth;
    quoteDisplay.textContent = quotes[currentIndex];
    quoteDisplay.classList.add('fade-in');
    currentIndex = (currentIndex + 1) % quotes.length;
  }

  function spawnMemoryChat() {
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble");
    bubble.textContent = memoryMessages[Math.floor(Math.random() * memoryMessages.length)];
    bubble.style.left = Math.random() * (window.innerWidth - 300) + "px";
    memoryContainer.appendChild(bubble);
    setTimeout(() => bubble.remove(), 10000);
  }

  // Relapse Mode
  relapseBtn.addEventListener("click", () => {
    relapseCard.classList.remove("hidden");
    document.documentElement.setAttribute("data-theme", "dark");

    setTimeout(() => {
      relapseCard.classList.add("show");
      relapseVideo.classList.add("show");
      relapseVideo.play().catch(console.error);
      showNextQuote();
      quoteInterval = setInterval(showNextQuote, 5000);
      snapOutBtn.classList.remove("hidden");
    }, 100);

    music.volume = 0.2;
    music.muted = false;
    music.play().catch(console.error);

    // Start Memory Rain
    memoryRainInterval = setInterval(spawnMemoryChat, 1800);
  });

  // Snap Out Mode
  snapOutBtn.addEventListener("click", () => {
    relapseVideo.pause();
    music.pause();
    clearInterval(quoteInterval);
    clearInterval(memoryRainInterval);

    relapseCard.classList.remove("show");
    setTimeout(() => {
      relapseCard.classList.add("hidden");
      relapseVideo.classList.remove("show");
      snapOutBtn.classList.add("hidden");
    }, 500);

    recoveryOverlay.classList.remove("hidden");
    recoveryOverlay.classList.add("show");
    document.documentElement.setAttribute("data-theme", "light");

    setTimeout(() => {
      recoveryOverlay.classList.remove("show");
      recoveryOverlay.classList.add("hidden");
    }, 4000);
  });

  // Modal
  const modal = document.getElementById("contactModal");
  window.openModal = function () {
    modal.style.display = "flex";
  };
  window.onclick = function (e) {
    if (e.target === modal) modal.style.display = "none";
  };

  // GSAP
  gsap.from("header", { y: -80, duration: 1, opacity: 0 });
  gsap.from(".card", {
    stagger: 0.2,
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
  });
  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });
});

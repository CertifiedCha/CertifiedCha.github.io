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

const memoryMessages = [
  // SHORT / SWEET  
  "Ingat ka palagi ha? Kahit wala na ako sa tabi mo. 🥺",
  "I miss you. Pero I know, dapat na kitang pakawalan.",
  "Tulog ka na? Sana panaginipan mo ko 😴",
  "Good night. I'll always care, kahit hindi mo na maramdaman.",
  "Gusto ko lang marinig mo: I'm proud of you.",
  "Kumain ka na ba? Sana oo.",
  "I hope you're sleeping well tonight, love.",
  "Alagaan mo sarili mo, please. Kung ayaw mo para sa'yo, gawin mo para sa akin.",
  "Kahit di na tayo nag-uusap, iniisip pa rin kita.",
  "Kung okay ka na, masaya na ko. Yun lang.",
  "Ingat ka lagi, love. 💙",
  "Good night, sweet dreams. 😘",
  "Namimiss na kita kahit kahapon lang tayo nag-usap 😢",
  "Kung may problema ka, nandito lang ako, okay?",
  "Alagaan mo sarili mo, please. 😔",
  "Don't overthink too much... I'm here 🫶",
  "Tulog ka na? Dream of me, okay? 😴",
  "I know you're tired... I'm proud of you 🥹",
  "I’m so lucky I met someone like you 🥺",
  "I’m just one message away, kahit anong oras.",
  "Kahit 'di tayo magkausap, iniisip pa rin kita.",
  "Gusto ko lang sabihin, I'm really grateful for you.",
  "Kahit gising ako hanggang 3AM, basta ikaw kausap, okay lang.",
  "I hope you’re doing okay, kahit wala na tayo masyado usap...",
  "Miss na miss na kita, sobra.",
  "You deserve the kind of love na never ka ipagpapalit.",
  "Sana ikaw pa rin... sa dulo.",
  "Basta tandaan mo: hindi ka nag-iisa.",
  "Naalala kita kanina, out of nowhere.",
  "You mean more to me than you'll ever know.",
  "I reread our old convos kanina... ang sakit pero ang saya rin.",
  "Your smile still lingers in my mind 😔",
  "I hope you’re taking care of yourself kahit wala na ko diyan.",
  "You’re still my safe place kahit hindi mo alam.",
  "Ang tahimik ng gabi... pero ikaw laman ng isip ko.",
  "Good morning, sunshine ☀️ Just wanted to say you’re enough.",
  "Naiiyak ako minsan kasi sobrang thankful ako sa 'yo.",
  "I loved you then, I love you still. Always have. Always will.",
  "Di mo man ako marinig ngayon... pero mahal pa rin kita.",
  "Sana balang araw, mapatawad mo rin sarili mo.",
  "Kaya mo yan, love. Isa-isa lang. I believe in you.",
  "Yakapin mo sarili mo para sa’kin ngayon, please.",
  "You were my favorite part of every day. 🕊️",
  "Salamat sa lahat. Kahit ngayon, andito ka pa rin sa puso ko.",


  // MEDIUM  
  "Napansin mo ba? Mas lalo akong tumahimik. Kasi baka pag nagsalita pa ako, ikaw ang lalabas sa bibig ko.",
  "Hindi ko alam paano ko nalagpasan 'tong gabi na ‘to... pero nandito pa rin ako. Iniisip ka.",
  "Sabi nila time heals all... pero bakit hanggang ngayon, ikaw pa rin laman ng mga alaala ko?",
  "Hindi ko na alam kung dapat pa kitang kausapin. Pero araw-araw, umaasa pa rin akong ikaw yung unang magme-message.",
  "Ang hirap magpanggap na okay lang ako... lalo na pag ikaw yung iniwasan ko, pero ikaw rin yung gusto kong balikan.",
  "Kung pwede lang balikan yung mga panahong masaya pa tayo, babalik ako kahit masaktan ulit.",

  // LONG / DEEP  
  "Hey... I know we don't talk anymore, but I still check your socials sometimes. Just to see if you're smiling. Just to make sure you're okay. I hope you are.",
  "I never hated you. I was just hurt. Kasi I gave my all, and maybe... you just weren't ready to receive that kind of love.",
  "There are nights when I still read our old messages. Laughing at the jokes, crying at the promises. Sometimes I wonder if you do too.",
  "You meant the world to me. And maybe I never told you enough. Or maybe I did, but you never believed it. I still do, though.",
  "I'm slowly healing. But there are still days I wish I could go back to the moment I first held your hand. Just to hold it a little longer.",
  "I remember everything — your laugh, your mood swings, the way you said my name when you were sleepy. And I miss it all. Every. Single. Bit.",
  "Sometimes, I pretend you're still beside me. I even whisper good night, hoping the wind brings it to you somehow.",
  "If this message ever reached you, I just want you to know: I loved you in the quietest, loudest, most painful way possible. And I'd do it again.",
  "You broke me without meaning to... and I healed by pretending you still cared.",
  "They said ‘move on,’ but how do you unlove someone who became your whole reason to wake up every day?",
  "Maybe in another lifetime, you’ll choose me without hesitation. Without doubt. Without needing to lose me first.",
  "I loved you hard. The kind of love you don’t unlearn. The kind that lingers in silence.",
  "You weren't just a chapter. You were the whole book... and I still reread every page in my head every night.",
  "I hope you’re happy now. And if ever life brings you pain, I hope you remember I once tried to protect you from all of it.",
  "I guess this is goodbye… not because I stopped loving you, but because you stopped needing me.",
  "One day, you’ll find these messages floating down… and you’ll know they came from a place that used to call you home."
];


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

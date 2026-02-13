// config.js — Tejaswini → Modha 💝 (soft pink)

// IMPORTANT: This project reads config from window.VALENTINE_CONFIG (see theme.js)
window.VALENTINE_CONFIG = {
  // Basic Information
  valentineName: "Modha",
  pageTitle: "Modha… will you be my Valentine? 💝",

  // Floating Background Elements
  floatingEmojis: {
    hearts: ["💗", "💖", "💝", "💕", "💞"],
    bears: ["🧸", "🐻‍❄️"]
  },

  // Questions and Buttons
  questions: {
    first: {
      text: "Do you like me?",
      yesBtn: "Yes 😌",
      noBtn: "No 🙃",
      secretAnswer: "I don’t like you… I’m luvvvvv you forever. 🥰💖"
    },
    second: {
      text: "How much do you love me?",
      startText: "This much!",
      nextBtn: "Next 💗"
    },
    third: {
      text: "Will you be my Valentine… Modha?",
      yesBtn: "Yes!! 💘",
      noBtn: "No 😏"
    }
  },

  // Love Meter Messages
  loveMessages: {
    extreme: "Okay Mr. Gym + Tennis King 💪🎾 this is too much love!",
    high: "To pithu and beyond… and beyond leg day 🥰🏋️‍♂️💝",
    normal: "Strong heart. Strong mind. Strong love 💗💪"
  },

  // Final Celebration
  celebration: {
    title: "Yay! I’m the luckiest person 🥹💗",
    message:
      "Now you officially signed up for 33 rules(Don't show ur back while reading this!) for your 33rd birthday 😌🎂✨\n\n" +
      "Keep hitting the gym 🏋️‍♂️💪\n" +
      "Keep dominating tennis 🎾🔥\n" +
      "Keep choosing health, strength & happiness ❤️\n\n" +
      "You are the kindest and loveliest person I’ve ever met.\n",
    emojis: "🏋️‍♂️🎾💪💗✨💝💕"
  },

  // Website Colors (Soft Pink)
  colors: {
    backgroundStart: "#FFD1DC",   // soft blush
    backgroundEnd: "#FFF0F5",     // very light pink (lavender blush)
    buttonBackground: "#FF6FAE",  // rosy pink
    buttonHover: "#FF8FC1",       // lighter rosy
    textColor: "#D6336C"          // deep pink for contrast
  },

  // Animation Settings
  animations: {
    floatDuration: "16s",
    floatDistance: "55px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.6
  },

  // Music Settings (optional)
  music: {
    enabled: false,          // set true if you add music
    autoplay: true,
    musicUrl: "YOUR_CLOUDINARY_URL_HERE",
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
  }
};

(function () {
  const body = document.body;
  if (!body || body.dataset.randomNonsense !== "true") return;

  const listStyles = [
    "armenian",
    "bengali",
    "cambodian",
    "circle",
    "cjk-earthly-branch",
    "cjk-heavenly-stem",
    "cjk-ideographic",
    "devanagari",
    "disc",
    "georgian",
    "gujarati",
    "gurmukhi",
    "hangul",
    "hebrew",
    "hiragana",
    "kannada",
    "katakana",
    "khmer",
    "lao",
    "lower-alpha",
    "lower-greek",
    "malayalam",
    "mongolian",
    "myanmar",
    "oriya",
    "persian",
    "square",
    "telugu",
    "thai",
    "tibetan",
    "upper-roman"
  ];

  const themes = [
    "theme-schoolyard",
    "theme-lab-note",
    "theme-library-card",
    "theme-cyber-postcard",
    "theme-printer-test"
  ];

  const stopButton = document.getElementById("nonsense-button");
  const navItems = document.querySelectorAll(".site-nav li");
  let counter = 0;

  function setTheme(theme) {
    body.classList.remove(...themes);
    body.classList.add(theme);
  }

  function getRandomList() {
    counter += 1;
    const style = listStyles[Math.floor(Math.random() * listStyles.length)];
    const theme = themes[Math.floor(Math.random() * themes.length)];

    setTheme(theme);
    navItems.forEach((item) => {
      item.style.listStyleType = style;
    });

    if (counter > 15 && stopButton) {
      stopButton.classList.add("is-visible");
    }
  }

  const interval = window.setInterval(getRandomList, 500);
  getRandomList();

  if (stopButton) {
    stopButton.addEventListener("click", () => {
      window.clearInterval(interval);
      stopButton.classList.remove("is-visible");
    });
  }
})();

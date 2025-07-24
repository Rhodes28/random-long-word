function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const entry = words[randomIndex];

  const word = entry.word;
  const definition = entry.definition;

  document.getElementById("word").textContent = word;
  document.getElementById("definition").innerHTML = definition;

  // Rarity stars
  let stars = "";
  const length = word.length;
  if (length >= 29) {
    stars = "⭐️⭐️⭐️";
  } else if (length >= 24) {
    stars = "⭐️⭐️";
  } else if (length >= 22) {
    stars = "⭐️";
  }
  document.getElementById("rarity").textContent = stars;
}

function pronounceWord() {
  const word = document.getElementById("word").textContent;
  if (!word) return;

  if (typeof responsiveVoice !== 'undefined') {
    responsiveVoice.speak(word, "UK English Female", { rate: 0.8 });
  } else {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  }
}

window.addEventListener("DOMContentLoaded", getRandomWord);

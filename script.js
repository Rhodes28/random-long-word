function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const entry = words[randomIndex];

  document.getElementById("word").textContent = entry.word;
  document.getElementById("definition").innerHTML = entry.definition;
  document.getElementById("rarity").textContent = getRarityStars(entry.word);
}

function getRarityStars(word) {
  const len = word.length;
  if (len <= 21) return "";
  if (len <= 23) return "⭐";
  if (len <= 28) return "⭐⭐";
  return "⭐⭐⭐";
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

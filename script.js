function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const entry = words[randomIndex];
  document.getElementById("word").textContent = entry.word;
  document.getElementById("definition").textContent = entry.definition;
}

function pronounceWord() {
  const word = document.getElementById("word").textContent;
  if (!word) return;

  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}

// Automatically load a word when the page finishes loading
window.addEventListener("DOMContentLoaded", getRandomWord);

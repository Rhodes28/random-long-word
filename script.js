let words = []; // Filled by words.js
let currentWord = "";

function getRandomWord() {
  if (!words.length) return;

  const { word, definition } = words[Math.floor(Math.random() * words.length)];
  currentWord = word;
  document.getElementById("word").textContent = word;
  document.getElementById("definition").innerHTML = definition;
}

function pronounceWord() {
  if (currentWord && responsiveVoice) {
    responsiveVoice.speak(currentWord, "UK English Female");
  }
}

// Load a word immediately
window.addEventListener('DOMContentLoaded', getRandomWord);

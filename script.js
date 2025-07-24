function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const entry = words[randomIndex];
  document.getElementById("word").textContent = entry.word;
  document.getElementById("definition").innerHTML = entry.definition;
}

function pronounceWord() {
  const word = document.getElementById("word").textContent;
  if (!word) return;

  responsiveVoice.speak(word, "UK English Female", { rate: 0.75 });
}

window.addEventListener("DOMContentLoaded", getRandomWord);

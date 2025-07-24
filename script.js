function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const entry = words[randomIndex];
  document.getElementById("word").textContent = entry.word;
  document.getElementById("definition").innerHTML = entry.definition;
}

function pronounceWord() {
  const word = document.getElementById("word").textContent;
  if (!word) return;

  if (typeof responsiveVoice !== 'undefined') {
    responsiveVoice.speak(word, "UK English Female", { rate: 0.6 });
  } else {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.6;
    speechSynthesis.speak(utterance);
  }
}

window.addEventListener("DOMContentLoaded", getRandomWord);

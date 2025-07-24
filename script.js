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
    responsiveVoice.speak(word, "UK English Female");
  } else {
    // fallback to built-in speechSynthesis if responsiveVoice fails
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  }
}

// Automatically load a word when the page finishes loading
window.addEventListener("DOMContentLoaded", getRandomWord);

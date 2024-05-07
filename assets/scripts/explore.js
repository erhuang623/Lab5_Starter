// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
// TODO
const textForm = document.getElementById('text-to-speak');
const voiceChange = document.getElementById('voice-select');
const button = document.querySelector('button');
const image = document.querySelector('img');

let voices = [];

function populateVoiceList() {
  voices = window.speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++)
    {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceChange.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', () => {
    const speech = new SpeechSynthesisUtterance(textForm.value);
    const selectedOption =
    voiceChange.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        speech.voice = voices[i];
      }
    }

    speechSynthesis.speak(speech);
    image.src = "assets/images/smiling-open.png";
    speech.onend = () => {
      image.src = "assets/images/smiling.png";
    }
  });
}
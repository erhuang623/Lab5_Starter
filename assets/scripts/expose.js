// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const hornSound = document.querySelector('audio');
  const playSoundButton = document.querySelector('button');

  horn.addEventListener("change", (event) =>  {
    const hornType = event.target.value;
    let imgPath = "assets/images/no-image.png";
    if (hornType === "air-horn") {
      imgPath = "assets/images/air-horn.svg";
    } else if (hornType === "car-horn") {
      imgPath = "assets/images/car-horn.svg";
    } else if (hornType === "party-horn") {
      imgPath = "assets/images/party-horn.svg";
    }

    hornImage.src = imgPath;
    hornSound.src = `assets/audio/${hornType}.mp3`;
    console.log("audio is: ", hornSound.src);
  });


  playSoundButton.addEventListener("click", () => {
    hornSound.play();
  });
}



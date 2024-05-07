// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const hornSound = document.querySelector('audio');
  const playSoundButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

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
    console.log("horn is ", horn.value);
  });


  playSoundButton.addEventListener("click", () => {
    hornSound.play();
    if(horn.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });


  const vol = document.getElementById('volume');
  const volumeTag = document.querySelector('img[alt="Volume level 2"]');

  vol.addEventListener("change", (event) => {
    
    let volImage = "";
    

  if(vol.value < 1) {
    volImage = "assets/icons/volume-level-0.svg";
    vol.volume = vol.value;
    hornSound.volume = vol.value / 100;
  } else if (vol.value < 33) {
    volImage = "assets/icons/volume-level-1.svg";
    hornSound.volume = vol.value / 100;
  } else if (vol.value < 67) {
    volImage = "assets/icons/volume-level-2.svg";
    hornSound.volume = vol.value / 100;
  } else
    volImage = "assets/icons/volume-level-3.svg";
    hornSound.volume = vol.value / 100;

    console.log("vol level is:" + vol.value);
    console.log("horn vol is:"+ hornSound.volume);
    volumeTag.src = volImage;
  });

}



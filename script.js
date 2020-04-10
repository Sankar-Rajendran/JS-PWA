var data = [
  {
    name: "Elephant",
    sound: "./assets/audios/elephant.mp3",
    image: "./assets/elephant.jpg",
  },
  {
    name: "Dog",
    sound: "./assets/audios/dog.mp3",
    image: "./assets/dog.jpg",
  },
  {
    name: "Cat",
    sound: "./assets/audios/cat.mp3",
    image: "./assets/cat.jpeg",
  },
  {
    name: "Cock",
    sound: "./assets/audios/cock.mp3",
    image: "./assets/cock.jpg",
  },
  {
    name: "Lion",
    sound: "./assets/audios/lion.mp3",
    image: "./assets/lion.jpg",
  },
  {
    name: "Goat",
    sound: "./assets/audios/goat.mp3",
    image: "./assets/goat.jpeg",
  },
  {
    name: "Cow",
    sound: "./assets/audios/cow.mp3",
    image: "./assets/cow.jpeg",
  },
  {
    name: "Parrot",
    sound: "./assets/audios/parrot.mp3",
    image: "./assets/parrot.jpg",
  },
  {
    name: "Duck",
    sound: "./assets/audios/duck.mp3",
    image: "./assets/duck.jpg",
  },
  {
    name: "Crow",
    sound: "./assets/audios/crow.wav",
    image: "./assets/crow.jpeg",
  },
];



//Registering Service Worker

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }

var selectedAnimalIndex = 0;
var audioElement,
  isPlaying = false;
document.getElementById("pause-button").style.display = "none";

function leftClicked() {
  checkPlaying();
  if (selectedAnimalIndex === 0) {
    selectedAnimalIndex = data.length - 1;
  } else {
    selectedAnimalIndex = selectedAnimalIndex - 1;
  }
  changeAnimal();
}

function checkPlaying() {
  if (isPlaying) {
    pauseSound();
  }
}

function rightClicked() {
  checkPlaying();
  if (selectedAnimalIndex === data.length - 1) {
    selectedAnimalIndex = 0;
  } else {
    selectedAnimalIndex = selectedAnimalIndex + 1;
  }

  changeAnimal();
}

function changeAnimal() {
  let selectedAnimal = data[selectedAnimalIndex];
  console.log(selectedAnimal);
  document.getElementById("main-animal").src = selectedAnimal.image;
  document.getElementById("audio-element").src = selectedAnimal.sound;
  document.getElementById("animal-name").innerHTML = selectedAnimal.name;
}

function playSound() {
  isPlaying = true;
  audioElement = document.getElementById("audio-element");
  document.getElementById("play-button").style.display = "none";
  document.getElementById("pause-button").style.display = "block";
  if (audioElement) {
    audioElement.play();
    audioElement.onended = playEnded;
  } else {
    alert("Something went wrong...!!");
  }
}

function pauseSound() {
  audioElement.pause();
  playEnded();
}

function playEnded() {
  isPlaying = false;
  document.getElementById("pause-button").style.display = "none";
  document.getElementById("play-button").style.display = "block";
}

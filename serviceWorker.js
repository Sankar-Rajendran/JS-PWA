const staticAnimalSounds = "animal-sounds"
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/assets/animal-sound-logo.png",
  "/assets/cat.jpeg",
  "/assets/cock.jpg",
  "/assets/cow.jpeg",
  "/assets/crow.jpeg",
  "/assets/dog.jpg",
  "/assets/duck.jpg",
  "/assets/elephant.jpg",
  "/assets/goat.jpeg",
  "/assets/left-arrow.png",
  "/assets/lion.jpg",
  "/assets/parrot.jpg",
  "/assets/pause-button.svg",
  "/assets/play-button.png",
  "/assets/right-arrow.png",
  "/assets/audios/cat.mp3",
  "/assets/audios/cock.mp3",
  "/assets/audios/cow.mp3",
  "/assets/audios/crow.wav",
  "/assets/audios/dog.mp3",
  "/assets/audios/duck.mp3",
  "/assets/audios/elephant.mp3",
  "/assets/audios/goat.mp3",
  "/assets/audios/lion.mp3",
  "/assets/audios/parrot.mp3"

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAnimalSounds).then(cache => {
      cache.addAll(assets)
    })
  )
});


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  

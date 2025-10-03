// Preload all sounds
const sounds = {
  crash: new Audio("crash.mp3"),
  kick: new Audio("kick.mp3"),
  snare: new Audio("snare.mp3"),
  tom1: new Audio("tom1.mp3"),
  tom2: new Audio("tom2.mp3"),
  tom3: new Audio("tom3.mp3"),
  tom4: new Audio("tom4.mp3")
};

// Play drum function
function playDrum(id) {
  console.log("Playing:", id); // Debug
  if (sounds[id]) {
    sounds[id].currentTime = 0;
    sounds[id].play().catch(err => console.log("Error:", err));
  }

  const drum = document.getElementById(id);
  drum.classList.add("active");

  setTimeout(() => {
    drum.classList.remove("active");
  }, 200);
}

// Mouse click
document.querySelectorAll(".drum").forEach(drum => {
  drum.addEventListener("click", () => playDrum(drum.id));
});

// Keyboard keys
document.addEventListener("keydown", (e) => {
  switch(e.key.toLowerCase()) {
    case "a": playDrum("crash"); break;
    case "s": playDrum("kick"); break;
    case "d": playDrum("snare"); break;
    case "f": playDrum("tom1"); break;
    case "g": playDrum("tom2"); break;
    case "h": playDrum("tom3"); break;
    case "j": playDrum("tom4"); break;
  }
});

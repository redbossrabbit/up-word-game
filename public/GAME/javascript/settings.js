"use strict";
import { slideMain } from "./scores.js";
const bgMusic = new Audio(`../music/bg-music.mp3`);
bgMusic.preload = "auto";
const settings = document.getElementById("settings");
const music = document.getElementById("music");
const sfx = document.getElementById("sfx");
const vibe = document.getElementById("vibration");
export const settingsDiv = document.getElementById("settings-div");
const SETTINGS_ACT = (e) => {
  if (slideMain.classList.contains("is-open")) {
    return;
  } else if (e.classList.contains("is-open")) {
    slideMain.style.display = "none";
    e.style.display = "none";
    e.classList.toggle("is-open");
  } else {
    slideMain.style.display = "flex";
    e.style.display = "flex";
    e.classList.add("drop");
    e.classList.toggle("is-open");
  }
};
settings.addEventListener("click", () => {
  SETTINGS_ACT(settingsDiv);
});
const currGS = JSON.parse(localStorage.getItem("GS"));
if (currGS.music) {
  music.style.opacity = "1";
} else {
  music.style.opacity = "0.4";
}
if (currGS.sfx) {
  sfx.style.opacity = "1";
} else {
  sfx.style.opacity = "0.4";
}
if (currGS.vibration) {
  vibe.style.opacity = "1";
} else {
  vibe.style.opacity = "0.4";
}
if (currGS.music) {
  bgMusic.play();
  bgMusic.loop = true;
}
const TOGGLE_MUSIC = () => {
  const currSound = JSON.parse(localStorage.getItem("GS"));
  if (currSound.music) {
    currSound.music = false;
    bgMusic.pause();
    localStorage.setItem("GS", JSON.stringify(currSound));
    music.style.opacity = "0.4";
    return;
  } else if (!currSound.music) {
    currSound.music = true;
    bgMusic.play();
    bgMusic.loop = true;
    localStorage.setItem("GS", JSON.stringify(currSound));
    music.style.opacity = "1";
  }
};
music.addEventListener("click", (event) => {
  TOGGLE_MUSIC();
  event.stopPropagation();
});
const TOGGLE_SFX = () => {
  const currSound = JSON.parse(localStorage.getItem("GS"));
  if (currSound.sfx) {
    currSound.sfx = false;
    localStorage.setItem("GS", JSON.stringify(currSound));
    sfx.style.opacity = "0.4";
    return;
  } else if (!currSound.sfx) {
    currSound.sfx = true;
    localStorage.setItem("GS", JSON.stringify(currSound));
    sfx.style.opacity = "1";
  }
};
sfx.addEventListener("click", (event) => {
  TOGGLE_SFX();
  event.stopPropagation();
});
const TOGGLE_VIBE = () => {
  const currSound = JSON.parse(localStorage.getItem("GS"));
  if (currSound.vibration) {
    currSound.vibration = false;
    localStorage.setItem("GS", JSON.stringify(currSound));
    vibe.style.opacity = "0.4";
    return;
  } else if (!currSound.vibration) {
    currSound.vibration = true;
    localStorage.setItem("GS", JSON.stringify(currSound));
    vibe.style.opacity = "1";
  }
};
vibe.addEventListener("click", (event) => {
  TOGGLE_VIBE();
  event.stopPropagation();
});
const loadScreen = document.getElementById("load-screen");
setTimeout(() => {
  loadScreen.style.display = "none";
}, 990);

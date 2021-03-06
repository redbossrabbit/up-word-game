"use strict";
import {
  bgMusic
} from "./homeSettings.js";
import {
  relaunchSettings
} from "./levelSettings.js";

const check = sessionStorage.getItem('hasEntered');
!check && (() => {
  const soloMode = document.getElementById("solo");
  const art = document.getElementById("art");
  const homePage = document.getElementById('home-page');


  let i = 0;
  const loadArr = [art, soloMode];
  // let relaunchSettings;
  // export const getRelaunchSettings = val => relaunchSettings = val; 

  setTimeout(() => {
    const runLoad = setInterval(() => {
      //play loadscreen animations
      if (i === 1) {
        clearInterval(runLoad);
      }
      loadArr[i].classList.add("pop-home");
      i++;
    }, 100);
  }, 200);

  soloMode.addEventListener("click", () => {
    bgMusic.pause();
    relaunchSettings();
    sessionStorage.setItem("hasEntered", true);
    soloMode.classList.add("shake");
    homePage.style.display = 'none';
  });
})()
export let gm;
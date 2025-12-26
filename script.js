let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date(2026, 0, 1, 0, 0);
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>Welcome to 2024</h1>`;
    
    window.location.href='./dist/index.html';
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
    if (hrsLeft <= 0 && daysLeft <= 0){
      document.body.style.backgroundImage = "url('background-img3.webp')";
	document.querySelector(
        "img"
      ).style.display = "none";

      document.querySelector(
        ".heading h3"
      ).style.display = "none";
	document.querySelector(
        ".heading h2"
      ).style.display = "none";
    } 
    if (minsLeft <= 20 && daysLeft <= 0 && hrsLeft <= 0){
      document.body.style.backgroundImage = "url('background-img5.webp')";
    
      const nodeList = document.querySelectorAll("span.num");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "darkred";
        nodeList[i].style.fontSize = "300px";
        nodeList[i].style.width = "400px";
        nodeList[i].style.height = "400px";
      }
      
	const boxList = document.querySelectorAll(".box");
      for (let i = 0; i < boxList.length - 2; i++) {
        boxList[i].style.display = "none";
      }

      document.querySelector(
        ".heading h2"
      ).style.color = "darkred";
      document.querySelector(
        ".heading h2"
      ).style.display = "none";
	document.querySelector(
        "img"
      ).style.display = "none";

      document.querySelector(
        ".heading h3"
      ).style.display = "none";
      
    } 
    if (secsLeft <= 30 && minsLeft <= 0 && daysLeft <= 0 && hrsLeft <= 0){
      document.body.style.backgroundImage = "url('background-img5.webp')";
    
      const nodeList = document.querySelectorAll("span.num");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "darkred";
        nodeList[i].style.fontSize = "300px";
        nodeList[i].style.width = "400px";
        nodeList[i].style.height = "400px";
      }

      const boxList = document.querySelectorAll(".box");
      for (let i = 0; i < boxList.length - 1; i++) {
        boxList[i].style.display = "none";
      }

      document.querySelector(
        ".heading h2"
      ).style.color = "darkred";
      
      document.querySelector(
        ".heading h2"
      ).style.display = "none";

      document.querySelector(
        "img"
      ).style.display = "none";

      document.querySelector(
        ".heading h3"
      ).style.display = "none";
      
    } 
    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  } 
}

let i = setInterval(countdown, 1000);
countdown();

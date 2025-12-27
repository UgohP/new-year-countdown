let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

// Targeting Jan 1, 2026 Midnight (Month is 0-indexed)
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

  if (endTime <= todayTime) {
    clearInterval(i);
    // FINISHED STATE: Only show the 2026 background
    document.querySelector(".wrapper").style.display = "none";
    document.body.style.backgroundImage = "url('2026.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.height = "100vh";
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    // --- BOX REMOVAL LOGIC ---
    // If no days, hide Day Box
    if (daysLeft <= 0) {
      document.body.style.backgroundImage = "url('newclock.png')";
      dayBox.parentElement.style.display = "none";

      const nodeList = document.querySelectorAll("span.num");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.fontSize = "150px";
        nodeList[i].style.width = "300px";
        nodeList[i].style.height = "300px";
      }

      const boxList = document.querySelectorAll(".box");
      for (let i = 0; i < boxList.length - 4; i++) {
        boxList[i].style.display = "none";
      }
    }
    // 2. If no days AND hours <= 2: Hide day box, make Min/Sec even bigger and change the background
    if (daysLeft <= 0 && hrsLeft < 2) {
      document.body.style.backgroundImage = "url('image10.jpg')";
      document.querySelector("img").style.display = "none"; //removes the mostrance image
      document.querySelector(".heading h3").style.display = "none"; //removes the adoration text
      document.querySelector(".heading h2").style.display = "none"; //removes the "walking with the load text"

      const nodeList = document.querySelectorAll("span.num");
      for (let i = 0; i < nodeList.length; i++) {
        // nodeList[i].style.color = "darkred";
        nodeList[i].style.fontSize = "300px";
        nodeList[i].style.width = "400px";
        nodeList[i].style.height = "400px";
      }

      const boxList = document.querySelectorAll(".box");
      for (let i = 0; i < boxList.length - 3; i++) {
        boxList[i].style.display = "none";
      }
    }

    // 2. Less than an hour 30 mins
    if (minsLeft < 30 && daysLeft <= 0 && hrsLeft === 1) {
      document.body.style.backgroundImage = "url('image2.png')";
      document.querySelector("img").style.display = "none"; //removes the mostrance image
      document.querySelector(".heading h3").style.display = "none"; //removes the adoration text
      document.querySelector(".heading h2").style.display = "none"; //removes the "walking with the load text"

      const nodeList = document.querySelectorAll("span.num");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "darkred";
        nodeList[i].style.fontSize = "300px";
        nodeList[i].style.width = "400px";
        nodeList[i].style.height = "400px";
      }

      const boxList = document.querySelectorAll(".box");
      for (let i = 0; i < boxList.length - 3; i++) {
        boxList[i].style.display = "none";
      }
    }

    // 3. less than an hour
    if (daysLeft <= 0 && hrsLeft < 1) {
      document.body.style.backgroundImage = "url('walking-into-2026.jpg')";
      document.querySelector("img").style.display = "none"; //removes the mostrance image
      document.querySelector(".heading h3").style.display = "none"; //removes the adoration text
      document.querySelector(".heading h2").style.display = "none"; //removes the "walking with the load text"

      const nodeList = document.querySelectorAll("span.num");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.fontSize = "300px";
        nodeList[i].style.width = "400px";
        nodeList[i].style.height = "400px";
      }

      const boxList = document.querySelectorAll(".box");
      for (let i = 0; i < boxList.length - 2; i++) {
        boxList[i].style.display = "none";
      }
    }

    // 4. less than 30mins
    if (minsLeft < 30 && daysLeft <= 0 && hrsLeft <= 0) {
      document.body.style.backgroundImage = "url('hour-glass.jpeg')";
      document.querySelector("img").style.display = "none"; //removes the mostrance image
      document.querySelector(".heading h3").style.display = "none"; //removes the adoration text
      document.querySelector(".heading h2").style.display = "none"; //removes the "walking with the load text"

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
    }

    // 5. 10 Minute
    if (minsLeft < 10 && daysLeft <= 0 && hrsLeft <= 0) {
      document.body.style.backgroundImage = "url('germini2.png')";

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

      document.querySelector(".heading h2").style.color = "darkred";
      document.querySelector(".heading h2").style.display = "none";
      document.querySelector("img").style.display = "none";

      document.querySelector(".heading h3").style.display = "none";
    }

    // 6. Less than Minute
    if (minsLeft < 1 && daysLeft <= 0 && hrsLeft <= 0) {
      document.body.style.backgroundImage = "url('germini7.png')";

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

      document.querySelector(".heading h2").style.color = "darkred";
      document.querySelector(".heading h2").style.display = "none";
      document.querySelector("img").style.display = "none";

      document.querySelector(".heading h3").style.display = "none";
    }

    // Update Text
    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}

let i = setInterval(countdown, 1000);
countdown();

//! Prøver litt forskjellig. Lager egne containere og samler de i scriptet slik at det er litt mer oversikt

//* Container one - YES PUSH
// Dette er litt vel kaos og tungvint, men bare begynte å lage noe og tok det derifra.

const yesBtn = document.querySelector("#yesPush");
// const yesBtnTwo = document.querySelector("#yesBtnTwo");
const yesTxt = document.querySelector("#yesyes");
const yesContainer = document.querySelector(".yesyes");
const yesH1 = document.querySelector(".yesH1");
const yesMsg = document.querySelector("#yesMsg");
const yesNameInput = document.querySelector("#yesNameInput");
const yesInputContainer = document.querySelector("#yesInputContainer");

const yesNewElement = document.createElement("button");
const yesXtraElement = document.createElement("p");
yesContainer.appendChild(yesXtraElement);

function yesReadyBtn() {
  yesContainer.appendChild(yesNewElement);
  yesNewElement.innerText = "READY YES";
  yesNewElement.style.fontSize = "40px";
  yesNewElement.style.backgroundColor = "blue";
  yesNewElement.style.color = "red";
  yesNewElement.style.border = "3px solid white";
  yesNewElement.style.padding = "10px";
  yesNewElement.style.margin = "10px";
  yesNewElement.style.cursor = "pointer";
  yesNewElement.addEventListener("mouseenter", (event) => {
    yesNewElement.style.color = "black";
    yesNewElement.style.backgroundColor = "red";
  });
  yesNewElement.addEventListener("mouseleave", (event) => {
    yesNewElement.style.color = "red";
    yesNewElement.style.backgroundColor = "blue";
  });
  yesNewElement.addEventListener("click", (event) => {
    yesXtraElement.innerText = " LETS GO ";
    yesNewElement.innerText = " SUPER READY? ";
  });
}

const yesCollector = [];

let yesName = "Anonym";

yesBtn.addEventListener("click", function () {
  yesContainer.style.backgroundColor = "red";
  yesContainer.style.width = "300px";
  yesContainer.style.textAlign = "center";
  yesH1.style.color = "#FFF";
  yesH1.style.fontSize = "10px";
  yesTxt.textContent += `yes `;
  yesCollector.push("yes");
  yesTxt.style.padding = "10px";
  yesBtnAgain();
  yesInputContainer.innerHTML = "<p></p>";
});

yesName = yesNameInput.value;

const yesPushMsg = [
  `Ah yes, push it more ${yesName}`,
  `Getting close. PUSH IT ${yesName.toUpperCase()}`,
  `never give up ${yesName}. just push it`,
  `Woaah! ${yesName}... are you ready?`,
];

let yesBtnAgain = () => {
  yesBtn.style.backgroundColor = "blue";
  yesBtn.style.color = "white";
  yesBtn.style.fontSize = "30px";
  yesBtn.style.border = "solid 5px";
  yesBtn.style.cursor = "pointer";

  yesBtn.addEventListener("mouseenter", (event) => {
    yesBtn.style.color = "red";
    yesBtn.style.fontSize = "25px";
  });
  yesBtn.addEventListener("mousedown", (event) => {
    yesBtn.style.color = "black";
    yesBtn.style.fontSize = "28px";
  });
  yesBtn.addEventListener("mouseleave", (event) => {
    yesBtn.style.color = "white";
    yesBtn.style.fontSize = "30px";
  });

  if (yesCollector.length < 5) {
    yesMsg.textContent = yesPushMsg[0];
  } else if (yesCollector.length < 10) {
    yesMsg.textContent = yesPushMsg[1];
    yesMsg.style.fontSize = "30px";
  } else if (yesCollector.length < 15) {
    yesMsg.textContent = yesPushMsg[2];
    yesMsg.style.fontSize = "15px";
  } else {
    yesMsg.textContent = yesPushMsg[3];
    yesMsg.style.fontSize = "50px";
    yesBtn.textContent = "YEEES";
    yesBtn.style.fontSize = "50px";
    yesBtn.style.background = "yellow";
    yesBtn.style.color = "blue";
    yesReadyBtn();
  }
};

//! ///// THE END /////////

//* Container two

let imagesStar;

imagesStar = [
  "./images/star01.png",
  "./images/star02.png",
  "./images/star03.png",
  "./images/star04.png",
];

//! Prøver litt forskjellig. Lager egne containere og samler de i scriptet slik at det er litt mer oversikt

//* Container one - YES PUSH
// Her er det mye kaos! jeg måtte bare begynne å lage noe, og lot det stå til. hehe

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
    yesNewElement.addEventListener("click", (e) => {
      yesContainer.innerHTML = "<p>game over</p>";
    });
    yesFinishBtn();
  });
}

const yesImDone = document.createElement("button");
function yesFinishBtn() {
  yesContainer.appendChild(yesImDone);
  yesImDone.innerText = "LETS GO";
  yesImDone.style =
    "font-size: 40px; background-color: red; color: white; cursor: pointer; padding: 20px;";
  yesImDone.addEventListener("click", (event) => {
    yesContainer.innerHTML = "<p>Victory</p>";
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
  yesBtn.style = "color: white; font-size: 30px";
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

//* Container two - STAR BOX

const starBtnOne = document.querySelector("#starBtnOne");
const starBtnTwo = document.querySelector("#starBtnTwo");
const starScreen = document.querySelector(".star-screen");
const starInput = document.querySelector("#star-input");
const starFoot = document.querySelector(".star-foot");
const starMenuTxt = document.querySelector("#star-menu-text");

// Button one - STAR

const starImgs = [
  "./images/star01.png",
  "./images/star02.png",
  "./images/star03.png",
  "./images/star04.png",
];

const starView = document.createElement("div");
starScreen.appendChild(starView);

starBtnOne.addEventListener("click", (e) => {
  let randomer = Math.floor(Math.random() * starImgs.length);
  starView.style.backgroundImage = ` url('${starImgs[randomer]}')`;
  starView.style.backgroundRepeat = "no-repeat";
  starView.style.backgroundSize = "cover";
  starView.style.width = "100px";
  starView.style.height = "100px";
});

// Button two - STAR

starBtnTwo.addEventListener("click", (e) => {
  starMenuTxt.innerText = "";
  starLooper();
});

let starLooper = () => {
  for (let i = 0; i < starMac.innerText.length; i++) {
    starMenuTxt.innerText += `* ${starInput.value} *`;
  }
};

// INPUT function - STAR

const starMac = document.createElement("p");
starScreen.appendChild(starMac);

// Pushe input inn i en array. Så måle den opp/sammenligne mot en annen array og gi output fra den andre arrayen.
let starPusher = () => {
  const starTxtArray = [
    "green",
    "red",
    "yellow",
    "black",
    "purple",
    "pink",
    "gray",
    "blue",
  ];

  //arrayen for å samle inputvalue
  const starValueArray = [];
  //pusher inputvaluen til arrayen. splitter den
  starValueArray.push(starInput.value.trim(""));
  // loop for å legge til info fra arrayen mens det skrives
  for (let i = 0; i < starValueArray.length; i++) {
    starValueArray[i] = starTxtArray[i];

    starFoot.innerText = `: ${starValueArray[i]}`;
  }
};
let starColorRender = () => {
  return (randomColor = Math.floor(Math.random() * 16777215).toString(16));
};
let starUpdateTxt = () => {
  starPusher();
  if (starInput.value) {
    starMac.innerText = `${starInput.value}`;
    starMac.style = "color: red; font-size: 30px";
    starScreen.style.backgroundColor = `#${starColorRender()}`;
    starFoot.style.backgroundColor = `#${starColorRender()}`;
    document.querySelector(
      "body"
    ).style.backgroundColor = `#${starColorRender()}`;
  } else {
    starMac.innerText = "";
    starMac.style = "color: white; font-size: 30px";
    starScreen.style.backgroundColor = "gray";
  }
};

//! ///// THE END /////////

//* Container three - BIG BOX

const bigBox = document.querySelector("#bigBox");
const oneBox = document.querySelector(".oneBox");

const boxBtnOne = document.querySelector(".boxBtnOne");
const boxBtnTwo = document.querySelector(".boxBtnTwo");
const boxBtnThree = document.querySelector(".boxBtnThree");
const boxBtnMid = document.querySelector(".boxBtnMid");
const boxBtnFour = document.querySelector(".boxBtnFour");
const boxBtnFive = document.querySelector(".boxBtnFive");
const boxBtnSix = document.querySelector(".boxBtnSix");
const boxOutput = document.querySelector("#boxOutput");

const clickCollector = [];
// Banner Box

let styleSwitch = (sheet) => {
  document.querySelector("#pagestyle").setAttribute("href", sheet);
};

const oneBoxBtn = document.createElement("button");
oneBox.append(oneBoxBtn);
oneBoxBtn.innerText = "KLIKK";
oneBoxBtn.style =
  " width: 100%;font-size: 20px; padding: 2px 5px; margin: 0px 10px; background-color: rgb(228, 32, 32); border: solid 1px black; border-radius: 3px";
oneBoxBtn.addEventListener("mouseover", (e) => {
  oneBoxBtn.style =
    "width: 100%;font-size: 20px; padding: 2px 5px; margin: 0px 10px; background-color: black; border: solid 1px rgb(228, 32, 32); border-radius: 3px; color: rgb(228, 32, 32)";
});
oneBoxBtn.addEventListener("mouseleave", (e) => {
  oneBoxBtn.style =
    " width: 100%;font-size: 20px; padding: 2px 5px; margin: 0px 10px; background-color: rgb(228, 32, 32); border: solid 1px black; border-radius: 3px";
});
oneBoxBtn.addEventListener("click", (e) => {
  clickCollector.length = 0;
  boxOutput.innerText = "RESTART";
});

// Inside Boxes

// Denne kopierte jeg fra nett. Ikke vært borti dette før nå. Prøvde først med en eventlistner, men tok ikke tid til å prøve å finne ut åssen den kan skrues av å på.
document.addEventListener("DOMContentLoaded", (e) => {
  const checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener("change", (e) => {
    if (checkbox.checked) {
      styleSwitch("style2.css");
    } else {
      styleSwitch("style.css");
    }
  });
});

boxBtnOne.addEventListener("click", (e) => {
  boxOutput.innerText = "KLIKK 1";
  clickCollector.push("1");
});

boxBtnTwo.addEventListener("click", (e) => {
  boxOutput.innerText = "KLAKK 2";
  clickCollector.push("2");
});

boxBtnThree.addEventListener("click", (e) => {
  boxOutput.innerText = "TUKK 3";
  clickCollector.push("3");
});

boxBtnMid.addEventListener("click", (e) => {
  boxOutput.innerText = "MID MID";
  clickCollector.push("0");
});

boxBtnFour.addEventListener("click", (e) => {
  clickCollector.push("4");
  boxOutput.innerText = `current clicks: ${clickCollector.length}`;
});

boxBtnFive.addEventListener("click", (e) => {
  clickCollector.push("5");
  boxOutput.innerText = "cleaning in the back";
  clickCollector.sort();
});

boxBtnSix.addEventListener("click", (e) => {
  let clik = clickCollector.length;
  let clickTern =
    clik <= 5
      ? "Nice clicks. Do more"
      : clik <= 10
      ? "No secrets yet. Do more"
      : clik <= 15
      ? "Okey, just a few more clicks"
      : "NICE. thats enough";

  boxOutput.innerText = clickTern;
});

// switch case // fritt kopiert fra en på nett. fordi det var et par ting i den jeg ikke kunne
// venter på DOM til å loade
//* Lot denne være. rakk ikke. men switchen er jo grei. hehe
// document.addEventListener("DOMContentLoaded", (e) => {
//   //putter knappen inn i en variabel
//   const knapp = document.querySelector("#boxKnapp");

//   // venter på at brukeren klikker knappen
//   knapp.addEventListener(
//     "change",
//     (e) => {
//       //putter valgt verdi inn i en variabel
//       let knappValg = this.color.value;

//       // "switch statement"
//       switch (knappValg) {
//         case "valgEn":
//           boxOutput.innerText = "okei";
//           break;
//         case "valgTo":
//           boxOutput.innerText = "okeei";
//           break;
//         case "valgTre":
//           boxOutput.innerText = "OK";
//           break;
//       }
//     },
//     false
//   );
// });

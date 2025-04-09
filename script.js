// const egg = document.getElementById("egg");
// const surprise = document.getElementById("surprise");
// const explosion = document.getElementById("explosion");
// const tryAgainBtn = document.getElementById("try-again");

// let crackCount = 0;
// const crackLimit = 5;

// const eggImages = [
//   "egg.png",
//   "egg1.png",
//   "egg2.png",
//   "egg3.png",
//   "egg4.png"
// ];

// const surprises = [
//     { text: "baby chick chuck!", img: "chick.png" },
//     { text: "Ahaaa....moneyyy!", img: "cash.png" },
//     { text: "Candy candy candy!", img: "candy.png" },
//     { text: "A surprise frog!", img: "frog.png" },
//     { text: "... more eggs?!", img: "moreegg.png" },
//     { text: "Aww...a puppy!", img: "puppy.png" },
//     { text: "Chocoloate Cookies....yay!", img: "choco_cookies.png" }
// ];

// // EGG click logic
// egg.addEventListener("click", () => {
//   crackCount++;

//   egg.classList.add("crack");
//   setTimeout(() => egg.classList.remove("crack"), 100);

//   if (crackCount < crackLimit) {
//     egg.src = eggImages[crackCount];
//   } else {
//     egg.style.display = "none";

//     explosion.classList.remove("hidden");
//     explosion.classList.add("show");
//     explosion.src = "";
//     explosion.src = "explosion.gif";

//     setTimeout(() => {
//       explosion.classList.remove("show");
//       explosion.classList.add("hidden");
//       explosion.src = "";

//       const selected = surprises[Math.floor(Math.random() * surprises.length)];
//       surprise.innerHTML = `
//         <img src="${selected.img}" alt="surprise" class="surprise-img" />
//         <p>${selected.text}</p>
//       `;
//       surprise.classList.remove("hidden");
//       surprise.style.opacity = 1;

//       tryAgainBtn.classList.remove("hidden");
//     }, 700);
//   }
// });

// // ✅ Try Again Button click logic
// tryAgainBtn.addEventListener("click", () => {
//   crackCount = 0;
//   egg.src = eggImages[0];
//   egg.style.display = "inline-block";

//   surprise.classList.add("hidden");
//   surprise.innerHTML = "";
//   surprise.style.opacity = 0;

//   explosion.classList.add("hidden");
//   explosion.src = "";

//   tryAgainBtn.classList.add("hidden");
// });


const egg = document.getElementById("egg");
const surprise = document.getElementById("surprise");
const explosion = document.getElementById("explosion");
const tryAgainBtn = document.getElementById("try-again");
const instruction = document.getElementById("instruction"); // ✅ Add this

let crackCount = 0;
const crackLimit = 5;

const eggImages = [
  "egg.png",
  "egg1.png",
  "egg2.png",
  "egg3.png",
  "egg4.png"
];

const surprises = [
  { text: "baby chick chuck!", img: "chick.png" },
  { text: "Ahaaa....moneyyy!", img: "cash.png" },
  { text: "Candy candy candy!", img: "candy.png" },
  { text: "A surprise frog!", img: "frog.png" },
  { text: "... more eggs?!", img: "moreegg.png" },
  { text: "Aww...a puppy!", img: "puppy.png" },
  { text: "Chocoloate Cookies....yay!", img: "choco_cookies.png" }
];

// EGG click logic
egg.addEventListener("click", () => {
  crackCount++;

  egg.classList.add("crack");
  setTimeout(() => egg.classList.remove("crack"), 100);

  if (crackCount < crackLimit) {
    egg.src = eggImages[crackCount];
  } else {
    egg.style.display = "none";

    if (instruction) instruction.classList.add("hidden"); // ✅ Hide h2 when cracked

    explosion.classList.remove("hidden");
    explosion.classList.add("show");
    explosion.src = "";
    explosion.src = "explosion.gif";

    setTimeout(() => {
      explosion.classList.remove("show");
      explosion.classList.add("hidden");
      explosion.src = "";

      const selected = surprises[Math.floor(Math.random() * surprises.length)];
      surprise.innerHTML = `
        <img src="${selected.img}" alt="surprise" class="surprise-img" />
        <p>${selected.text}</p>
      `;
      surprise.classList.remove("hidden");
      surprise.style.opacity = 1;

      tryAgainBtn.classList.remove("hidden");
    }, 700);
  }
});

// Try Again button click logic
tryAgainBtn.addEventListener("click", () => {
  crackCount = 0;
  egg.src = eggImages[0];
  egg.style.display = "inline-block";

  surprise.classList.add("hidden");
  surprise.innerHTML = "";
  surprise.style.opacity = 0;

  explosion.classList.add("hidden");
  explosion.src = "";

  tryAgainBtn.classList.add("hidden");

  if (instruction) instruction.classList.remove("hidden"); // ✅ Show h2 again
});

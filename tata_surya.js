window.onload = function () {
  function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();

  // link sagan matahari, bila diklik pacang masuk ke link
  const gambarMatahari = document.getElementById("gambar_matahari");
  gambarMatahari.addEventListener("click", function () {
    window.location.href = "sun.html";
  });

  // link sagan mercury, bila diklik pacang masuk ke link
  const gambarMercury = document.getElementById("gambar_Mercury");
  gambarMercury.addEventListener("click", function () {
    window.location.href = "mercury.html";
  });

  // link sagan venus, bila diklik pacang masuk ke link
  const gambarVenus = document.getElementById("gambar_venus");
  gambarVenus.addEventListener("click", function () {
    window.location.href = "venus.html";
  });

  // link sagan earth, bila diklik pacang masuk ke link
  const gambarEarth = document.getElementById("gambar_earth");
  gambarEarth.addEventListener("click", function () {
    window.location.href = "earth.html";
  });

  // link sagan mars, bila diklik pacang masuk ke link
  const gambarMars = document.getElementById("gambar_mars");
  gambarMars.addEventListener("click", function () {
    window.location.href = "mars.html";
  });

  // link sagan jupiter, bila diklik pacang masuk ke link
  const gambarJupiter = document.getElementById("gambar_jupiter");
  gambarJupiter.addEventListener("click", function () {
    window.location.href = "jupiter.html";
  });

  // link sagan saturn, bila diklik pacang masuk ke link
  const gambarSaturn = document.getElementById("gambar_saturn");
  gambarSaturn.addEventListener("click", function () {
    window.location.href = "saturnus.html";
  });

  // link sagan uranus, bila diklik pacang masuk ke link
  const gambarUranus = document.getElementById("gambar_uranus");
  gambarUranus.addEventListener("click", function () {
    window.location.href = "uranus.html";
  });

  // link sagan neptune, bila diklik pacang masuk ke link
  const gambarNeptune = document.getElementById("gambar_neptune");
  gambarNeptune.addEventListener("click", function () {
    window.location.href = "neptunus.html";
  });

  // link sagan pluto, bila diklik pacang masuk ke link
  const gambarPluto = document.getElementById("gambar_pluto");
  gambarPluto.addEventListener("click", function () {
    window.location.href = "";
  });
};

// picikan tanda tanya
function toggleTanya() {
  let TanyaDiv = document.querySelector(".kata_kata");
  let miyuki = document.querySelector(".tanda_tanya");

  if (TanyaDiv.style.display === "none") {
    TanyaDiv.style.display = "block";
    miyuki.textContent = "!";
  } else {
    TanyaDiv.style.display = "none";
    miyuki.textContent = "?";
  }
}

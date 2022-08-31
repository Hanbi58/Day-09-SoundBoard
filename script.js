const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttons = document.getElementById("buttons");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.innerText = sound;
  buttons.appendChild(btn);
  btn.addEventListener("click", () => {
    sounds.forEach((sound) => {
      const ado = document.getElementById(sound);
      ado.pause();
    });
    document.getElementById(sound).play();
  });
});

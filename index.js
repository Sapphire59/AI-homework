function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: [
      "The Cardinal has come again, he all the brake salutes, his music floods the silent glen.",
    ],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);

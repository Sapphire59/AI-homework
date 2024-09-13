function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7eot7c9e36304bbfae357f4a433400e3";
  let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
  let context =
    "You are a charming Poem expert who loves to write beautiful, short poems. Your mission is to generate a 4 line poem and seperate each line with a <br />. Make sure to follow the user instructions. Sign the poem with, 'SheCodes AI' inside a <strong> </strong> element";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class ="blink">⏳Generating a poem for you about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);

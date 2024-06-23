let poemElement = document.querySelector("#poem");

function displayPoem(response) {
  poemElement.classList.remove("animate-pulse");
  const poemResult = response.data.answer;
  new Typewriter("#poem", {
    strings: poemResult,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function generatePoem(event) {
  event.preventDefault();

  // build the API url
  // make a call to the API using axios
  // display the generated poem

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "50f181fb5atco86d3e4e13e20785aa08";
  let prompt = `User instructions: generate a unique haiku about ${instructionsInput.value}`;
  let context =
    "You are a haiku poem expert. Your mission is to generate a haiku in basic HTML. Separate each line with a <br />. Do not include a title. Make sure to follow the user instructions. At the end of the poem, sign the poem with 'SheCodes AI' wrapped inside a <p> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a haiku about
    <em>${instructionsInput.value}...</em>
`;

  setTimeout(() => {
    axios.get(apiUrl).then(displayPoem);
  }, 3000);
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);

function displayPoem(response) {
  const poem = response.data.answer;
  new Typewriter("#poem", {
    strings: poem,
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
    "You are a haiku poem expert. Your mission is to generate a haiku in basic HTML. Separate each line with a <br />. Do not include a title. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);

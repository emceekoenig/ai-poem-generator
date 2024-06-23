function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "haiku poem here";
  const poem = poemElement.innerHTML;

  new Typewriter("#poem", {
    strings: poem,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);

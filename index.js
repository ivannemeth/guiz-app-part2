const bookmarkLight = document.querySelector('[data-js="bookmark-light"]');
const bookmarkDark = document.querySelector('[data-js="bookmark-dark"]');
const answerOne = document.querySelector('[data-js="answer-one"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
/*bookmark*/
bookmarkDark.addEventListener("click", () => {
  console.log("light");
  bookmarkDark.classList.add("hidden");
});

bookmarkLight.addEventListener("click", () => {
  console.log("dark");
  bookmarkDark.classList.remove("hidden");
});

/*answer shown*/
answerButton.addEventListener("click", () => {
  console.log("answer");
  answerOne.classList.toggle("answer-one-hidden");
  /*button changed*/
  if (answerButton.innerHTML === "Show Answer") {
    answerButton.innerHTML = "Hide Answer";
  } else {
    answerButton.innerHTML = "Show Answer";
  }
});

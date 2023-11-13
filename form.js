const form = document.querySelector('[data-js="form"]');
const body = document.querySelector('[data-js="body"]');

const questionInput = document.querySelector('[data-js="question-input"]');
const questionCharactersLeft = document.querySelector(
  '[data-js="question-characters-left"]'
);
const answerInput = document.querySelector('[data-js="answer-input"]');
const answerCharactersLeft = document.querySelector(
  '[data-js="answer-characters-left"]'
);

/* card appearing */

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  const question = formElements.yourQuestion.value;
  const answer = formElements.yourAnswer.value;
  const tag = formElements.tag.value;

  /*console.log(formElements.yourQuestion.value);
  console.log(formElements.yourAnswer.value);
  console.log(formElements.tag.value);*/

  const section = document.createElement("section");
  section.classList.add("question-container");

  section.innerHTML = `
 
  <section class="question-card">
  <h4 class="question-title"> ${question} </h4>
  <p class="question-title"> ${answer} </p>
  <section class="tag-container">
            <p class="tag"> ${tag} </p>
          </section>

  `;

  console.log(section);

  body.append(section);
});

/* character count */

questionInput.addEventListener("input", (event) => {
  const questionLength = event.target.value.length;

  console.log(questionLength);

  let charactersLeft = 150 - questionLength;
  questionCharactersLeft.textContent = `${charactersLeft} characters left`;
});

answerInput.addEventListener("input", (event) => {
  const answerLength = event.target.value.length;

  console.log(answerInput);

  let charactersLeft = 150 - answerLength;
  answerCharactersLeft.textContent = `${charactersLeft} characters left`;
});

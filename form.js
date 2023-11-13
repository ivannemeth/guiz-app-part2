const form = document.querySelector('[data-js="form"]');

const body = document.querySelector('[data-js="body"]');
const questionInput = document.querySelector('[data-js="your-question"]');

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
  /*

          <h4 class="question-title">
            1. What is the name of the coffee shop where the Friends gang
            frequently hangs out?
          </h4>
          <button data-js="answer-button">Show Answer</button>

          <p class="answer-one-hidden" data-js="answer-one">Central Perk</p>

          <section class="tag-container">
            <p class="tag">#coffeshop</p>
            <p class="tag">#friends</p>
          </section>
        </section>

  /*const newCard = document.createElement("newCard");

  body.append(newCard);
  console.log(card.textContent);*/
});

questionInput.addEventListener("input", (event) => {
  const questionLength = console.log(event.target.value);
});

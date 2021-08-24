// Make the function fetch 

// Create createQuestionItem

const createQuestionItem = ({ question, answers, correct_answers }) => {
  const questionDiv = document.createElement('div');
  // Somente aceita respostas válidas
  const validAnswers = Object.values(answers).filter((answer) => answer !== null);

  questionDiv.innerHTML = `<h2 class="question">${question}</h2>`;
  // Itera por todas as respostas válidas e verifica se é a correta para então acrescentar o elemeto à questionDiv
  validAnswers.forEach((answer, index) => {
    if (Object.values(correct_answers)[index] === 'true') questionDiv.innerHTML += `<li class="correct answer">${answer}</li>`;
    else questionDiv.innerHTML += `<li class="answer">${answer}</li>`
  });
  questionDiv.className = "question-div";
  // Console.log de teste
  console.log(questionDiv);
}

window.onload = () => {
  // Chamada de teste
  createQuestionItem({ question: 'hey?', answers: { a: 'hey', b: 'hello', c: null }, correct_answers: { a: 'true', b: 'false', c: 'false'} });
}
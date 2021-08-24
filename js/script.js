// Make the function fetch 

const fetch = require('node-fetch');
// Função que faz a requisição para a API 
const fetchQuiz = async (category, difficulty, limit) => {
  // faz a reuisição da API com os parametros
  const getQuestions = await fetch(`https://quizapi.io/api/v1/questions?apiKey=Sv36yp6PpNiHdkVuzwgj6XSswZTUPlrKoh7P6KZH&category=${category}difficulty=${difficulty}&limit=${limit}`);
  // trata os dados convertendo em ObjectJson
  const responseQuestions = await getQuestions.json();
};



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

  return questionDiv;
}

const appendQuestions = (container, questions) => {
  questions.forEach((questionObj) => {
    container.appendChild(createQuestionItem(questionObj));
  })
}

window.onload = () => {
  // Chamada de teste
  appendQuestions( document.querySelector('#question-container'), [
    {
      question: 'hey?',
      answers: {
        a: 'hey',
        b: 'hello',
        c: null
      },
      correct_answers: {
        a: 'true',
        b: 'false',
        c: 'false'
      } 
    }
  ]);
}


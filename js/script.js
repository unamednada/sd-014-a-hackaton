// Make the function fetch 

// const fetch = require('node-fetch');

// Função que faz a requisição para a API 
const fetchQuiz = async (params) => {
  const url = 'https://quizapi.io/api/v1/questions?apiKey=Sv36yp6PpNiHdkVuzwgj6XSswZTUPlrKoh7P6KZH';
  let endpoint = url;
  // Verifica se há parametros a serem acrescentados
  if (params.category) endpoint += `&category=${params.category}`;
  if (params.difficulty) endpoint += `&difficulty=${params.difficulty}`;
  if (params.limit) endpoint += `&limit=${params.limit}`;
  // faz a reuisição da API
  const getQuestions = await fetch(endpoint);
  // trata os dados convertendo em ObjectJson
  const responseQuestions = await getQuestions.json();
  return responseQuestions;
};

// Create createQuestionItem

const createQuestionItem = ({ question, answers, correct_answers }) => {
  const questionDiv = document.createElement('div');
  // Somente aceita respostas válidas
  const validAnswers = Object.values(answers).filter((answer) => answer !== null);

  questionDiv.innerHTML = `<h2 class="question">${question}</h2>`;
  // Itera por todas as respostas válidas e verifica se é a correta para então acrescentar o elemeto à questionDiv
  validAnswers.forEach((answer, index) => {
    // Problemas quando as respostas são tags HTML - Modificar forma de acrescentar li à questionDiv !!!
    if (Object.values(correct_answers)[index] === 'true') questionDiv.innerHTML += `<li class="correct answer">${answer}</li>`;
    else questionDiv.innerHTML += `<li class="answer">${answer}</li>`
  });
  questionDiv.className = "question-div";
  // Console.log de teste
  console.log(questionDiv);

  return questionDiv;
}

// Create appendQuestions

const appendQuestions = (container, questions) => {
  questions.forEach((questionObj) => {
    container.appendChild(createQuestionItem(questionObj));
  })
}

// Create integration function

const CreateQuiz = async () => {
  //Aqui vamos pegar os valores dos parametros, se houver e chamar as funções necessárias para criar o quiz
  const params = {
    category: 'sql',
    limit: '10'
  }

  const questions = await fetchQuiz(params);
  appendQuestions(document.querySelector('#question-container'), questions);
}

window.onload = async () => {
  await CreateQuiz();
}


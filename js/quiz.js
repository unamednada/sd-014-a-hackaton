const questionContainer = document.querySelector('#question-container');
const filterBtn = document.querySelector('#filter-btn');
const randomBtn = document.querySelector('#random-btn');
const player = localStorage.getItem('player');
  
let correct = 0;

const getParams = () => {
  let params = {};
  if (document.querySelector('[name="select-category"]:checked')) {
    params['category'] = document.querySelector('[name="select-category"]:checked').value;
  }
  if (document.querySelector('#select-difficulty').value !== "null") {
    params['difficulty'] = document.querySelector('#select-difficulty').value;
  }
  if (document.querySelector('#select-limit').value !== "null") {
    params['limit'] = document.querySelector('#select-limit').value;
  } else params['limit'] = '10';
  return params;
}

// Make the function fetch 

// const fetch = require('node-fetch');

// const confirmFilter = document.querySelector('#create-quiz');

// Função que faz a requisição para a API 
const fetchQuiz = async (params = {}) => {
  const url = 'https://quizapi.io/api/v1/questions?apiKey=Sv36yp6PpNiHdkVuzwgj6XSswZTUPlrKoh7P6KZH';
  let endpoint = url;
  // Verifica se há parametros a serem acrescentados
  if (params.category) endpoint += `&category=${params.category}`;
  if (params.difficulty) endpoint += `&difficulty=${params.difficulty}`;
  if (params.limit) endpoint += `&limit=${params.limit}`;
  // faz a requisição da API
  try {
    const getQuestions = await fetch(endpoint);
    const responseQuestions = await getQuestions.json();
    return responseQuestions;
  } catch (error) {
    console.log(error);
  }
};

// Create createQuestionItem

const createQuestionItem = ({ question, answers, correct_answers }) => {
  const questionDiv = document.createElement('div');
  // Somente aceita respostas válidas
  const validAnswers = Object.values(answers).filter((answer) => answer !== null);

  questionDiv.innerHTML = `<h2 class="question">${question}</h2>`;
  // Itera por todas as respostas válidas e verifica se é a correta para então acrescentar o elemeto à questionDiv
  validAnswers.forEach((answer, index) => {
    const currentAnswer = document.createElement('li');
    currentAnswer.innerText = answer;
    currentAnswer.classList.add('answer');
    if (Object.values(correct_answers)[index] === 'true') currentAnswer.classList.add('correct');
    questionDiv.appendChild(currentAnswer);
  });
  questionDiv.className = "question-div";
  questionDiv.addEventListener('click', countAnswers);
  return questionDiv;
}

// Create appendQuestions

const appendQuestions = (container, questions) => {
  questions.forEach((questionObj) => {
    container.appendChild(createQuestionItem(questionObj));
  })
}

// Create integration function

const createQuiz = async () => {
  //Aqui vamos pegar os valores dos parametros, se houver e chamar as funções necessárias para criar o quiz
  const params = getParams();

  try {
    const questions = await fetchQuiz(params);
    appendQuestions(questionContainer, questions);
  } catch (error) {
    console.log(error);
  }
}

const randomQuiz = async () => {
  try {
    const questions = await fetchQuiz({ limit: '10' });
    appendQuestions(questionContainer, questions);
  } catch (error) {
    console.log(error);
  }
}

const nextQuestion = () => {
  const currentHidden = document.querySelector('.show');
  currentHidden.classList.toggle('show');
  if (currentHidden.nextElementSibling) currentHidden.nextElementSibling.classList.toggle('show');
  else window.alert('FIM DE JOGO!');
  console.log(`Correct answers: ${correct}`);
}

const countAnswers = (event) => {
  const selected = event.target;
  if (Array.from(selected.classList).includes('correct')) correct += 1;
  nextQuestion();
}

const showPlayer = (name) => {
  document.querySelector('#player-name').innerText = name;
  localStorage.removeItem('player');
}

// Linhas comentadas para não dar erro no node

window.onload = async () => {

  showPlayer(player);

  filterBtn.addEventListener('click', async () => {
    questionContainer.innerHTML = '';
    await createQuiz();
    questionContainer.firstElementChild.classList.toggle('show');
    correct = 0;
  })

  randomBtn.addEventListener('click', async () => {
    questionContainer.innerHTML = '';
    await randomQuiz();
    questionContainer.firstElementChild.classList.toggle('show');
    correct = 0;
  })

}

// module.exports = {
//   fetchQuiz
// }

const fetch = require('node-fetch');
// Função que faz a requisição para a API 
// category, dificult, limit
const fetchQuiz = async (category, difficulty, limit) => {
  // faz a reuisição da API com os parametros
  const getQuestions = await fetch(`https://quizapi.io/api/v1/questions?apiKey=Sv36yp6PpNiHdkVuzwgj6XSswZTUPlrKoh7P6KZH&category=${category}difficulty=${difficulty}&limit=${limit}`);
  // trata os dados convertendo em ObjectJson
  const responseQuestions = await getQuestions.json();
};

console.log(fetchQuiz());
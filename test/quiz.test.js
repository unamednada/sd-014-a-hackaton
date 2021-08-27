jest.mock('node-fetch');
const fetch = require('node-fetch');
const quiz = require('../js/quiz.js');

describe ('Testa se a função fetchQuiz', () => {

  const mockReturn = [{
    question: 'What is the correct way to add 1 to the $count variable?',
    answers: {
      a: '++count',
      b: 'count++',
      c: '$count =+1',
      d: '$count++;',
      e: null,
      f: null
    },
    correct_answers: {
      a:'false',
      b: 'false',
      c: 'false',
      d: 'true',
      e: 'false',
      f: 'false'
    }
  }];

  fetch.mockImplementation(async (endpoint) => ({
    json: async () => mockReturn
  }));

  it('retorna um array ao ser chamada sem parâmetros', async () => {
    expect.assertions(3);
    await expect(quiz.fetchQuiz()).resolves.toEqual(mockReturn);
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledTimes(1);
  })

  it('retorna um array ao ser chamada com parâmetros válidos', async () => {
    expect.assertions(5);
    await expect(quiz.fetchQuiz({ category: 'linux' })).resolves.toEqual(mockReturn);
    await expect(quiz.fetchQuiz({ category: 'linux', difficulty: 'hard' })).resolves.toEqual(mockReturn);
    await expect(quiz.fetchQuiz({ difficulty: 'easy', limit: '10' })).resolves.toEqual(mockReturn);
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledTimes(4);
  })
});

describe('Testa se a função populateAnswers', () => {

  //mockar tudo o que depende do objeto document antes de testar

  quiz.populateAnswers = jest.fn((array, div, key) => {
    for (let i = 0; i < array.length; i += 1) {
      const answer = array[i];
      const currentAnswer = {
        innerText: answer,
        classList: ['answer']
      }
      if (Object.values(key)[i] === 'true') currentAnswer.classList.push('correct');
      div.push(currentAnswer);
    }
  })

  it('', () => {

  })

})

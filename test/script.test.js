jest.mock('node-fetch');
const fetch = require('node-fetch');
const script = require('../js/script.js');

describe ('Testa se a função fetchQuiz', () => {

  fetch.mockImplementation(async (endpoint) => ({
    json: async () =>
    [{
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
    }]
  }));

  it('retorna um array ao ser chamada sem parâmetros', async () => {
    await expect(script.fetchQuiz()).resolves.toEqual([{
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
    }]);
  })
})

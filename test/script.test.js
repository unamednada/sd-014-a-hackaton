const fetch = require('node-fetch');
const script = require('../js/script.js');


const mockReturn = {
  json: async () =>
  ([{
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
  }])
};

jest.mock('node-fetch');
fetch.mockReturnValue(mockReturn);

describe ('Testa se a função fetchQuiz', () => {

  it('retorna um array ao ser chamada sem parâmetros', async () => {
    expect(script.fetchQuiz()).resolves.toEqual([{
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

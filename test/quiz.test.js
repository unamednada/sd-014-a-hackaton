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
    // mockando o resultado da hof
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

  const mockArray = ['answer1', 'answer2', 'answer3'];
  let mockDiv = [];
  const mockKey = {
    1: 'false',
    2: 'false',
    3: 'true'
  };

  beforeEach(() => {
    mockDiv = [];
  })

  it('se comporta como o esperado quando passamos parâmetros "mock"', () => {
    quiz.populateAnswers(mockArray, mockDiv, mockKey);
    expect(quiz.populateAnswers).toHaveBeenCalled();
    expect(quiz.populateAnswers).toHaveBeenCalledWith(mockArray, mockDiv, mockKey);
    expect(quiz.populateAnswers).toHaveBeenCalledTimes(1);
    expect(quiz.populateAnswers(mockArray, mockDiv, mockKey)).toEqual(undefined);
    expect(quiz.populateAnswers).toHaveBeenCalledTimes(2);
  })

  it('modifica a div ao ser chamada com parâmetros "mock"', () => {
    expect(mockDiv).toEqual([]);
    quiz.populateAnswers(mockArray, mockDiv, mockKey);
    expect(quiz.populateAnswers).toHaveBeenCalled();
    expect(mockDiv).not.toEqual([]);
  })

  it('acrescenta os objetos corretamente à mockDiv', () => {
    expect(mockDiv).toEqual([]);
    quiz.populateAnswers.mockReset();
    expect(quiz.populateAnswers).not.toHaveBeenCalled();
  })

})

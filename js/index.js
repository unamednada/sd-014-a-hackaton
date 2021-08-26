const getPlayer = () => {
  return document.querySelector('#player').value;
}


const quizBtn = document.querySelector('#quiz');


quizBtn.addEventListener('click', () => {
  localStorage.setItem('player', getPlayer());
  window.location.replace('./quiz.html');
})
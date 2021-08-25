# Tryvia

Este é o repositório de Gustavo Dias, Flávio Pires e Ilan Aragão.

Aqui será desenvolvido um projeto bônus ao final do módulo de fundamentos no curso de WebDev na Trybe!

## As regras do projeto são:

- O projeto deve ser feito em grupos de 2 a 4 pessoas
- O tema fica a critério do grupo, com base nos requisitos abaixo
- Vocês terão total autonomia para montarem os grupos
- Você que tem mais entrosamento com a turma, ajude aquelas pessoas que ainda não se entrosaram e ainda estão tímidas a encontrarem grupos :wink:

## Requisitos obrigatórios:

- Utilizar uma API externa. (Sugestão: dêem uma olhada nessa lista).
- Utilizar funções HoF no projeto.
- Deve existir alguma(s) manipulação(ões) do DOM a partir de um ação do usuário usando o addEventListener em algum(ns) elemento(s) do HTML.
- Todas as HoF’s utilizadas no projeto devem ter, pelo menos, 1 teste de validação usando o Jest.
- O código deve estar no GitHub de vocês.

## Bônus:

- Utilizar um framework CSS.
- Utilizar uma API que usa APIKey para acesso

## Critérios de avaliação

- Criatividade
- Inovação
- Aplicabilidade
- Código

## Nosso projeto

Decidimos utilizar a API https://quizapi.io/ para desenvolver uma página interativa com quizzes sobre tecnologia.

## Checklist

### 1 Criar o index.html estático:
	- [X]. header com logo e título;
	- [X]. main com descrição e input para nome; 
	- [X]. footer com about-us: linkedin e github do grupo;
### 2 Criar o estilo para o index.html:
	- [x]. Utilizar bootstrap ou outro framework;
	- [x]. Utilizar o coolors.co ou outro site para paleta de cores;
	- [x]. Desktop only;
### 3 Criar o quiz.html dinâmico:
	- [X]. header com logo e título – igual ao index.html;
	- [X]. subtitulo de saudação, instruções, selectors de tema e dificuldade, botão de submit;
	- [I-F]. container de perguntas com contador de perguntas e percentagem de conclusão – obs pesquisar barra de progresso DOM;
	- [X]. footer igual ao index.html;
### 4 Criar o estilo para o quiz.html:
	- [I-F]. Mesmas regras para o index.html;
### 5 Criar funções assíncronas básicas:
	- [X]. fetchQuiz(params) – responsável por retornar o quiz já filtrado;
	- [X]. createQuestionItem – responsável por criar uma div para a questão dentro do container de perguntas;
	- [X]. appendQuestions – responsável por acrescentar;
	- [X]. integrar funções fetchQuiz e appendQuestions para renderizar perguntas na tela;
	- [X]. nextQuestion – responsável por trocar o display da pergunta atual;
	- [G]. countAnswers – responsável por verificar a resposta e acrescentar ao contador;
	- [ ]. generateResult – responsável por verificar total de acertos e selecionar mensagem apropriada;
	- [ ]. renderResult – responsável por criar elemento DOM resultado * usando modal * contendo nome, mensagem e total de acertos e botão de refazer o teste;
### 6 Criar testes para as funções:
	- [X]. Testar fetchQuiz;
### 7 Criar logo, escolher estilo geral do site:
	- [X]. Criar logo;
	- [X]. Escolher fonte;
	- [X]. Paleta de cores;

### MERGE INTO PRODUCTION, NEVER MAIN 

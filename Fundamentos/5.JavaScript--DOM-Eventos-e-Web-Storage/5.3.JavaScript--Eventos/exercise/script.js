function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function buttonCreator(string) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const botao = document.createElement('button');
  botao.id = 'btn-holiday';
  botao.innerHTML = string;
  buttonsContainer.appendChild(botao);
}

function displayHolidays(){
  const btnHoliday = document.getElementById('btn-holiday');
  let holidays = document.getElementsByClassName('holiday');

  btnHoliday.addEventListener('click', function () {
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === 'white') {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holidays[index].style.backgroundColor = 'white';
      }
    }
  });
}

function buttonCreatorFriday(string) {
  let buttonsContainer = document.querySelector('.buttons-container');
  const botao = document.createElement('button');
  botao.id = 'btn-friday';
  botao.innerHTML = string;
  buttonsContainer.appendChild(botao);
}

function displayFridays() {
  const btnFriday = document.getElementById('btn-friday');
  let fridays = document.getElementsByClassName('friday');

  btnFriday.addEventListener('click', function () {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].style.backgroundColor === 'grey') {
        fridays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        fridays[index].style.backgroundColor = 'grey';
      }
    }
  });
}


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const ulFromDays = document.getElementById('days');

for (let key of dezDaysList) {
  const a = document.createElement('li');
  a.classList = 'day';
  a.innerHTML = key;

  if (key === 24 || key === 25 || key === 31) {
    a.classList += ' holiday';
  }
  
  if (key === 4 || key === 11 || key === 18 || key === 25) {
    a.classList += ' friday';
  }
  ulFromDays.appendChild(a);
}

buttonCreator('Feriados');

displayHolidays();

buttonCreatorFriday('Sexta-feira');

displayFridays();

function zoomIn(evt) {
  evt.target.style.fontSize = '30px';
}

function zoomOut(evt) {
  evt.target.style.fontSize = '20px';
}

ulFromDays.addEventListener('mouseover', zoomIn);

ulFromDays.addEventListener('mouseout', zoomOut);

function newTask(string) {
  const newInputBox = document.createElement('span');
  newInputBox.innerHTML = string;
  const father = document.getElementsByClassName('my-tasks')[0];
  father.appendChild(newInputBox);
}

function subtitleColor(string) {
  const newColor = document.createElement('div');
  newColor.classList = 'task';
  newColor.style.backgroundColor = string;
  const father = document.getElementsByClassName('my-tasks')[0];
  father.appendChild(newColor);
}

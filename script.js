const anchients = document.querySelectorAll('.ancient-item');
// console.log(anchients);

const azathoth = [
  1, 2, 1,
  2, 3, 1,
  2, 4, 0
];

const cthulhu = [
  0, 2, 2,
  1, 3, 0,
  3, 4, 0
];

const iogsothoth = [
  0, 2, 1,
  2, 3, 1,
  3, 4, 0
];

const shubniggurath = [
  1, 2, 1,
  3, 2, 1,
  2, 4, 0
];

function setAnchientScheme(anchient) {
  const cardItems = document.querySelectorAll('.card-item');
  cardItems.forEach((cardItem, index) => {
    cardItem.innerHTML = anchient[index];
  });
}

let deck = [];



anchients.forEach((anchient) => {
  anchient.onclick = function() {
    if (anchient.innerHTML === 'Azathoth') {
      setAnchientScheme(azathoth);
      document.querySelector('.active').classList.remove('active');
      anchient.classList.add('active');
      // getCardArr(azathoth);
      deck = getCardArr(azathoth);
      // cutStages(azathoth);
      // const setofCards = getCardArr(azathoth);
      // console.log(setofCards);
    } else if (anchient.innerHTML === 'Cthulthu') {
      setAnchientScheme(cthulhu);
      document.querySelector('.active').classList.remove('active');
      anchient.classList.add('active');
      deck = getCardArr(cthulhu);
    } else if (anchient.innerHTML === 'IogSothoth') {
      setAnchientScheme(iogsothoth);
      document.querySelector('.active').classList.remove('active');
      anchient.classList.add('active');
      deck = getCardArr(iogsothoth);
    } else if (anchient.innerHTML === 'ShubNiggurath') {
      setAnchientScheme(shubniggurath);
      document.querySelector('.active').classList.remove('active');
      anchient.classList.add('active');
      deck = getCardArr(shubniggurath);
    }
  }
});

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getCardArr(anchient) {
  const totalGreen = anchient[0] + anchient[3] + anchient[6];
  const totalBrown = anchient[1] + anchient[4] + anchient[7];
  const totalBlue = anchient[2] + anchient[5] + anchient[8];

  let arr = [];
  let arrUnique = [];
  let initCardArr = [];
  let arrElem;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  function fillArr (letter, start, end, number) {
    while (arr.length < number) {
      arrElem = getRandomIntInclusive(start, end);
      if (!arr.includes(arrElem)) {
        arr.push(arrElem);
        arrUnique.push(`${letter}${arrElem}`);
      }
    }

    initCardArr.push(...arrUnique); 
    arr.length = 0;
    arrUnique.length = 0;
    return initCardArr 
  }

  fillArr('green', 1, 18, totalGreen);
  fillArr('brown', 1, 21, totalBrown);
  fillArr('blue', 1, 12, totalBlue);

  console.log(initCardArr);

  let colorGreenArr = [];
  let colorBrownArr = [];
  let colorBlueArr = [];

  initCardArr.forEach((card) => {
    if (card.startsWith('blue')) {
      colorBlueArr.push(card);
    } else if (card.startsWith('brown')) {
      colorBrownArr.push(card);
    } else if (card.startsWith('green')) {
      colorGreenArr.push(card);
    }
  });

  // console.log(colorGreenArr);
  // console.log(colorBrownArr);
  // console.log(colorBlueArr);

  let greenArrSh = shuffle(colorGreenArr);
  let brownArrSh = shuffle(colorBrownArr);
  let blueArrSh = shuffle(colorBlueArr);

  // console.log(greenArrSh);
  // console.log(brownArrSh);
  // console.log(blueArrSh);

  
  let firstStage;
  let secondStage;
  let thirdStage;
  cutStages();

  
  let stagedArr = firstStage.concat(secondStage, thirdStage);
  // console.log(stagedArr);
  let stagedArrSh = shuffle(firstStage).concat(shuffle(secondStage), shuffle(thirdStage));
  // console.log(stagedArrSh);

  function cutStages() {
    firstStage = greenArrSh.splice(0, anchient[0]).concat(brownArrSh.splice(0, anchient[1]), blueArrSh.splice(0, anchient[2]));
    secondStage = greenArrSh.splice(0, anchient[3]).concat(brownArrSh.splice(0, anchient[4]), blueArrSh.splice(0, anchient[5]));
    thirdStage= greenArrSh.concat(brownArrSh, blueArrSh);
  }

  // console.log(firstStage);
  // console.log(secondStage);
  // console.log(thirdStage);

  return stagedArrSh;
// return initCardArr;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array
}

const messBtn = document.querySelector('.mess-btn');

messBtn.onclick = function() {
  console.log(deck);
}

const cardDeck = document.querySelector('.card-deck');
cardDeck.onclick = function () {
  // console.log('Show card');
  // console.log(deck.shift());
  showCard();
}



// ['green7', 'blue11', 'brown12', 'brown4', 'brown10', 'brown8', 'brown18', 'blue12', 'green12', 'green11', 'brown14', 'brown5', 'brown15', 'green5', 'green13', 'brown20']

// let randomNum = (getRandomNum(1, 21));




function showCard() {
  let color = '';
  let number;
  
  const cardFlipped = document.querySelector('.card-deck-flipped')
  const bgImage = new Image();

  let card = deck.shift();
  if (card !== undefined) {
    if(card.startsWith('green')) {
    color = 'green';
    number = card.substring(5, card.length);
    countGreen();
    } else if (card.startsWith('brown')) {
      color = 'brown';
      number = card.substring(5, card.length);
      countBrown();
    } else if (card.startsWith('blue')) {
      color = 'blue';
      number = card.substring(4, card.length);
      countBlue();
    }
  } else {
    alert ('Карты в колоде закончились, перезагрузите страницу или выберете Древнего, чтобы начать заново');
    cardFlipped.style.backgroundImage = '';
  }
  
  
  let colorNum = color + number;

  bgImage.src = `./assets/MythicCards/${color}/${colorNum}.jpg`;
  bgImage.onload = () => {
    cardFlipped.style.backgroundImage = `url(${bgImage.src})`;
  }

  console.log(colorNum);
}

const greenCounters = document.querySelectorAll('.green');
const brownCounters = document.querySelectorAll('.brown');
const blueCounters = document.querySelectorAll('.blue');


function countGreen() {
  if (+greenCounters[0].textContent != 0) {
    greenCounters[0].textContent = +greenCounters[0].textContent - 1;
  } else if (+greenCounters[0].textContent == 0 && +greenCounters[1].textContent != 0) {
    greenCounters[1].textContent = +greenCounters[1].textContent - 1;
  } else if (+greenCounters[0].textContent == 0 && +greenCounters[1].textContent == 0 && +greenCounters[2].textContent != 0) {
    greenCounters[2].textContent = +greenCounters[2].textContent - 1;
  }
}

function countBrown() {
  if (+brownCounters[0].textContent != 0) {
    brownCounters[0].textContent = +brownCounters[0].textContent - 1;
  } else if (+brownCounters[0].textContent == 0 && +brownCounters[1].textContent != 0) {
    brownCounters[1].textContent = +brownCounters[1].textContent - 1;
  } else if (+brownCounters[0].textContent == 0 && +brownCounters[1].textContent == 0 && +brownCounters[2].textContent != 0) {
    brownCounters[2].textContent = +brownCounters[2].textContent - 1;
  }
}

function countBlue() {
  if (+blueCounters[0].textContent != 0) {
    blueCounters[0].textContent = +blueCounters[0].textContent - 1;
  } else if (+blueCounters[0].textContent == 0 && +blueCounters[1].textContent != 0) {
    blueCounters[1].textContent = +blueCounters[1].textContent - 1;
  } else if (+blueCounters[0].textContent == 0 && +blueCounters[1].textContent == 0 && +blueCounters[2].textContent != 0) {
    blueCounters[2].textContent = +blueCounters[2].textContent - 1;
  }
}



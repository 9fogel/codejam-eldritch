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

anchients.forEach((anchient) => {
  anchient.onclick = function() {
    if (anchient.innerHTML === 'Azathoth') {
      setAnchientScheme(azathoth);
      document.querySelector('.active').classList.remove('active');
      anchient.classList.add('active');
      getCardArr(azathoth);
      // const setofCards = getCardArr(azathoth);
      // console.log(setofCards);
    } else if (anchient.innerHTML === 'Cthulthu') {
      setAnchientScheme(cthulhu);
      document.querySelector('.active').classList.remove('active');
      anchient.classList.add('active');
      getCardArr(cthulhu);
    } else if (anchient.innerHTML === 'IogSothoth') {
      setAnchientScheme(iogsothoth);
      document.querySelector('.active').classList.remove('active');
      anchient.classList.add('active');
      getCardArr(iogsothoth);
    } else if (anchient.innerHTML === 'ShubNiggurath') {
      setAnchientScheme(shubniggurath);
      document.querySelector('.active').classList.remove('active');
      anchient.classList.add('active');
      getCardArr(shubniggurath);
    }
  }
});

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// function totalCards(arr) {
//   let GBBTTotalArr = [];
//   let GBBTotalObj = {};
//   const totalGreen = arr[0] + arr[3] + arr[6];
//   GBBTTotalArr.push(totalGreen);
//   GBBTotalObj.green = totalGreen;
//   // console.log(`total green - ${totalGreen}`);
//   const totalBrown = arr[1] + arr[4] + arr[7];
//   GBBTTotalArr.push(totalBrown);
//   GBBTotalObj.brown = totalBrown;
//   // console.log(`total green - ${totalBrown}`);
//   const totalBlue = arr[2] + arr[5] + arr[8];
//   GBBTTotalArr.push(totalBlue);
//   GBBTotalObj.blue = totalBlue;
//   // console.log(`total green - ${totalBlue}`);
//   // console.log(GBBTTotalArr);
//   // console.log(GBBTotalObj);
//   return GBBTotalObj;
// }


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
    
}

fillArr('green', 1, 18, totalGreen);
fillArr('brown', 1, 21, totalBrown);
fillArr('blue', 1, 12, totalBlue);

console.log(initCardArr);
return initCardArr;
}






// let randomNum = (getRandomNum(1, 21));

const color = 'blue';
const colorNum = color + 8;

function showCard() {
  const card = document.querySelector('.card-deck-flipped')
  const bgImage = new Image();
  bgImage.src = `./assets/MythicCards/${color}/${colorNum}.jpg`;
  bgImage.onload = () => {
    card.style.backgroundImage = `url(${bgImage.src})`;
  }
}

showCard();



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
      // console.log('Azathoth');
    } else if (anchient.innerHTML === 'Cthulthu') {
      setAnchientScheme(cthulhu);
      document.querySelector('.active').classList.remove('active');
      anchient.classList.add('active');
      // console.log('Cthulthu');
    } else if (anchient.innerHTML === 'IogSothoth') {
      setAnchientScheme(iogsothoth);
      document.querySelector('.active').classList.remove('active');
      anchient.classList.add('active');
      // console.log('IogSothoth');
    } else if (anchient.innerHTML === 'ShubNiggurath') {
      setAnchientScheme(shubniggurath);
      document.querySelector('.active').classList.remove('active');
      anchient.classList.add('active');
      // console.log('ShubNiggurath');
    }
  }
});



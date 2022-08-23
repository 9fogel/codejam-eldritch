// const ancientsData = [
//   {
//     id: 'azathoth',
//     name: 'azathoth',
//     cardFace: Ancients.azathoth,
//     firstStage: {
//       greenCards: 1,
//       blueCards: 1,
//       brownCards: 2,
//     },
//     secondStage: {
//       greenCards: 2,
//       blueCards: 1,
//       brownCards: 3,
//     },
//     thirdStage: {
//       greenCards: 2,
//       blueCards: 0,
//       brownCards: 4,
//     },
//   },
//   {
//     id: 'cthulhu',
//     name: 'cthulhu',
//     cardFace: Ancients.cthulhu,
//     firstStage: {
//       greenCards: 0,
//       blueCards: 2,
//       brownCards: 2,
//     },
//     secondStage: {
//       greenCards: 1,
//       blueCards: 0,
//       brownCards: 3,
//     },
//     thirdStage: {
//       greenCards: 3,
//       blueCards: 0,
//       brownCards: 4,
//     },
//   },
//   {
//     id: 'iogSothoth',
//     name: 'iogSothoth',
//     cardFace: Ancients.iogSothoth,
//     firstStage: {
//       greenCards: 0,
//       blueCards: 1,
//       brownCards: 2,
//     },
//     secondStage: {
//       greenCards: 2,
//       blueCards: 1,
//       brownCards: 3,
//     },
//     thirdStage: {
//       greenCards: 3,
//       blueCards: 0,
//       brownCards: 4,
//     },
//   },
//   {
//     id: 'shubNiggurath',
//     name: 'shubNiggurath',
//     cardFace: Ancients.shubNiggurath,
//     firstStage: {
//       greenCards: 1,
//       blueCards: 1,
//       brownCards: 2,
//     },
//     secondStage: {
//       greenCards: 3,
//       blueCards: 1,
//       brownCards: 2,
//     },
//     thirdStage: {
//       greenCards: 2,
//       blueCards: 0,
//       brownCards: 4,
//     },
//   },
// ]

const anchients = document.querySelectorAll('.ancient-item');
console.log(anchients);

anchients.forEach((anchient) => {
  anchient.onclick = function() {
    if (anchient.innerHTML === 'Azathoth') {
      console.log('Azathoth');
    } else if (anchient.innerHTML === 'Cthulthu') {
      console.log('Cthulthu');
    } else if (anchient.innerHTML === 'IogSothoth') {
      console.log('IogSothoth');
    } else if (anchient.innerHTML === 'ShubNiggurath') {
      console.log('ShubNiggurath');
    }
  }
});

// function setAnchientScheme 

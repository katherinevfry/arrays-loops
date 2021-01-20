// for (let i = 0; i <= 15; i++) {
//   console.log(i);
// }

// const functionForTad = () => {
//   for (let i = 0; i <= 15; i++) {
//     console.log(i)
//   }
// }

// functionForTad();


// ****ARRAYS WITH LOOPS *****

// const ec14Instructors = ['Aja', 'Trinity', 'Dr.T', 'Discussion Tickets'];

// for (let i = 0; i < ec14Instructors.length; i++) {
//   console.log(ec14Instructors[i]) }
 // This will log each string in the above array individually starting with the 0th index, stopping at the length of the array, and increasing by one each loop

 //****ARRAYS LOOPS AND FUNCTIONS *****

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const colorLoop = () => {
  let domString = '';

  for (let i = 0; i < colors.length; i++) {
    domString += `<h1>${colors[i]}</h1>`
  }

  console.log(domString);

}

// colorLoop();


const instructors = [
  {first: 'Trinity', last: 'Christina'},
  {first: 'Aja', last: 'Washington'},
  {first: 'Teresa', last: 'Vasquez'},
]

const nameLoop = () => {
  let domString = '';

  for (let i = 0; i < instructors.length; i++) {
    domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`
  }
  console.log(domString)
}

nameLoop();

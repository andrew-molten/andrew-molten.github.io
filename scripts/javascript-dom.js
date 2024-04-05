//
//

// function openUp() {
//   turnOnLights()
//   putMusicOn()
//   setUpCashRegister()
//   flipSignToOpen()
//   unlockFrontDoor()
// }

// openUp()

let lawn = [5, 5, 6, 5, 'lawn chair', 5, 5, 7, 7, 5, 'clothes peg']

const lawnMower = {
  catcher: 0,
  petrolTank: 2,
}

function mowLawns() {
  checkPetrol()
  // getLawnmowerOut()
  // startLawnmower()
  // pushLawnMower(lawn)
}

function checkPetrol() {
  lawnMower.petrolTank < 3 ? fillLawnMower() : ''
}

function fillLawnMower() {
  // getPetrolCan()
  // openLawnmowerCap()
  // Pour petrol in
  for (petrolPoured = 0; lawnMower.petrolTank < 10; petrolPoured++) {
    lawnMower.petrolTank++
    console.log('Petrol Tank is at ' + lawnMower.petrolTank)
  }
  // replaceCap()
}

function pushLawnMower() {
  console.log('Mowing lawns')
}
mowLawns()

// document.getElementsByClassName('myClassName')

// document.querySelector('#getMeByMyId').onclick = myFunction

document.querySelector('#eventImage').onclick = (event) => console.log(event)

myArray = ['dog', 'rabbit', 'pig', 'dinosaur']

console.log(myArray[0]) // returns "dog"
console.log(myArray[1]) // returns "rabbit"
console.log(myArray[2]) // returns "pig"
console.log(myArray[3]) // returns "dinosaur"

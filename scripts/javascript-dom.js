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
  checkPetrol(lawnMower)
  getLawnmowerOut()
  startLawnmower()
  pushLawnMower(lawn)
}

function checkPetrol(lawnMower) {
  lawnMower.petrolTank < 3 ? fillLawnMower() : ''
}

function fillLawnMower(lawnMower) {
  getPetrolCan()
  openLawnmowerCap()
  // Pour petrol in
  for (petrolPoured = 0; lawnMower.petrolTank < 10; petrolPoured++) {
    lawnMower.petrolTank++
  }
  replaceCap()
}

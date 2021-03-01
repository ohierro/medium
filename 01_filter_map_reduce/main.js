var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 21,
    vehicleType: 'starfighter',
    missiles: 10,
    fly: 9,
    shoot: 7,
    protect: 6,
    force: 0
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20,
    vehicleType: 'battle-ship',
    missiles: 5,
    fly: 4,
    shoot: 9,
    protect: 8,
    force: 0
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30,
    vehicleType: 'transport',
    missiles: 9,
    fly: 6,
    shoot: 6,
    protect: 8,
    force: 0
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35,
    vehicleType: 'starfighter',
    missiles: 7,
    fly: 6,
    shoot: 6,
    protect: 8,
    force: 0
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35,
    vehicleType: 'battle-cruiser',
    missiles: 17,
    fly: 4,
    shoot: 9,
    protect: 8,
    force: 0
  }
];

function onlyRebels() {
  return pilots.filter(pilot => pilot.faction === 'Rebels')
}

function nameList() {
  return pilots.map(p => p.name)
}

function howManyMissiles() {
  return pilots.reduce((prev, current, index) => {
    return prev + current.missiles
  }, 0)
}

function winEmpire() {
  return pilots.filter(p => p.faction === 'Rebels') // Sólo los pilotos de la alianza
                .map(p => {                         // Devolvemos el típo de vehiculo y
                  return {                          // el 'power' total
                    vehicleType: p.vehicleType,
                    powers: (p.fly + p.shoot + p.protect + p.force * 10)
                  }
                })
                .reduce( (prev, current, index) => { // sumamos todo el 'power' de nuestos
                  return prev + current.powers       // pilotos
                }, 0)
}

console.log(`Sólo pilotos rebeldes ${JSON.stringify(onlyRebels())}`)

console.log(`Nombres de los pilotos ${nameList()}`)

console.log(`Cuantos misiles tenemos? ${howManyMissiles()}`)

console.log(`Cúal es nuestro poder de ataque? ${JSON.stringify(winEmpire())}`)
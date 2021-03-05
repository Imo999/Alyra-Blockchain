let isRainy = true
let temperature = -15
let clothes = '' + 'splip kangourou, Chaussette, Tee-Shirt, '
let tornade = false


while (!tornade) {

  if (isRainy) {
    clothes += 'Parapluie, '

  } if (temperature <= 0) {
    clothes += 'Doudoune, Pull, Pantalon, Moon boots, Bonnet, Echarpe, '

  } else if (temperature < 15) {
    clothes += 'Manteau, Pull, Pantalon, Chaussure, '

  } else if (temperature >= 15 && temperature <= 20) {
    clothes += 'Pull, Pantalon, Baskets, '

  } else {
    clothes += 'Short, Lunette de soleil, Claquette, '
  }


  console.log(`Je vous recommande de porter: ${clothes}`)
  break
}

while (tornade) {
  console.log('HOP HOP HOP on reste sous la couette !!!')
  break
}
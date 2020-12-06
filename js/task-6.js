let input
const numbers = []
let total = 0

while (true) {
  input = prompt("Введи число")

  const notANumber = Number.isNaN(input)

  if (notANumber) {
    alert("Было введено не число, попробуйте еще раз")
    continue
  }

  numbers.push(+input)

  if (input === null) {
    for (let i = 0; i < numbers.length; i += 1) {
      total = total + numbers[i]
    }
    console.log(`Общая сумма чисел равна ${total}`)
    break
  }
}

// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61


// const age_2 = 18;
// const age_3 = 60;

// const checkAge = function(age) {
// if (age < age_2) {
//     console.log("You don't have access cause your age is " + age + " It's less then");
// } else if (age >= age_2 && age < age_3) {
//     console.log("Welcome  !");
// } else if (age > age_3) {
//     console.log("Keep calm and look Culture channel");
// } else {
//     console.log("Technical work");
// }
// }

// checkAge(17)
// checkAge(18)
// checkAge(61)
// checkAge(60)


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// const age_2 = 18;
// const age_3 = 60;

// const checkAge = function(age) {
//     // age = Number(age);
//     // console.log(age);
// if (age && !isNaN(age)) {       //typeof age == 'number'
//       if (age < age_2) {
//       console.log("You don't have access cause your age is " + age + " It's less then");
//       } else if (age >= age_2 && age < age_3) {
//       console.log("Welcome  !");
//       } else if (age > age_3) {
//       console.log("Keep calm and look Culture channel");
//       } else {
//       console.log("Technical work");
// }
// } else console.log("Not an integer value")
// }


// checkAge(17)
// checkAge(18)
// checkAge(61)
// checkAge(60)
// checkAge("dfhdjh")
// checkAge("20")
// checkAge("0")
// checkAge('')

//4***: Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

// index.HTML

const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {
    // age = Number(age);
    // console.log(age);
if (age && !isNaN(age)) {       //typeof age == 'number'
      if (age < age_2) {
      alert("You don't have access cause your age is " + age + " It's less then");
      } else if (age >= age_2 && age < age_3) {
      alert("Welcome  !");
      } else if (age > age_3) {
     alert("Keep calm and look Culture channel");
      } else {
      alert("Technical work");
}
} else alert("Not an integer value")
}

let a = prompt('Enter your age')

checkAge(a)




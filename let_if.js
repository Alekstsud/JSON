let user_name = "Alex"
//закомментить строку ctrl+/
console.log(user_name)

let age = 32
// console.log(age)

let person = user_name + age
// добавить пробел между Alex32 можно так: let person = user_name + " " + age
// console.log(person)

let user_age = 30;
let work_period = 10;
let total_time = user_age + work_period;
// console.log("total_time =", total_time, typeof(total_time))

// неявное приведение типов - строка становится числом и наоборот
// console.log("total_time =" + total_time, typeof("total_time =" + total_time))
// тип данных стал строкой в консоле

let morning = false;
// console.log("morning = ", morning, typeof(morning))

let evening = true;
// console.log("evening = ", evening, typeof(evening))

let apples = 10;
let cherry = 20;
// let compare = apples > cherry;
// console.log("compare =", compare)
// используя сравнение - тип данных boolean
// == - сранение
let compare = apples <= cherry;
console.log("compare =", compare)

// операции ветвления
if (compare) {
    console.log("Compare is", compare)
} else if (apples == 15) {
    console.log("apples ==", compare)
} else {
    console.log("!_Compare is", false)
}




// const promise = new Promise((resolve, reject) => {
//    resolve("hello")
//    reject("bye")
// })

// console.log(promise)

// promise.then((res)=>{
//     console.log(res)
// }).catch((error) => {
//     console.log(error);
// })
  


//   console.log(
//     "%c привіт", 
//     "color: red; font-size: 18px"
//   )
// як стилізувати консоль лог зверху
// const horses = [
//     'Secretariat',
//     'Eclipse',
//     'West Australian',
//     'Flying Fox',
//     'Seabiscuit',
//   ];

// const btn = document.querySelector(".js-start-race")
// const winner = document.querySelector(".js-winner")
// const progress = document.querySelector("js-progress")
// const results = document.querySelector(".js-results-table")

// btn.addEventListener("click", () => {
//     progress.innerHTML = "Заїзд почався"
//     const promiseArr = horses.map(horse => run(horse))
//     Promise.race(promiseArr).then(({horse,time}) => {
//         winner.innerHTML = `🎉 Переможець ${horse}, финишував за ${time} мс часу`
//     })
//     Promise.all(promiseArr).then(() => {
//         progress.innerHTML = "Заїзд закінчився"
//     })
// })





// const promisesArr = horses.map(horse => run(horse))

// console.log(`🤖 Заїзд розпочався, ставки не приймаються!`)

// Promise.race(promisesArr).then(({horse,time})=>console.log(`🎉 Переможець ${horse}, финишував за ${time} мс часу`))

// Promise.all(promisesArr)
// function getRandomTime(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function run (horse) {
//     const time = getRandomTime(1500, 2500)

//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve({horse, time})
//         }, time);
//     })
// }

// run("Pole").then(res=>console.log(res))


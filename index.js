// let ded=new Date("12 feb, 2024 2:46:00").getTime()
// let aj=new Date().getTime()
// let dif=ded-aj;
// let x=setInterval(()=>{
//     let day=Math.floor(dif/(24*60*60*1000))
// console.log(day)
// hour=Math.floor(day*24)
// console.log(hour)

// min=Math.floor(hour*60)
// console.log(min)
// sec=Math.floor(min*60)
// console.log(sec)

// },1000)
// let days=document.querySelector(".days")
// let miniuts=document.querySelector(".miniuts")

// let hours=document.querySelector(".hours")
// let second=document.querySelector(".second")
// let ded = new Date("12 feb, 2024 2:46:00").getTime();
// let x = setInterval(() => {
//     let aj = new Date().getTime();
//     let dif = ded - aj;
//     let day = Math.floor(dif / (1000 * 60 * 60 * 24));
//     let gehnta = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((dif % (1000 * 60)) / 1000);

//     console.log(day + "d " + hours + "h " + minutes + "m " + seconds + "s");
//     days.textContent=day
//     hours.textContent= gehnta
//     miniuts.textContent= minutes 
//     seconds.textContent=second;

//     if (dif < 0) {
//         clearInterval(x);
//         console.log("Countdown finished");
//     }
// }, 1000);
let days = document.querySelector(".days");
let minutes = document.querySelector(".miniuts");
let hours = document.querySelector(".hours");
let seconds = document.querySelector(".second");

let ded = new Date("12 feb, 2024 2:46:00").getTime();
let x = setInterval(() => {
    let aj = new Date().getTime();
    let dif = ded - aj;
    let day = Math.floor(dif / (1000 * 60 * 60 * 24));
    let gehnta = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((dif % (1000 * 60)) / 1000);

    console.log(day + "d " + gehnta + "h " + mins + "m " + secs + "s");
    days.textContent = day;
    hours.textContent = gehnta;
    minutes.textContent = mins;
    seconds.textContent = secs;

    if (dif < 0) {
        clearInterval(x);
        console.log("Countdown finished");
    }
}, 1000);



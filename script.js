const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const clockElement = document.getElementById("clock")
const dayElement = document.getElementById("day")
const dateElement = document.getElementById("date")


function updateClock (){
 let now = new Date();
let hours = String(now.getHours()).padStart(2,"0");
let minutes = String(now.getMinutes()).padStart(2,"0");
let seconds = String(now.getSeconds()).padStart(2,"0");

let time = hours + ":"+ minutes + ":" + seconds;
let currentDate = now.getDate() + " " + months[now.getMonth()]+ " " + now.getFullYear();
let currentDay =days[now.getDay()]
clockElement.innerText = time;
dateElement.innerText = currentDate;
dayElement.innerText=currentDay;
}

updateClock();
setInterval(updateClock,1000);
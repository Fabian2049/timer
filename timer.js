const targetdate = new Date("1 mar 2024");

const t = setInterval(()=>{
    const now = new Date();
    const dist = targetdate - now;
    const day = Math.floor(dist / (1000 * 60 * 60 * 24))
    const hour = Math.floor(dist % (24 * 60 * 60 * 1000)  / (1000 * 60 * 60))
    const min = Math.floor(dist % (60 * 60 * 1000) / (60 * 1000))
    const sec = Math.floor(dist % (60 * 1000) / 1000)

    document.getElementById("days").innerText=day
    document.getElementById("hours").innerText=hour
    document.getElementById("minutes").innerText=min
    document.getElementById("seconds").innerText=sec
},1000)

// why do we write const infront of declared variables

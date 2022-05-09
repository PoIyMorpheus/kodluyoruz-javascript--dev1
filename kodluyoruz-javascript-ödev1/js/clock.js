let username = prompt("Adınızı giriniz.")

document.getElementById("myName").innerHTML = username;

let clock = document.getElementById("myClock")

function showTime(){
    let now = new Date()

    let today;

    switch (now.getDay()) {
        case 0:
            today = "Pazar"
        break;
        case 1:
            today = "Pazartesi"
        break;
        case 2:
            today = "Salı"
        break;
        case 3:
            today = "Çarşamba"
        break;
        case 4:
            today = "Perşembe"
        break;
        case 5:
            today = "Cuma"
        break;
        case 6:
            today = "Cumartesi"
        break;
    }

    let nowAsString = 
    `
    ${now.getHours().toString().padStart(2, '0')} 
    : ${now.getMinutes().toString().padStart(2, '0')} 
    : ${now.getSeconds().toString().padStart(2, '0')}
    ${today}
    `

    

    clock.innerHTML = nowAsString
}

showTime();
setInterval(showTime, 1000);


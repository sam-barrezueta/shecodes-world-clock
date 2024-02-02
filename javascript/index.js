function updateTime() {
    // Guayaquil
    let guayaquilElement = document.querySelector("#guayaquil");
    if(guayaquilElement) {
        let guayaquilDateElement = guayaquilElement.querySelector(".date");

        let guayaquilTimeElement = guayaquilElement.querySelector(".time");
        guayaquilDateElement.innerHTML = moment().tz("America/Guayaquil").format("dddd, D MMMM, YYYY");
        guayaquilTimeElement.innerHTML = moment().tz("America/Guayaquil").format("h:mm:ss [<small>]A[</small]");
    }
   
    //London
    let londonElement = document.querySelector("#london");
    if(londonElement) {
        let londonDateElement = londonElement.querySelector(".date");
        let londonTimeElement = londonElement.querySelector(".time");

        londonDateElement.innerHTML = moment().tz("Europe/London").format("dddd, D MMMM, YYYY");
        londonTimeElement.innerHTML = moment().tz("Europe/London").format("h:mm:ss [<small>]A[</small]");
    }

}

function updateCity(event) {
    let cityTimeZone = event.target.value; 
    if(cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }    
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");

    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
            </div>
            <div>
                <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
                <div class="date">${cityTime.format("dddd, D MMMM, YYYY")}</div>
            </div>
        </div>`;
    
}

updateTime();
setInterval(updateTime,1000);



let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change",updateCity);
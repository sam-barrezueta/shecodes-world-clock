function updateTime() {
    // Guayaquil
    let guayaquilElement = document.querySelector("#guayaquil");
    let guayaquilDateElement = guayaquilElement.querySelector(".date");
    let guayaquilTimeElement = guayaquilElement.querySelector(".time");

    guayaquilDateElement.innerHTML = moment().tz("America/Guayaquil").format("dddd, D MMMM, YYYY")
    guayaquilTimeElement.innerHTML = moment().tz("America/Guayaquil").format("h:mm:ss [<small>]A[</small]");

    //London
    let londonElement = document.querySelector("#london");
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");

    londonDateElement.innerHTML = moment().tz("Europe/London").format("dddd, D MMMM, YYYY");
    londonTimeElement.innerHTML = moment().tz("Europe/London").format("h:mm:ss [<small>]A[</small]");

    //Sydney
    let sydneyElement = document.querySelector("#sydney");
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");

    sydneyDateElement.innerHTML = moment().tz("Australia/Sydney").format("dddd, D MMMM, YYYY");
    sydneyTimeElement.innerHTML = moment().tz("Australia/Sydney").format("h:mm:ss [<small>]A[</small]");
}

updateTime();
setInterval(updateTime,1000);

function updateTime() {
  // Copenhagen
  let copenhagenElement = document.querySelector("#copenhagen");
  if (copenhagenElement) {
    let copenhagenDateElement = copenhagenElement.querySelector(".date");
    let copenhagenTimeElement = copenhagenElement.querySelector(".time");

    let copenhagenTime = moment().tz("Europe/Copenhagen");

    copenhagenDateElement.innerHTML = copenhagenTime.format("MMMM Do, YYYY");
    copenhagenTimeElement.innerHTML = copenhagenTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Seattle
  let seattleElement = document.querySelector("#seattle");
  if (seattleElement) {
    let seattleDateElement = seattleElement.querySelector(".date");
    let seattleTimeElement = seattleElement.querySelector(".time");

    let seattleTime = moment().tz("America/Los_Angeles");

    seattleDateElement.innerHTML = seattleTime.format("MMMM Do, YYYY");
    seattleTimeElement.innerHTML = seattleTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDateElement = melbourneElement.querySelector(".date");
    let melbourneTimeElement = melbourneElement.querySelector(".time");

    let melbourneTime = moment().tz("Australia/Melbourne");

    melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do, YYYY");
    melbourneTimeElement.innerHTML = melbourneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

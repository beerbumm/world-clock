function updateTime() {
  // Copenhagen
  let copenhagenElement = document.querySelector("#copenhagen");
  if (copenhagenElement) {
    let copenghagenDateElement = copenhagenElement.querySelector(".date");
    let copenhagenTimeElement = copenhagenElement.querySelector(".time");

    let copenhagaenTime = moment().tz("Europe/Copenhagen");

    copenghagenDateElement.innerHTML = copenhagaenTime.format("MMMM Do, YYYY");
    copenhagenTimeElement.innerHTML = copenhagaenTime.format(
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

updateTime();
setInterval(updateTime, 1000);

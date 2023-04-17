function countdownTimer() {
  const seconds = document.querySelector(".js-seconds")
  const minutes = document.querySelector(".js-minutes")
  const hours = document.querySelector(".js-hours")
  const days = document.querySelector(".js-days")

  let secondsValue = Number(seconds.textContent)
  let minutesValue = Number(minutes.textContent)
  let hoursValue = Number(hours.textContent)
  let daysValue = Number(days.textContent)

  if (secondsValue > 0) {
    secondsValue--
  } else if (minutesValue > 0) {
    minutesValue--
    secondsValue = 59
  } else if (hoursValue > 0) {
    hoursValue--
    minutesValue = 59
    secondsValue = 59
  } else if (daysValue > 0) {
    daysValue--
    hoursValue = 23
    minutesValue = 59
    secondsValue = 59
  }

  const formattedSeconds = secondsValue.toString().padStart(2, "0")
  const formattedMinutes = minutesValue.toString().padStart(2, "0")
  const formattedHours = hoursValue.toString().padStart(2, "0")
  const formattedDays = daysValue.toString().padStart(2, "0")

  seconds.textContent = formattedSeconds
  minutes.textContent = formattedMinutes
  hours.textContent = formattedHours
  days.textContent = formattedDays
}

setInterval(countdownTimer, 1000)

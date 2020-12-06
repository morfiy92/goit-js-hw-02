const contentWords = ["spam", "sale"]

const checkForSpam = function (message) {
  for (const contentWord of contentWords) {
    if (message.toLowerCase().includes(contentWord)) {
      return true
    }
  }

  return false
}

console.log(checkForSpam("Latest technology news"))

console.log(checkForSpam("JavaScript weekly newsletter"))

console.log(checkForSpam("Get best sale offers now!"))

console.log(checkForSpam("[SPAM] How to earn fast money?"))

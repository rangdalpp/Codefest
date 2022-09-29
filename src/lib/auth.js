
export function getLogInId() {
  const loginId = localStorage.getItem("start-young-loginId")

  if (!loginId) return false

  return loginId

}

export function getUserType() {
  const userType = localStorage.getItem("start-young-userType")

  if (!userType) return false

  return userType

}

export function getLogInDetails() {
  const userType = localStorage.getItem("start-young-userType")
  const loginId = localStorage.getItem("start-young-loginId")

  if (!loginId && !userType) return false

  return true

}

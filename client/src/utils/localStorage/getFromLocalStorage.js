export default function getFromLocalStorage(storageName) {
  if (typeof window !== "undefined" && window.localStorage) {
    // return JSON.parse(localStorage.getItem(storageName))
    return localStorage.getItem(storageName)
  } else {
    return []
  }
}

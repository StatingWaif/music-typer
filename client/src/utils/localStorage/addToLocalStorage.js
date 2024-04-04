export default function addToLocalStorage(obj, storageName) {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(storageName, JSON.stringify(obj))
    return true
  }
  return false
}

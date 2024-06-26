const formatDate = (obj) => {
  if (!obj) {
    return ""
  }
  const day = obj.day ?? "?"
  const month = obj.month ?? "?"
  const year = obj.year ?? "?"
  return `${String(day).padStart(2, "0")}.${String(month).padStart(2, "0")}.${year}`
}

export default formatDate

const formatDate = ({ day, month, year }) => {
  return `${String(day).padStart(2, "0")}.${String(month).padStart(2, "0")}.${year}`
}

export default formatDate

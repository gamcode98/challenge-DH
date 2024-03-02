export function formatDateString (dateString) {
  // Create a Date object from the input string
  const date = new Date(dateString)

  // Extract date components
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // Note: months are zero-based
  const year = date.getFullYear().toString().padStart(4, '0') // Use the full year (yyyy) instead of the last two digits

  // Create the formatted date string
  const formattedDate = day + '/' + month + '/' + year

  return formattedDate
}

export function createDateFromFormat (dateString) {
  const [day, month, year] = dateString.split('/')

  const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10))

  return date
}

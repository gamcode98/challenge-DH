export const genders = [
  { label: 'Mujer', value: 'mujer' },
  { label: 'Hombre', value: 'hombre' }
]

const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] }

export function isValidFileType (fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
}

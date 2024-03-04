const cloudinary = require('cloudinary').v2
const { cloudinaryApiKey, cloudinaryApiSecret, cloudinaryName } = require('../config/config')

cloudinary.config({
  cloud_name: cloudinaryName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret,
  secure: true
})

async function handleUpload (file, folder) {
  const b64 = Buffer.from(file.buffer).toString('base64')
  const dataURI = 'data:' + file.mimetype + ';base64,' + b64
  const res = await cloudinary.uploader.upload(dataURI, {
    folder
  })
  return res
}

module.exports = {
  handleUpload
}

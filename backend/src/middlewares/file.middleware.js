const multer = require('multer')
const boom = require('@hapi/boom')

const storage = multer.memoryStorage()

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const regex = /(^image)(\/)[a-zA-Z0-9_]*/
    if (!regex.test(file.mimetype)) return cb(boom.badRequest('Formato de archivo no permitido'))
    cb(null, true)
  }
})

module.exports = { upload }

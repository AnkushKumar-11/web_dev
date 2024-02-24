const multer = require('multer')
const {v4 : uuid} = require('uuid')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, res, cb){
        cb(null, './public/images/upload')
    },
    filename: function(req, file, cb){
        const uniquename = uuid();
        cb(null, uniquename+path.extname(file.originalname));
    }
})

const upload = multer({storage: storage})

module.exports = upload;
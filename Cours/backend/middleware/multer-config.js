const multer = require('multer');

const TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',

};

const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null,'images');
    },
    filename: (req,file,callback)=>{
        const name = file.originalname.split(' ').join('_');
        const ext = TYPES[file.mimetype];
        callback(null,name + Date.now() + '.' + ext);
    }
});


module.exports = multer({storage}).single('image');
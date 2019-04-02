const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mkdirp = require('mkdirp');
const app = express();

const PORT = 5000;
const URL = `http://localhost:${PORT}/`;

app.use(express.static('public'))

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './public/images/uploads';
        mkdirp(dir, err => cb(err, dir))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage })

app.use(cors());

app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        res.json({imageUrl: `${URL}images/uploads/${req.file.filename}`});
    }
    else{
        res.status("409").json("No Files to Upload.");
    } 
});

app.listen(PORT);
console.log('api runnging on port: ' + PORT);
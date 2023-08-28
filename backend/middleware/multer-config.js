const multer = require('multer');
const SharpMulter = require('sharp-multer');

const newFilenameFunction = (og_filename, options) => {
  const newname =
      og_filename.split(".").slice(0, -1).join(".") +
      `${options.useTimestamp ? "-" + Date.now() : ""}` +
      "." + options.fileFormat;
  return newname;
  };

const storage = SharpMulter({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  imageOptions:{
    fileFormat: "webp",
    quality: 80,
    resize: { width: 500, height: 500, resizedMode: "contain" },
      },
  filename: newFilenameFunction,
});

module.exports = multer({storage}).single('image');
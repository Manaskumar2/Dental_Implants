const fs = require('fs');
const path = require('path');

let uploadFile = async (file) => {
  return new Promise(function(resolve, reject) {
    let fileMimeType = file.mimetype.split('/');
    let fileFormat = fileMimeType[fileMimeType.length - 1];
    let filePath = path.join(__dirname, '..', 'uploads', `${file.id}.${fileFormat}`);

    fs.writeFile(filePath, file.buffer, (err) => {
      if (err) {
        return reject({ "error": err });
      }

      console.log("file uploaded successfully");
      return resolve(filePath);
    });
  });
}

module.exports = { uploadFile };

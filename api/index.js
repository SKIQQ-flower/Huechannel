const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const path = require('path');

app.get('/random-image', (req, res) => {
  // Define the folder where your images are located
  const folderPath = path.join(__dirname, 'Agrinx');

  // Read all the files in the folder
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      // Handle the error if there is one
      console.error(err);
      return res.status(500).send('No images for you :\'(');
    }

    // Select a random file from the folder
    const randomFile = files[Math.floor(Math.random() * files.length)];

    // Construct the full path to the image file
    const imagePath = path.join(folderPath, randomFile);

    // Send the image file to the client
    res.sendFile(imagePath);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
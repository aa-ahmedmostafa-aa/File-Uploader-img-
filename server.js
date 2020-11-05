const express = require("express");
const fileupload = require("express-fileupload");
const app = express();
const cors = require('cors');
const { json } = require("express");

app.use(fileupload()); // intialize file upload .
app.use(cors());
//*** Upload End Point */

app.post("/upload", (req, res) => {
  console.log(req.files);
  if (req.files === null) {
    res.status(400).json({ msg: "No file uploaded" });
  }
    const file = req.files.file; //file come from react

    // file.mv used to mv file to specific path
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({err});
      }
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  }

);

app.listen(5000, () => console.log("Server is running ...."));

const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/',(req, res) => {
  // console.log(req);
  console.log(JSON.stringify(req.body));
  // const fileName = req.body.fileName;
  // const file = fs.createWriteStream(fileName);
  const file = fs.createWriteStream("file.txt");
  file.write(JSON.stringify(req.body));

  var buff = Buffer.from(JSON.stringify(req.body), 'binary');
  file.write(buff);

  file.end();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({"success":true}).end();
});


module.exports = router;

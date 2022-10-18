fs.readFile(file, 'utf-8', function (err, data) {
#!/usr/bin/node
const fs = require('fs');
const file = process.argv[2];
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

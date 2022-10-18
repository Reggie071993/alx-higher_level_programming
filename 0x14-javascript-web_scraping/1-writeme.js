const file = process.argv[2];
const content = process.argv[3];
#!/usr/bin/node
const fs = require('fs');
fs.writeFile(file, content, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  }
});

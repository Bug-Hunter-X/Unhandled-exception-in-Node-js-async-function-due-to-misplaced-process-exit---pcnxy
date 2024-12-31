```javascript
const fs = require('fs');

function processFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function main() {
  try {
    const fileContent = await processFile('./myFile.txt');
    console.log(fileContent);
    //Do something with the fileContent
    process.exit(0); // This line should be inside the try block
  } catch (error) {
    console.error('Error processing file:', error);
    process.exit(1); //This line was outside the try block
  }
}

main();
```
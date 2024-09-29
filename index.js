import fs from 'fs';
import qr from 'qr-image';
import inquirer from 'inquirer';
// import { url } from 'inspector';

inquirer
  .prompt([
    {
      message: 'enter yourt url',
      name: 'URL',
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('paths.txt', url,(err)=>{
        if(err) throw err;
        console.log('the file has saved');
    });

  })

  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      // Something else went wrong
    }
  });

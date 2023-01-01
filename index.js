const fs = require('fs');
const path = require("path");
// const dir = './files';
// if(!fs.existsSync(dir)){
// 	fs.mkdirSync(dir);
// }
const dirPath = path.join(__dirname, 'files');
// for (let i = 0; i < 5; i++) {
// 	fs.writeFileSync(dirPath+`/hello${i}.txt`,'a simple text file');
// }
fs.readdir(dirPath, (error, items)=>{
	items.forEach((item)=>{
		console.log(item);
	});
});
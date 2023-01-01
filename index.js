const fs = require('fs');
const path = require('path');
const dir = './crud';
if(!fs.existsSync(dir)){
	fs.mkdirSync(dir);
}
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;
fs.writeFileSync(filePath, "This is a simple text file.");
fs.readFile(filePath, 'utf8', (err, item)=>{
	console.log(item);
});
fs.appendFile(filePath, ' And file name is apple.txt', (err) => {
	if(!err){
		console.log('File is updated.');
	}
});
fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
	if(!err){
		console.log('Filename is updated.');
	}
});
const filePath = `${dirPath}/fruit.txt`;
if(fs.existsSync(filePath)){
	fs.unlinkSync(filePath);
}
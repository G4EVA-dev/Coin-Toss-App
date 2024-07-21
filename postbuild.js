import fs from 'fs'
import path from 'path'

// Paths
const srcPath_1 = path.resolve('./dist','views','gameView','game.html');
const srcPath_2 = path.resolve('./dist','views','gameFormView','gameForm.html');
const srcPath_3 = path.resolve('./dist','views','resultView','result.html');
const destPath_1 = path.resolve('./dist','game.html');
const destPath_2 = path.resolve('./dist','gameForm.html');
const destPath_3 = path.resolve('./dist','result.html');
// Function to move the file
function moveFile(src, dest) {
  fs.rename(src, dest, (err) => {
    if (err) throw err;
    console.log(`Moved ${src} to ${dest}`);
  });
}

// Ensure the destination directory exists
const destDir = path.dirname(destPath_1);
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Move the file
moveFile(srcPath_1, destPath_1);
moveFile(srcPath_2, destPath_2);
moveFile(srcPath_3,destPath_3)
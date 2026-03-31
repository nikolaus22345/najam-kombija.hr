const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const dirFiles = fs.readdirSync(dir);
  for (const file of dirFiles) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, fileList);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('node_modules') && !fullPath.includes('SeoH1.tsx')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const pagesDir = path.join(__dirname, 'src', 'components');
const filesToProcess = walk(pagesDir);

let count = 0;

for (const file of filesToProcess) {
  let content = fs.readFileSync(file, 'utf8');
  
  // if it DOES literally have an <h1 tag
  if (/<h1\b/i.test(content)) {
    // Check if it already has SeoH1
    if (!content.includes('import { SeoH1 }')) {
      // Add import at the top
      content = 'import { SeoH1 } from "@/components/SeoH1";\n' + content;
    }
    
    // Replace <h1 or <h1... with <SeoH1
    content = content.replace(/<h1(\s|>)/gi, '<SeoH1$1');
    content = content.replace(/<\/h1>/gi, '</SeoH1>');
    
    fs.writeFileSync(file, content, 'utf8');
    count++;
    console.log(`Updated: ${path.basename(file)}`);
  }
}

console.log(`Successfully updated ${count} matching files to use <SeoH1>`);

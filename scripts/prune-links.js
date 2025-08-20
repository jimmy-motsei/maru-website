// Script to prune legacy project and team links across HTML files.
// Replaces href="project-#.html" with our-work.html, collapses Projects menu block, and removes team link.

const fs = require('fs');
const path = require('path');

const root = process.cwd();

function isHtml(f){return f.endsWith('.html');}

function getAllHtmlFiles(dir){
  const entries = fs.readdirSync(dir,{withFileTypes:true});
  let files=[];
  for(const e of entries){
    if(e.isDirectory()){
      // skip common asset folders
      if(['img','css','js','plugins','scss','scripts'].includes(e.name)) continue;
      files=files.concat(getAllHtmlFiles(path.join(dir,e.name)));
    } else if(isHtml(e.name)) files.push(path.join(dir,e.name));
  }
  return files;
}

const files = getAllHtmlFiles(root);

const projectHrefRegex = /href="project-[0-9]+\.html"/g;
const projectsBlockRegex = /<h6 class="mil-muted mil-mb-30">Projects<\/h6>\s*<ul class="mil-menu-list">[\s\S]*?<\/ul>/g;
const teamLinkRegex = /<li>\s*<a href="team.html">Team<\/a>\s*<\/li>\s*/g;

let changed = 0;
for(const file of files){
  let content = fs.readFileSync(file,'utf8');
  const original = content;

  // Replace project links
  content = content.replace(projectHrefRegex,'href="our-work.html"');
  // Collapse projects block
  content = content.replace(projectsBlockRegex,'<h6 class="mil-muted mil-mb-30">Our Work</h6>\n<ul class="mil-menu-list">\n  <li><a href="our-work.html" class="mil-light-soft">Case Studies & Portfolio</a></li>\n</ul>');
  // Remove team link
  content = content.replace(teamLinkRegex,'');
  // If team.html file itself (already redirect stub) skip modifications (content too small) - pattern won't match anyway

  if(content !== original){
    fs.writeFileSync(file,content,'utf8');
    changed++;
    console.log('Updated', path.basename(file));
  }
}

console.log(`Pruning complete. Files changed: ${changed}`);

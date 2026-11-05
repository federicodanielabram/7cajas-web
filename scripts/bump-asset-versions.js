// Auto-bumps the ?v= cache-busting query on the CSS and JS tags in
// index.html, based on the actual content hash of each file. Run this
// before every deploy (see deploy.sh) so visitors always get fresh
// assets after an edit, without needing a manual version bump.
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'index.html');

const assets = [
  { file: path.join(root, 'css', 'style.css'), pattern: /href="css\/style\.css\?v=[^"]*"/, build: (h) => `href="css/style.css?v=${h}"` },
  { file: path.join(root, 'js', 'main.js'), pattern: /src="js\/main\.js\?v=[^"]*"/, build: (h) => `src="js/main.js?v=${h}"` },
];

let html = fs.readFileSync(htmlPath, 'utf8');
let changed = false;

for (const asset of assets) {
  const content = fs.readFileSync(asset.file);
  const hash = crypto.createHash('md5').update(content).digest('hex').slice(0, 8);
  const replacement = asset.build(hash);
  const updated = html.replace(asset.pattern, replacement);
  const label = path.basename(asset.file);
  if (updated === html) {
    console.log(`${label} version already up to date (v=${hash})`);
  } else {
    html = updated;
    changed = true;
    console.log(`${label} version bumped to v=${hash}`);
  }
}

if (changed) {
  fs.writeFileSync(htmlPath, html);
}

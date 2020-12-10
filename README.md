# Sergey-Tailwind

Basic Sergey Static site generator with Tailwind CSS v2 including autoprefixer and postcss.

Official web : https://sergey.cool

Official repo : https://github.com/trys/sergey/

# Installation

## Install sergey globally

```
npm i -g sergey
```
and i make some modification in %appdata% you know 

```
C:\Users\PC\AppData\Roaming\npm\node_modules\sergey\src\index.js
```
change port number and some excluded file/folders

```js
const PORT = Number(getEnv('--port=', 'SERGEY_PORT')) || 3000;
const excludedFolders = [
  '.git',
  '.DS_Store',
  '.prettierrc',
  'node_modules',
  'package.json',
  'package-lock.json',
  'tailwind.config.js',
  'postcss.config.js',
  'tailwind.css',
  'package-lock.json',
  IMPORTS_LOCAL,
  OUTPUT_LOCAL,
  ...EXCLUDE
];
```

Clone this repo

Navigate to project folder then run

```
npm install
```

If success we'll have node_modules folder you know.. 😉

# Build style.css for development then launch localhost:3000

```
npm run dev
```

# Build purged/minified style.css for production

```
npm run start
```

I didn't know much about NPM and their stuff any suggestion are welcome.

#windows_user :(

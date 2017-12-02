/* @flow */

import path from 'path';
import fs from 'fs';
import { build, serve } from 'component-docs';

const task = process.argv[2];
const dist = path.join(__dirname, 'dist');

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

function getPages() {
  const components = fs
    .readFileSync(path.join(__dirname, '../src/index.js'))
    .toString()
    .split('\n')
    .map(line =>
      line
        .split(' ')
        .pop()
        .replace(/('|;)/g, '')
    )
    .filter(line => line.startsWith('./components'))
    .filter(line => !line.includes('Typography')) //FIXME issues while parsing Typography/index.js
    .map(line => {
      const file = require.resolve(path.join(__dirname, '../src', line));
      if (file.endsWith('/index.js')) {
        const matches = fs
          .readFileSync(file)
          .toString()
          .match(/export \{ default \} from .+/);
        if (matches && matches.length) {
          const name = matches[0]
            .split(' ')
            .pop()
            .replace(/('|;)/g, '');
          return require.resolve(path.join(__dirname, '../src', line, name));
        }
      }
      return file;
    })
    .sort((a, b) => {
      const nameA = a.split('/').pop();
      const nameB = b.split('/').pop();
      return nameA.localeCompare(nameB);
    })
    .map(file => ({ file, type: 'component' }));

  const docs = fs.readdirSync(path.join(__dirname, 'pages')).map(file => ({
    file: path.join(__dirname, 'pages', file),
    type: file.endsWith('.js') ? 'custom' : 'markdown',
  }));
  return [...docs, { type: 'separator' }, ...components];
}
if (task !== 'build') {
  serve({
    pages: getPages,
    output: path.join(__dirname, 'dist'),
  });
} else {
  build({
    pages: getPages,
    output: path.join(__dirname, 'dist'),
  });
}

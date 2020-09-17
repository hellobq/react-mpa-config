'use strict';
const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// page1 使用 special.html 这个模板
module.exports = {
  page2: {
    template: resolveApp('public/special.html'),
  }
}

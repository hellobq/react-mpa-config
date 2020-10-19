## react-mpa
基于 create-react-app 改造的多页应用模板

### 新建页面
在 src/pages/ 下建新的页面；
如果该页面所基于的模板不是 public/index.html，则需要：
  1. 在 public/ 下新建 xx.html 文件；
  2. 在 config/custom-html-config.js 内添加该页面对应的模板（也就是上一步的 xx.html）;
  
注意：custom-html-config.js 内 template 的 key 必须和 src/pages/ 页面名称一致，否则模板不生效。

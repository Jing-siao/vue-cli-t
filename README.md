# vue-cli-架構

###### ├── node_modules/
###### ├── README.md
###### ├── babel.config.js
###### ├── package-lock.json
###### ├── package.json
###### ├── public
###### │   ├── favicon.ico
###### │   └── index.html
###### └── src
######    ├── App.vue
   ###### ├── assets
   ###### │   └── logo.png
   ###### ├── components
   ###### │   └── HelloWorld.vue
   ###### └── main.js







###### public：靜態資源資料夾，這裡的檔案不經 webpack 打包，直接複製

###### public/index.html：首頁的 HTML 檔，裡面不會有主要內容，可編輯網頁所需的 meta tag 或是引入外部的 css 或 js

###### src/assets：圖檔資料夾，會經過 webpack 打包，必須放在這個資料夾內才能夠在成功被引用

###### src/main.js：整個 Vue 專案的最源頭，裡面引入了 Vue 並創建了 Vue 實例，這個 Vue 實例有一個引入的 components 就是 App.vue

###### 若有使用 vue 的套件，如：vue router 、vue touch，下載後須從 main.js 引入

###### src/components：依照規劃將不同的內容或功能分成一個個 component，可以互相引用

###### src/App.vue：頁面最上層的根節點，綁定在 index.html 中的 <div id ="app"></div> ，要使用的 component 皆會掛在 App.vue 底下
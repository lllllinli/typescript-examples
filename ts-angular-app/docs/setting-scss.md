# 專案設定 scss

參考 angular cli wiki

https://github.com/angular/angular-cli/wiki/stories-css-preprocessors

* 方法一 :
  `ng new sassy-project --style=scss`

* 方法二 :
  1. `ng config schematics.@schematics/angular:component.styleext scss`
  2. 修改 `root` 目錄下，`angular.json` 檔案。
  ```scss
  { 
    "styles": [
      "src/styles.scss"
    ],
  }
  ```

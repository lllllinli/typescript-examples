# Add Global Scripts、Styles、Assets

整個網站 Global 使用的

## 設定

1. 設定在 `Page Global`：


- 將 `js` 或 `css` 資源放於，`src/assets/` 下於 `index.html` 加入
  ```html
  <script src="assets/..."></script>
  ```



3. 設定在 `Webpack Global`：

- 於 `angular.json` 設定 `global script`。

  ```json
  //
  script: [
    "../{project-name}/node_modules/jquery/dist/jquery.js",
    "../{project-name}/node_modules/bootstrap/dist/js/bootstrap.js",
    
    // lazy load ，html script 新屬性
    { "input": "src/lazy-script.js", "lazy": true },
    
    // rename
    { "input": "src/pre-rename-script.js", "bundleName": "renamed-script" },
  ]
 
  ```
  
-  於 `angular.json` 設定 `global styles`。

  ```
  "styles": [
    "src/assets/styles/styles.scss"
  ],
  ```

-  於 `angular.json` 設定 `Assects`。  
```
  "assets": [
    { "glob": "**/*", "input": "../node_modules/open-iconic/svg", "output": "./assets/svg" },
    "assets",
    "favicon.ico"
  ]
  ```



##  參考資料

+ [How to Add Third-Party Library in Angular CLI](https://nitayneeman.com/posts/how-to-add-third-party-library-in-angular-cli/)
+ [How to add Bootstrap 4 to your Angular 6 Front-End?](https://www.techiediaries.com/angular-bootstrap-tutorial/)
+ [how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6](https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b)

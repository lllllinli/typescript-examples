## Add Component Prefix

修改專案的 `prefix` 如在使用 component 時，需要加前綴詞。<br>
專案預設為 `app`。

> 修改 `angular.json`

```
{
  "projects": {
      "{ project-name }": {
        "root": "",
        "sourceRoot": "src",
        "projectType": "application",
        "prefix": "{ 填入你想要的前綴詞（ 預設是 app ） }",
        }
  }
}
```

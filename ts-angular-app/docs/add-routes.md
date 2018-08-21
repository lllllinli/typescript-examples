# 添加 router

參考：

1. [官方教程](https://angular.cn/tutorial/toh-pt5)
2. [angular cli wiki](https://github.com/angular/angular-cli/wiki/stories-routing)

使用 angular cli 建立 router module

```
$ng generate module router/app-routing --flat --module=app
--flat 把这个文件放进了 src/app 中，而不是单独的目录中。
--module=app 告诉 CLI 把它注册到 AppModule 的 imports 数组中。
```



# Angular

---------------------------------------------------------




30 天精通 Git 版本控管
https://github.com/doggy8088/Learn-Git-in-30-days






Angular 深入淺出三十天 系列
https://ithelp.ithome.com.tw/users/20090728/ironman/1600




npm 基本指令
http://dreamerslab.com/blog/tw/npm-basic-commands/


---------------------------------------------------------


清除npm cache

```
npm cache clean -f
```







將 node.js 更新到最新

```
npm update
npm install
```
執行 npm install，如果後面不加套件名稱的話

npm 會當作是你想把 package.json 上現在缺的 Dependency 都裝回來




更新工作區的Angular CLI（本地）

```
npm install --save -dev @angular/core@latest
npm install --save -dev @angular/cli@latest
```

```
npm audit
```




確認 Angular 目前版本

```
ng --version
```

獲取需要升級的所有依賴項的列表

```
ng update
```


```
ng update @angular/cli @angular/core
```


遇到 "Repository is not clean. Please commit or stash any changes before updating."

```
ng update @angular/cli @angular/core --allow-dirty
```


```
ng build
```






```
ng serve
```



tsconfig.json
"angularCompilerOptions": {
"enableIvy": false,
}






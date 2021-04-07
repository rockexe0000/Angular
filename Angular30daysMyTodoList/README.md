# Angular30daysMyTodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



-------------------------------------------------------------

# To Do List




首先當然是用 Angular CLI 建立一個新專案：

```
ng new Angular30daysMyTodoList --skip-tests
```

待 CLI 跑完之後記得輸入指令讓 CLI 幫你啟動本地端的 Server：

```
ng serve -o
```

這次我們來做點特別的事情，先讓 CLI 幫我們建個 NgModule：

```
ng g module todo-list
```

有 NgModule 之後，當然也要再建個 Component ：

```
ng g component todo-list
```


接下來我想要新增一個 Service ，將之後 CRUD 的部份都交給這個 Service 來處理，Component 只要專心處理畫面的顯示就好。

所以輸入以下指令來新增 TodoListService：

```
ng generate service todo-list/todo-list
```


建立一個叫做 Todo 的資料物件模型：

```
ng generate class todo-list/todo --type model
```

> 在新增類別的指令額外加上 --type 的參數是為了要讓 CLI 幫我們產生檔案時，檔案名稱會變成 [filename].[type].ts 這樣的命名方式，檔案內容並不會有任何變化。
如果沒有加上 --type 的話，CLI 在產生檔案時，檔案名稱只會是 [filename].ts 而已。











-------------------------------------------------------------


## 參考


Angular 深入淺出三十天] Day 13 - Angular小學堂（三之一）
https://ithelp.ithome.com.tw/articles/10205808










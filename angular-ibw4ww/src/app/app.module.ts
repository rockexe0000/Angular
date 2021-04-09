import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '',  // 預設路由
        component: ProductListComponent 
      },
      { path: 'products/:productId', 
        component: ProductDetailsComponent 
      },
      { path: 'cart', 
        component: CartComponent 
      },
    ], { 
      enableTracing: true, // 在每次 Routing 改變的時候都會在控制台裡印出 Log
      //useHash: true, // URL 會有 「#」
      preloadingStrategy: PreloadAllModules // 在第一個頁面顯示後，才會陸續的將其他的module下載到本機上
    })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
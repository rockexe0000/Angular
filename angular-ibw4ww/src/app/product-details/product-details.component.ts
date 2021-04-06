import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {

    //window.alert('this.route = '+ this.route );


    //window.alert('this.route.paramMap = '+ this.route.paramMap );


    


    this.route.paramMap.subscribe(params => {

      //window.alert('products = '+ products );

      //window.alert('params = '+ params );

      //window.alert('products[+params.get(Id)] = '+ Number(products[+params.get('Id')]) );
      

      //window.alert('products[+params.get(name)] = '+ products[+params.get('name')] );



      //window.alert('params.getAll.toString = '+ params.getAll.toString );

      /*
      var arr = new Array("orange", "mango", "banana", "sugar");         
      var str = arr.toString(); 
      window.alert("Returned string is : " + str );
      */

      
      //params.getAll.length
      /*
      for (let i = 0; i < params.getAll.length; i++) {
        window.alert('params.getAll['+i+'] = '+ params.getAll[i] );
      }
      */



      /*
    let arr = products;
    for (let data of arr) {
        console.log(data);
    }*/



      this.product = products[+params.get('productId')];
    });

    //window.alert('this.product = '+ this.product );

  }


  



}

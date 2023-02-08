import { Component , Input  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

@Input() product = {

  "createdAt":"",
       "name":"",
       "image":"",
       "description":"",
       "rate":9,
       "count":10,
       "price":"",
       "reviews":[
          "reviews 3"
       ],
       "id":"1"
}

constructor(private router : Router){

}
isTrue : boolean = true ;
checkCountGTZero() : any{
  if(this.product.count > 0){
        console.log(this.product.count);
        return true
  }

}
checkCountLTZero (): any{
  if(this.product.count < 0){
        console.log(this.product.count);
        return true
  }

}
redirectToDetails(){
  this.router.navigate(['/product-details' , this.product.id]);
}
}


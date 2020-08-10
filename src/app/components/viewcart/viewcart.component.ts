import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shop.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  cartDetails: any;
  
  totalPrice:number=0;
  show=true;

  constructor(private shop:ShopService) { }

  ngOnInit(): void {

    this.cartDetails=JSON.parse(localStorage.getItem("cartItems"))
    console.log(this.cartDetails)
    if(this.cartDetails){
      this.show=false;
    }
    
  }


  add(index){
     
    if(  this.cartDetails[index].quantity<4)
    {
      this.cartDetails[index].quantity++;
    localStorage.setItem("cartItems",JSON.stringify(this.cartDetails))
  }else{
    alert("quantity Not Available")
  }

  }
  dec(index)
  {
    if(  this.cartDetails[index].quantity>1){
    this.cartDetails[index].quantity--;
    localStorage.setItem("cartItems",JSON.stringify(this.cartDetails))
    }
  }
  checkout(){
    this.totalPrice=0;
    console.log("hello")
    this.cartDetails=JSON.parse(localStorage.getItem("cartItems"))

    for(let i=0;i<this.cartDetails.length;i++){
      this.totalPrice=this.totalPrice+  this.cartDetails[i].quantity*  this.cartDetails[i].price;
    }
    console.log(this.totalPrice)
    return this.totalPrice;
    
  }
  dele(i){
   if (confirm("Are you sure")){
      this.cartDetails.splice(i,1)
      localStorage.setItem("cartItems",JSON.stringify(this.cartDetails))
      this.shop.successmsg("Delete Succesfully")
      
    }
    else{
      return false;
    }
   
  }

}

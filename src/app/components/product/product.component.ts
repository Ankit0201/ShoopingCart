import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/shop.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  get: any=[];
  proValue: any;
  cart: any;
  b: any;
  totalItems: number;
  user: any;
  data: any;
  addedToWishlist:boolean=false;
  

  constructor(private router:Router,public shop:ShopService) { }
  products:Products[];

  ngOnInit(): void {


    this.user=JSON.parse(localStorage.getItem("active"))
    if(this.user){
    this.data=this.user.fname
    } 

    this.products=[
      {Id:1,category:"mobile",price:7000,quantity:1,image:"assets/images/oppo.jpg",
      description: "Mobile app developer primary duty is to create, maintain and implement the source code to develop mobile apps and programs that meet the needs and requirements of the clients using the computer programming languages. Mobile developers are a type of software developer. They specialise in mobile technology such as building apps for Google's Android, Apple's iOS and Microsoft's Windows Phone platforms."},
   
      {Id:2,category:"laptop",price:30000,quantity:1,image:"assets/images/laptop.jpg",
      description:"A laptop computer is a portable personal computer powered by a battery, or an AC cord plugged into an electrical outlet, which is also used to charge the battery. Laptops have an attached keyboard and a touchpad, trackball, or isometric joystick used for navigation"},
     
      {Id:3,category:"handfree",price:1000,quantity:1,image:"assets/images/handfree.jpg",
      description:"Hands-free is an adjective describing equipment that can be used without the use of hands (for example via voice commands) or, in a wider sense, equipment which needs only limited use of hands, or for which the controls are positioned so that the hands are able to occupy themselves with another task (such as driving)"},
     
      {Id:4,category:"AKM",price:2000,quantity:1,image:"assets/images/AKM.png",
      description:"Design details. The AKM is an assault rifle chambered in 7.62×39mm Soviet intermediate cartridge. It is a selective fire, gas operated with a rotating bolt, firing in either semi-automatic or fully automatic, and has a cyclic rate of fire of around 600–650 rounds per minute (RPM).AKM, AKML: 880 mm (34.6 in); AKMS, ..."},
     
      {Id:5,category:"shoes",price:2000,quantity:1,image:"assets/images/shoes.jpg",
      description:"A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. ... Some shoes are worn as safety equipment, such as steel-soled boots which are required on construction sites"},

     {Id:6,category:"Accessories",price:2000,quantity:1,image:"assets/images/accessories.jpg",
     description:"A fashion accessory is a decorative item that supplements one's outfit. Items such as such as jewellery, gloves, handbags, hats, belts, scarves, watches, sunglasses, pins, stockings, bow ties, leggings, ties, suspenders, and tights. ... Accessories are also available in the form of bracelets, necklaces, and earrings."},
    ]

    localStorage.setItem("productsDetail",JSON.stringify(this.products))
   JSON.parse( localStorage.getItem("active"));
  }

  handleAddToWishlist(){
    if(this.addedToWishlist)
    {
      this.addedToWishlist=false;
    }else{
      this.addedToWishlist=true;
    }
  }
 
  add(id){
    if(localStorage.getItem("active")){
    //...... find function........................
// this.proValue=JSON.parse(localStorage.getItem("productsDetail"));
this.cart=this.products.find(resp => resp.Id==id);

console.log("jsbjhsa",this.cart)

if(localStorage.getItem("cartItems")){


  this.get=  JSON.parse(localStorage.getItem("cartItems"));
  this.b=this.get.find(resp => resp.Id==id);
//.... Items Already in cart......
if(this.b){
  for(let i=0;i<this.get.length;i++){
  if(this.get[i].Id == id)
  {
    this.shop.errormsg("Already in cart","check it")
   this.get[i].quantity++;
   localStorage.setItem("cartItems",JSON.stringify(this.get));
   this.totalItems=this.shop.quantity();
   console.log("data",this.totalItems)

    break;
    
  }
  
}
}
///....items not in cart..........
else{
  this.get.push(this.cart)
  localStorage.setItem("cartItems",JSON.stringify(this.get));
  this.shop.successmsg("Added to cart")
  this.totalItems=this.shop.quantity();
  }
  }
  else{
  this.get.push(this.cart)
  localStorage.setItem("cartItems",JSON.stringify(this.get));
  this.shop.successmsg("Added to cart")
   this.totalItems=this.shop.quantity();
  }

 
}
else{
  this.shop.errormsg("YOU are not Login","Plese Login")
  this.router.navigate(['/login']);
}


    
  }

 
  

}

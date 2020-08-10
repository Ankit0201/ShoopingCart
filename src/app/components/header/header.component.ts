import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/shop.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  quantity: any;
  user: any;
  data: any;


  constructor(private router:Router,public shop:ShopService) {  }

  ngOnInit(): void{

    
    
  }

  
  
  logout(){
   if( confirm("Are you sure"))
 { localStorage.removeItem("active");
  this.router.navigate(['/product'])}
  else{
    return false;
  }
  }
}

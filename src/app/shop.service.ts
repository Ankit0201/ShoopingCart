import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  quant: any;
  count:number=0;

  constructor( private http:HttpClient, private toastr: ToastrService) { }
  ngOnInit(): void {
    
    
  }


  successmsg(message){
    this.toastr.success(message)
  }

  errormsg(err,title){
    this.toastr.error(err,title)
  }


  check(){
    if(JSON.parse(localStorage.getItem("active"))){
    return true;
    }
  }
getForcast() :Observable<any>{
 
  return this.http.get(`https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=zh_cn&appid=b1b15e88fa797225412429c1c50c122a1`)
  // .map(result=>result);
}

  quantity()
  {
    this.quant=JSON.parse(localStorage.getItem("cartItems"));
    this.count=0;
  
 
    for(let i=0;i<this.quant.length;i++){


      this.count=this.count+this.quant[i].quantity;

    }
  

return this.count;
  }

}

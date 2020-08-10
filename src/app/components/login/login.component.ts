import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShopService } from 'src/app/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  constructor(private fb:FormBuilder,
              private service:ShopService,
              private router:Router) { }
  get: any;
  count: any=0;
  loginform:FormGroup;
  ngOnInit(): void {
    this.loginform = this.fb.group({
   email: ['',Validators.required],
   password:['',Validators.required],
  
  })
  }

  login(){
    this.get=JSON.parse(localStorage.getItem("userdata"));
// .......checking..

    for(var i=0;i<this.get.length;i++){
     
      if(this.loginform.value.email==this.get[i].email && this.loginform.value.password==this.get[i].password )
 {
  //  alert("Login Suc");
   this.count++;
   localStorage.setItem("active",JSON.stringify(this.get[i]));
   this.service.successmsg("Login Succesfull");
   this.router.navigate(['/product'])
   
   break;

 }  
 
    }

    // ....end...............
    if(this.count==0){
      // alert("Please Register");
      this.service.errormsg("Invalid Username and password  ","Registration failed")
    }
  }

}

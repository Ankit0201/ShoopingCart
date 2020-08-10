import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hello: any=[];
  constructor(private formbuilder:FormBuilder) { }

  myform:FormGroup;

  ngOnInit(): void {
    this.myform = this.formbuilder.group({
      fname: ['',Validators.required],
      lname: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password:['',Validators.required,],
      phone:['',Validators.required,]
  })
}

set(){
  if (this.myform.invalid) {
    return;
}
  if(localStorage.getItem("userdata")){
  this.hello=  JSON.parse(localStorage.getItem("userdata"))
  }
 
  this.hello.push(this.myform.value)
  localStorage.setItem("userdata",JSON.stringify(this.hello));
  console.log(this.myform.value.fname);
  alert("Successfull");
  this.myform.reset()
}



  



}

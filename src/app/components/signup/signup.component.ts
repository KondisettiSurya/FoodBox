import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { from, VirtualTimeScheduler } from 'rxjs';
import { User } from 'src/app/Models/user';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // 
  registerForm:FormGroup;
  // submitted=false;
  user: User =new User();
  msg1='Registered Successfully'
   constructor(
    private service:RegistrationService,
    private rote:Router,
    private formbuilder:FormBuilder) { }  

  ngOnInit(): void {

     this.registerForm = this.formbuilder.group({
       
       firstname : new FormControl('',Validators.compose([
         
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z]+$')
       ])),
      
     
       lastname : new FormControl('',Validators.compose([
         
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z]+$')
       ])),
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
     })  

     }
    
  

  onsubmit(){
  //  this.submitted =true
   if(this.registerForm.valid){
    this.rote.navigateByUrl('/home');
     }
     else
     {
  
      this.validateAllFormFields(this.registerForm);
      alert('Yours form is invaild');  
  }
  }


  private validateAllFormFields(formgroup:FormGroup){

    Object.keys(formgroup.controls).forEach(fields=>{
      const control= formgroup.get(fields);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }else if(control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }

 
  }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginuser:FormGroup;
  constructor(private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
  
    this.loginuser=this.formbuilder.group({

      email:['',Validators.required],
      password:['',Validators.required]

  

    })
  }
    onlogin(){
      if(this.loginuser.valid){
        this.route.navigateByUrl('/home');
         }
         else
         {
      
          this.validateAllFormFields(this.loginuser);
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
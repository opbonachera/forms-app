import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


const initialProd = { name:"RTX450", price:2500, inStorage:42}
@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
}) 
export class BasicPageComponent implements OnInit{
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.basicPageForm.reset(initialProd);
  }
  
  public basicPageForm: FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]], // Initial value, validation functions
    price:[0,[Validators.required, Validators.min(0)]],
    inStorage:[0,[Validators.required]]
  })

  isValidField( field:string ){
    return this.basicPageForm.controls[field].errors && 
    this.basicPageForm.controls[field].touched
  }

  getFieldError(field:string): string | null{
    if( !this.basicPageForm.controls[field] ) return null;

    const errors = this.basicPageForm.controls[field].errors || {}
    
    for (const key of Object.keys(errors)) {
      switch(key){
        case 'required':
          return 'Field is required';
        case 'minlength':
          return 'Name has to be at least 3 characters long'
        default:
          return 'Error'
      }
    }
    return 'aaaaaa'
  }
  public onSave(){
    if(this.basicPageForm.invalid){
      this.basicPageForm.markAllAsTouched;
      return;
    }
    console.log(this.basicPageForm.value)
    this.basicPageForm.reset();
  }

}

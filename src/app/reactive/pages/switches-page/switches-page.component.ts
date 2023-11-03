import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrls: ['./switches-page.component.css']
})
export class SwitchesPageComponent {
  public switchesForm: FormGroup = this.fb.group({
    gender: ['M',Validators.required],
    notifications: [true, Validators.required],
    termsConditions: [true, Validators.required]
  })

  public preson = {
    gender: 'F',
    notifications:true
  }
  constructor( private fb: FormBuilder ){}

  isValidField(field:string){
    return this.switchesForm.controls[field].errors && 
    this.switchesForm.controls[field].touched
  }

  onSave(){
    if( this.switchesForm.invalid ){
      this.switchesForm.markAllAsTouched();
      return;
    }

    console.log(this.switchesForm.controls)
  }
}

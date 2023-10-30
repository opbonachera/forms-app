import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})

export class BasicPageComponent {
  constructor(private fb: FormBuilder){

  }

  public basicPageForm: FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]], // Initial value, validation functions
    price:[0,[Validators.required, Validators.min(0)]],
    inStorage:[0,[Validators.required]]
  })

  public onSave(){
    if(this.basicPageForm.invalid)return;
    console.log(this.basicPageForm.value)
  }

}
